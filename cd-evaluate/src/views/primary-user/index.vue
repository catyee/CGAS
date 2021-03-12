<template>
  <div class="primary-user">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">基层用户列表</span>
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
          <el-button
            type="success"
            class=""
            :disabled="!selectedIds.length"
            @click.prevent="enableUser"
            >批量启用</el-button
          >
          <el-button
            type="warning"
            :disabled="!selectedIds.length"
            @click.prevent="disableUser"
            >批量禁用</el-button
          >
          <el-button
            type="primary"
            :disabled="!selectedIds.length"
            @click.prevent="deletedUsers"
            >批量删除</el-button
          >
        </div>
        <div class="oper-right pr-16">
          <el-button type="primary" @click="showAddUser = true"
            >添加新用户</el-button
          >
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
        <el-table-column prop="nickName" label="乡、镇、街道名称">
        </el-table-column>
        <el-table-column
          prop="contactName"
          label="相关联络人姓名"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="contactPhone"
          label="相关联络人手机号"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="userName"
          label="登录手机号"
          show-overflow-tooltip
        >
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
            <span class="color-green pr-10 pointer" @click="edit(scope.row)"
              >修改</span
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
    <pagination
      :total="total"
      :queryParams="queryParams"
      @initList="initList"
    ></pagination>
    <!-- 新增管理员 -->
    <div class="add-panel">
      <el-dialog
        :visible.sync="showAddUser"
        width="50%"
        :close-on-click-modal="false"
      >
        <div slot="title">添加基层用户</div>
        <div class="desc color-danger">必填项 *</div>
        <div class="mt-30 pb-30">
          <el-form
            label-width="150px"
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
          >
            <el-form-item label="乡、镇、街道名称：" prop="nickName">
              <el-input
                placeholder="请输入乡、镇、街道名称"
                v-model="ruleForm.nickName"
              ></el-input>
            </el-form-item>
            <el-form-item label="相关联络人姓名：" prop="contactName">
              <el-input
                placeholder="请输入相关联络人姓名"
                v-model="ruleForm.contactName"
              ></el-input>
            </el-form-item>
            <el-form-item label="相关联络人手机号：" prop="contactPhone">
              <el-input
                placeholder="请输入相关联络人手机号"
                v-model="ruleForm.contactPhone"
              ></el-input>
            </el-form-item>
            <el-form-item label="登录手机号:" prop="userName">
              <el-input
                placeholder="请输入登录手机号"
                v-model="ruleForm.userName"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="登录密码："
              prop="password"
              v-show="!ruleForm.userId"
            >
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
          <el-button type="primary" @click.prevent="confirmSubmit"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import './index.scss'
import { isPhone } from '@/utils/utils'
import {
  addUser,
  getUserList,
  deleteUser,
  enableUser,
  disableUser,
  resetPwd,
  updateUser
} from '@/api/user'
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
        // 只显示管理员角色的用户
        roleIds: 2
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
        roleIds: [2], // 新增默认必传 基层用户
        passwdStatus: 0 // 新增默认必传 0正常 不需要申请重置 1需要申请重置
      }

    }
  },
  mounted () {
    // 获取管理员列表
    this.initList()
  },
  computed: {
    rules: function () {
      var checkPhone = (rule, value, callback) => {
        if (isPhone(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的手机号'))
        }
      }
      // 新增用户表单验证规则
      const rules = {
        nickName: [
          {
            required: true,
            message: '请输入乡、镇、街道名称',
            trigger: 'blur'
          }
        ],
        contactName: [
          { required: true, message: '请输入相关联络人姓名', trigger: 'blur' }
        ],
        contactPhone: [
          {
            required: true,
            message: '请输入相关联络人手机号',
            trigger: 'blur'
          },
          { validator: checkPhone, trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '请输入登录手机号', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        status: [
          { required: true, message: '请选择用户状态', trigger: 'blur' }
        ]
      }
      if (this.ruleForm.userId) {
        rules.password = []
      } else {
        rules.password = [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
      return rules
    }
  },
  // watch: {
  //   ruleForm: {
  //     deep: true,
  //     handler: function (value) {
  //       if (value.userId) {
  //         this.rules.password = []
  //       } else {
  //         this.rules.password = [{ required: true, message: '请输入密码', trigger: 'blur' }]
  //       }
  //     }
  //   }
  // },
  methods: {
    // 修改用户信息
    edit (user) {
      this.ruleForm = user
      // 因为列表查询后端没有返回roleIds所以此处需要单独处理
      this.ruleForm.roleIds = [2]
      this.showAddUser = true
    },
    // 点击重置密码
    resetPwd (userId) {
      this.$prompt('请输入新密码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: function (value) {
          value = value.trim()
          if (!value.length) return '请输入新密码'
        }
      })
        .then(({ value }) => {
          resetPwd({ userId: userId, password: value })
            .then((res) => {
              this.$alert('', '新密码为' + value, {
                confirmButtonText: '确定',
                callback: (action) => {
                  this.$message({
                    type: 'success',
                    message: '重置成功'
                  })
                }
              })
              this.handleQuery()
            })
            .catch(() => {
              this.msgInfo('已取消操作')
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    },
    // 选中表格中的每一项
    handleSelectionChange (value) {
      this.selectedIds = value.map((item) => {
        return item.userId
      })
      this.selectedIdsStr = this.selectedIds.join(',')
    },
    // 切换用户状态
    changeUserStatus (row) {
      // if (user.status === '0') {
      //   // 启用
      //   this.enableUser()
      // } else {
      //   // 禁用
      //   this.disableUser()
      // }
      const text = row.status === '0' ? '启用' : '停用'
      this.$confirm(
        '确认要"' + text + '""' + row.userName + '"用户吗?',
        '警告',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(function () {
          if (row.status === '0') {
            return enableUser(row.userId)
          } else {
            return disableUser(row.userId)
          }
        })
        .then(() => {
          this.msgSuccess(text + '成功')
        })
        .catch(function () {
          row.status = row.status === '0' ? '1' : '0'
        })
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
    confirmSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        const text = this.ruleForm.userId ? '修改' : '创建'
        // 验证通过
        if (valid) {
          this.$confirm(`您确定要${text}该基层用户信息吗?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
            .then(() => {
              console.log(222, this)
              this.submitUser()
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '已取消'
              })
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitUser () {
      if (this.ruleForm.userId) {
      // 编辑用户
        updateUser(this.ruleForm).then((res) => {
          if (res.code === 200) {
            this.msgSuccess('修改成功')
            this.ruleForm = {
              status: '0',
              roleIds: [2],
              passwdStatus: 0
            }
            this.showAddUser = false
            this.initList()
          } else {
            this.msgError(res.msg)
          }
        })
      } else {
      // 新建用户
        addUser(this.ruleForm).then((res) => {
          if (res.code === 200) {
            this.msgSuccess('添加成功')
            this.ruleForm = {
              status: '0',
              roleIds: [2],
              passwdStatus: 0
            }
            this.showAddUser = false
            this.initList()
          } else {
            this.msgError(res.msg)
          }
        })
      }
    }
  }
  // 提交用户信息

}
</script>
