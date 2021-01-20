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
              @click.native.prevent="submitForm('loginForm')"
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
import { requestReset } from '@/api/user'
// import Cookies from 'js-cookie'
export default {
  name: 'login',
  components: {},
  data () {
    // 检验用户名
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
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
      resetUserName: '', // 需要重置的用户名
      loading: false, // 是否登录中
      // 显示log
      dialogVisible: false,
      // login表单数据
      ruleForm: {
        username: 'admin',
        password: 'admin123'
      },
      // login表单验证规则
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }]
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
        this.resetUserName = value
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
          requestReset({ userName: this.resetUserName }).then(() => {
            this.msgSuccess('操作成功')
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
        .then(res => {
          // 登录的同时 获取菜单信息
          // this.$store.dispatch('getMenuByUser').then(res => {
          this.loading = false
          this.$router.push({ path: '/main' })
        //  })
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          this.loading = false
        })
    }
  }

}
</script>
