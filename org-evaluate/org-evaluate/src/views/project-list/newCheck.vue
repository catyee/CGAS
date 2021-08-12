<template>
  <el-dialog :title="title" :visible.sync="newCheckVisible"  :before-close="closeModal" width="450px">
    <div class="mt-30 pb-30">
      <el-form
        label-width="130px"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
      >
        <!-- <el-form-item label="项目编号" prop="projectNumber">
          <el-input
            :disabled="true"
            :readonly="true"
            placeholder="项目编号"
            v-model="ruleForm.projectNumber"
          ></el-input>
        </el-form-item> -->
        <el-form-item label="被检查机构名称" prop="name">
          <el-input
            placeholder="被检查机构名称"
            v-model.trim="ruleForm.name"
          ></el-input>
        </el-form-item>

        <el-form-item label="被检查机构性质" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择被检查机构性质">
            <el-option
              v-for="item in orgType"
              :label="item.name"
              :value="item.type"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责专员" prop="userId">
          <el-select v-model="ruleForm.userId" placeholder="请选择负责专员">
            <el-option
              v-for="item in userList"
              :label="item.nickName"
              :value="item.userId"
              :key="item.userId"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeModal">取 消</el-button>
      <el-button @click="submit" type="primary">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { orgType } from '@/libs/constant'
import { getUserList } from '@/api/user'
import { addProject, updateProject } from '@/api/project-list'
export default {
  props: {
    // 是否显示新建检查弹框
    newCheckVisible: Boolean,
    title: String,
    checkData: Object
  },
  data () {
    return {
      userId: this.$store.getters.userId,
      nickName: this.$store.getters.nickName,
      role: this.$store.getters.roles[0],
      orgType: orgType, // 机构类型
      userList: [], // 负责专员列表
      // 表单校验规则
      rules: {
        // 被评估机构名称
        name: [
          {
            required: true,
            message: '请输入被检查机构名称',
            trigger: 'blur'
          }
        ],
        // 被评估机构性质
        type: [
          {
            required: true,
            message: '请选择被检查机构性质',
            trigger: 'blur'
          }
        ],
        // 项目评估成员
        userId: [
          {
            required: true,
            message: '请选择负责专员',
            trigger: 'blur'
          }
        ]
      },
      // 表单项
      ruleForm: {
        assessStatus: 0, // 默认未开始
        // projectNumber: '', // 项目编号
        name: '', // 评估机构名称
        type: null, // 机构性质
        userId: null, // 负责专员
        userName: ''
      }
    }
  },
  watch: {
    checkData (v) {
      if (Object.keys(v).length) {
        this.ruleForm = Object.assign(this.ruleForm, v)
      }
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    // 获取评估成员列表
    getUserList () {
      // 如果是检查负责人 检察人员列表只能选择自己
      if (this.role === 'common') {
        this.userList = [{
          nickName: this.nickName,
          userId: this.userId
        }]
        return
      }
      const queryParams = {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 999999,
        // 查询参数
        nickName: '',
        // 只显示负责专员的用户
        roleIds: 2
      }
      getUserList(queryParams).then((res) => {
        this.userList = res.rows
      })
    },
    // 新增项目
    addProject () {
      const user = this.userList.filter(item => {
        return item.userId === this.ruleForm.userId
      })[0]
      this.ruleForm.userName = user.nickName
      if (this.ruleForm.projectId) {
        updateProject(this.ruleForm).then(res => {
          this.msgSuccess('修改成功')
          this.$emit('submit')
          this.closeModal()
        })
        return
      }
      addProject(this.ruleForm).then(res => {
        this.$emit('submit')
        this.closeModal()
      })
    },
    // 提交项目
    submit () {
      this.$refs.ruleForm.validate((valid) => {
        // 验证通过
        if (valid) {
          this.$confirm('您确定要提交吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
            .then(() => {
              this.addProject()
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
    // 关闭弹框
    closeModal () {
      this.$emit('close')
      // 关闭弹框之后 清空组件内数据
      this.ruleForm = {
        assessStatus: 0, // 默认未开始
        // projectNumber: '', // 项目编号
        name: '', // 评估机构名称
        type: null, // 机构性质
        userId: null, // 负责专员
        userName: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .el-form-item__label{
  font-size: 12PX;
}
/deep/ .el-form-item{
  padding: 10PX;
}
/deep/.el-input__inner{
  min-width: 250px;
}
</style>
