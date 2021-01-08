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
              @click="submitForm('loginForm')"
            >
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import './login.scss'

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
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  created () {}
}
</script>
