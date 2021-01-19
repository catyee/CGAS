<template>
  <div class="login">
    <div class="login-header pl-26">
      <i class="login-logo pr-9"></i>
      <span class="title">养老照料公众号后台管理</span>
    </div>
    <div class="login-content">
      <div class="content-bg">
        <!-- <img src="../..//assets/login-bg.png" alt="" /> -->
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
              @click.native.prevent="submitForm"
            >
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
              <div class="forget-pwd color-danger pt-10" @click="resetPwd">忘记密码？</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import './login.scss'
// import Cookies from 'js-cookie'
export default {
  name: 'login',
  components: {},
  data () {
    return {
      loading: false, // 是否登录中
      // 显示log
      dialogVisible: false,
      // login表单数据
      ruleForm: {
        username: 'admin',
        password: '123456789'
      },
      // login表单验证规则
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '用户名不能为空' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' }
        ]
      }
    }
  },
  created () {},
  methods: {
    // 点击忘记密码 弹框
    resetPwd () {
      this.$prompt('请输入用户名', '申请重置密码', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[^\s*$]/,
        inputErrorMessage: '请输入用户名'
      }).then(({ value }) => {
        // console.log(this.submitRest)
        this.submitReset()
        // this.$message({
        //   type: 'success',
        //   message: '你的邮箱是: ' + value
        // })
      }).catch(() => {
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
          this.$message({
            type: 'info',
            message: '保存修改'
          })
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message: '取消操作'
          })
        })
    },
    // 点击登录
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // if (this.loginForm.rememberMe) {
          //   Cookies.set('username', this.loginForm.username, { expires: 30 })
          //   Cookies.set('password', encrypt(this.loginForm.password), { expires: 30 })
          //   Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 })
          // } else {
          //   Cookies.remove('username')
          //   Cookies.remove('password')
          //   Cookies.remove('rememberMe')
          // }
          this.$store.dispatch('Login', this.ruleForm).then(() => {
            this.$router.push({ path: this.redirect || '/' }).catch(() => {})
          }).catch(() => {
            this.loading = false
          })
        }
      })
    }
  }

}
</script>
