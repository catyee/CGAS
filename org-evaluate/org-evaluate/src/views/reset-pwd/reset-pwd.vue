<template>
  <div class="reset-pwd">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">修改密码</span>
      </div>
    </div>
    <div class="content ml-16">
      <div class="flex">
        <div class="title">姓名：</div>
        <div class="value">{{nickName}}</div>
      </div>
      <div class="flex">
        <div class="title">用户名：</div>
        <div class="value">{{userName}}</div>
      </div>
      <el-button type="primary" class="mt-27" @click="dialogVisible= true">修改密码</el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <div slot="title" class="dialog-header">修改密码</div>
      <div class="pb-20 color-danger">密码长度不能小于8位，且必须包含大写字母，小写字母，数字及特殊符号</div>
      <div class="dialog-content">
        <el-form
          label-position="right"
          label-width="80px"
          class="form-group"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
        >
          <el-form-item label="旧密码" prop="oldPass">
            <el-input type="password" v-model="ruleForm.oldPass"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass"></el-input>
          </el-form-item>
          <el-form-item class="opers">
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button type="primary" @click="dialogVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import './reset-pwd.scss'
import { removeToken } from '@/utils/auth'
import { updatePassword } from '@/api/user.js'
import { checkPwdSimple } from '@/utils/utils'
export default {
  data () {
    var checkOldPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('原密码不能为空'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      const res = checkPwdSimple(value)
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (res !== true) {
        callback(new Error(res))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 是否显示修改弹框
      dialogVisible: false,
      ruleForm: {
        pass: '',
        checkPass: '',
        oldPass: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        oldPass: [{ validator: checkOldPass, trigger: 'blur' }]
      }
    }
  },
  computed: {
    userName () {
      return this.$store.getters.name
    },
    nickName () {
      return this.$store.getters.nickName
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updatePassword({
            newPassword: this.ruleForm.pass.trim(),
            oldPassword: this.ruleForm.oldPass.trim()
          }).then((res) => {
            if (res.code === 200) {
              this.msgSuccess('操作成功')
              this.$confirm('您已修改密码，是否重新登录?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              })
                .then(() => {
                  removeToken()
                  this.$router.push({ path: '/login' })
                })
                .catch(() => {})
            }
          })
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
