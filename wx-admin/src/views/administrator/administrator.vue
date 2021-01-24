<template>
  <div class="administrator">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">管理员列表</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">用户名称:</div>
        <div>
          <el-input
            v-model="queryParams.nickName"
            placeholder="请输入内容"
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex">
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-8">
        <div class="oper-left">
          <el-button type="success" class="" :disabled="!selectedIds.length"  @click.native.prevent="enableUser">批量启用</el-button>
          <el-button type="warning" :disabled="!selectedIds.length" @click.native.prevent="disableUser">批量禁用</el-button>
          <el-button type="primary" :disabled="!selectedIds.length"  @click.native.prevent="deletedUsers">批量删除</el-button>
        </div>
        <div class="oper-right pr-16">
          <el-button type="primary" @click="showAddUser = true">添加</el-button>
        </div>
      </div>
      <el-table
        class="table-content"
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="nickName" label="姓名"> </el-table-column>
        <el-table-column prop="userName" label="用户名" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="用户状态" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-switch
              @change="changeUserStatus(scope.row)"
              v-model="scope.row.status"
              active-color="#1677FF"
              inactive-color="#CCCCCC"
              active-value="0"
              inactive-value="1"
              :inactive-text="scope.row.status == 1 ? '禁用' : '启用'"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="passwdStatus"
          label="密码状态"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span :class="{ 'color-danger': scope.row.passwdStatus == 1 }">{{
              scope.row.passwdStatus == 1 ? "申请重置" : "正常"
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <span
              class="color-green pr-10 pointer"
              v-show="scope.row.passwdStatus == 1"
              @click="resetPwd(scope.row.userId)"
              >重置密码</span
            >
            <span
              class="color-red pointer"
              @click="handleDelete(scope.row.userId)"
              >删除</span
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
     <!-- 分页 -->
    <pagination :total="total" :queryParams="queryParams"  @initList="initList"></pagination>
    <!-- 新增管理员 -->
    <div class="add-panel">
      <el-dialog
        :visible.sync="showAddUser"
        width="50%"
        :close-on-click-modal="false"
      >
        <div slot="title">添加管理员</div>
        <div class="desc color-danger">必填项 *</div>
        <div class="mt-30 pb-30">
          <el-form
            label-width="100px"
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
          >
            <el-form-item label="姓名" prop="nickName">
              <el-input
                placeholder="请输入姓名"
                v-model="ruleForm.nickName"
              ></el-input>
            </el-form-item>
            <el-form-item label="登录用户名" prop="userName">
              <el-input
                placeholder="请输入用户名"
                v-model="ruleForm.userName"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                placeholder="请输入密码"
                v-model="ruleForm.password"
              ></el-input>
            </el-form-item>

            <el-form-item label="用户状态" prop="status">
              <el-select v-model="ruleForm.status" placeholder="请选择用户状态">
                <el-option label="正常" value="0"></el-option>
                <el-option label="禁用" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showAddUser = false">取 消</el-button>
          <el-button type="primary" @click.prevent="submitUser('ruleForm')"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import './administrator.scss'
import { addUser, getUserList, deleteUser, enableUser, disableUser, resetPwd } from '@/api/user'
import pagination from '@/components/pagination.vue'
export default {
  components: {
    pagination
  },
  data () {
    return {
      selectedIds: [], // 选中项的id
      selectedIdsStr: '', // 选中项id的拼接字符串
      // getList查询参数
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 20,
        // 查询参数
        nickName: '',
        roleIds: 1
      },
      // 总条数
      total: 0,
      // 管理员列表
      tableData: [],
      // 是否显示新增管理员弹框
      showAddUser: false,
      // 新增管理员表单数据
      ruleForm: {
        status: '0', // 0 正常 1停用 默认正常
        roleIds: [1], // 新增默认必传 管理员
        passwdStatus: 0 // 新增默认必传 0正常 不需要申请重置 1需要申请重置
      },
      // 新增用户表单验证规则
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        nickName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        status: [
          { required: true, message: '请选择用户状态', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // 获取管理员列表
    this.initList()
  },
  methods: {
    // 点击重置密码
    resetPwd (userId) {
      this.$prompt('请输入新密码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: function (value) {
          value = value.trim()
          if (!value.length) return '请输入新密码'
        }
      }).then(({ value }) => {
        resetPwd({ userId: userId, password: value }).then((res) => {
          this.$alert('', '新密码为' + value, {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'success',
                message: '重置成功'
              })
            }
          })
          this.handleQuery()
        }).catch(() => {
          this.msgInfo('已取消操作')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    // 选中表格中的每一项
    handleSelectionChange (value) {
      this.selectedIds = value.map(item => {
        return item.userId
      })
      this.selectedIdsStr = this.selectedIds.join(',')
    },
    // 切换用户状态
    changeUserStatus (user) {
      this.selectedIdsStr = user.userId
      // 将字符串类型转为数字类型 避免严格判断下出问题
      const status = Number(user.status)
      if (!status) {
        // 启用
        this.enableUser()
      } else {
        // 禁用
        this.disableUser()
      }
    },
    // 批量删除
    deletedUsers () {
      this.handleDelete(this.selectedIdsStr)
    },
    // 按关键字搜索
    handleQuery () {
      this.queryParams.pageNum = 1
      this.initList()
    },
    // 批量启用用户
    enableUser () {
      this.$confirm('此操作将启用选中的管理员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          enableUser(this.selectedIdsStr).then((res) => {
            if (res.code === 200) {
              this.msgSuccess('操作成功')
              this.handleQuery()
            }
          })
        })
        .catch(() => {
          if (this.selectedIdsStr.length === 1) {
            this.selectedIdsStr = !this.selectedIdsStr
          }
          this.msgInfo('已取消操作')
        })
    },
    // 批量禁用用户
    disableUser () {
      this.$confirm('此操作将禁用选中的管理员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          disableUser(this.selectedIdsStr).then((res) => {
            if (res.code === 200) {
              this.msgSuccess('操作成功')
              this.handleQuery()
            }
          })
        })
        .catch(() => {
          this.tableData = this.tableData.map(item => {
            console.log(item.status, '000000')
            item.status = Number(item.status)
            console.log(item.status, '11111')
            console.log(this.selectedIdsStr, 'kkkkkkk')
            // if (item.userId === this.selectedIdsStr) {
            //   item.status = !item.status
            // }
            return item
          })
          this.msgInfo('已取消操作')
        })
    },
    // 删除用户
    handleDelete (id) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          deleteUser(id).then((res) => {
            if (res.code === 200) {
              this.msgSuccess('删除成功')
              this.handleQuery()
            }
          })
        })
        .catch(() => {
          this.msgInfo('已取消删除')
        })
    },
    // 获取用户列表
    initList () {
      getUserList(this.queryParams).then((res) => {
        this.tableData = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 提交用户信息
    submitUser (formName) {
      this.$refs[formName].validate((valid) => {
        // 验证通过
        if (valid) {
          addUser(this.ruleForm).then((res) => {
            if (res.code === 200) {
              this.msgSuccess('添加成功')
              this.ruleForm = {
                status: '0',
                roleIds: [1],
                passwdStatus: 0
              }
              this.showAddUser = false
              this.initList()
            } else {
              this.msgError(res.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      // 隐藏新增用户弹框
      // this.showAddUser = false
    }
  }
}
</script>
