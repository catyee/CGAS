<template>
  <div class="login">
    <div class="login-header pl-26">
      <i class="login-logo pr-9"></i>
      <span class="title">养老机构质控检查</span>
    </div>
    <div class="input-panel">
      <div class="input-title bold f24 pb-39">密码登录</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="80px"
      >
        <el-form-item prop="username" label-width="0">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label-width="0">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label-width="0" class="pt-22">
          <el-button
            type="primary"
            class="submit"
            :loading="false"
            @click.native.prevent="submitForm('loginForm')"
          >
            <span v-if="!loading" class="f14">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
          <div class="forget-pwd color-danger pt-10 f14" @click="resetPwd">
            忘记密码？
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import './login.scss'
import { requestReset } from '@/api/user'
// import Cookies from 'js-cookie'
export default {
  name: 'login',
  components: {},
  data () {
    // 检验用户名
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入登录手机号'))
      } else {
        callback()
      }
    }
    // 检验密码
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      redirect: undefined,
      resetUserName: '', // 需要重置的用户名
      loading: false, // 是否登录中
      // 显示log
      dialogVisible: false,
      // login表单数据
      ruleForm: {
        username: 'admin',
        password: '12345'
      },
      // login表单验证规则
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created () {},
  methods: {
    // 点击忘记密码 弹框
    resetPwd () {
      this.$prompt('请输入登录手机号', '申请重置密码', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: function (value) {
          if (!value) return '请输入登录手机号'
          value = value.trim()
          if (!value.length) return '请输入登录手机号'
        }
      })
        .then(({ value }) => {
          // console.log(this.submitRest)
          this.resetUserName = value
          this.submitReset()
          // this.$message({
          //   type: 'success',
          //   message: '你的邮箱是: ' + value
          // })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    },
    // 输入用户名 重置密码
    submitReset () {
      this.$confirm('您确定要重置密码吗？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(() => {
          requestReset({ userName: this.resetUserName }).then(() => {
            this.$confirm('请寻求管理员协助，在检查账号界面重置密码', '重置密码申请已提交', {
              distinguishCancelAndClose: true,
              confirmButtonText: '确定',
              customClass: 'title-tip',
              center: true
            })
              .then(() => {
              })
          })
        })
        .catch((action) => {
          this.$message({
            type: 'info',
            message: '取消操作'
          })
        })
    },
    // 点击登录
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 提示登录中...
          this.loading = true
          // 登录
          this.login()
        } else {
          //  console.log('error submit!!')
          return false
        }
      })
    },
    // 登录

    login () {
      this.$store
        .dispatch('Login', this.ruleForm)
        .then((res) => {
          this.loading = false
          this.$router.push({ path: this.redirect || '/' }).catch(() => {})
        })
        // eslint-disable-next-line handle-callback-err
        .catch((error) => {
          this.loading = false
        })
    }
  }
}
</script>
