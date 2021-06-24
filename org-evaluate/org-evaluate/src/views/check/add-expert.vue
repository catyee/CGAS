<template>
  <div>
    <!-- 添加专家组成员弹框 -->
    <el-dialog
      :visible.sync="checkExpertVisible"
      width="50%"
      :close-on-click-modal="false"
    >
      <!-- <div slot="title">添加基层用户</div> -->
      <!-- <div class="desc color-danger">必填项 *</div> -->
      <div>
        <el-form
          label-width="150px"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
        >
          <el-form-item label="姓名：" prop="name">
            <el-input placeholder="姓名" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别：" prop="sex">
            <el-select v-model="ruleForm.sex" placeholder="请选择性别">
              <el-option label="男" value="0"></el-option>
              <el-option label="女" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号：" prop="phone">
            <el-input
              placeholder="请输入手机号"
              v-model="ruleForm.phone"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="confirmSubmit"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { isPhone } from '@/utils/utils'
export default {
  props: ['userData', 'show'],
  data () {
    var checkPhone = (rule, value, callback) => {
      if (isPhone(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号'))
      }
    }
    return {
      checkExpertVisible: this.show,
      ruleForm: this.userData || {
        name: '',
        sex: '',
        phone: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }
        ],
        sex: [{ required: true, message: '请选择性别', trigger: 'blur' }],
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          { validator: checkPhone, trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    show: function (v) {
      this.checkExpertVisible = v
    }
  },
  methods: {
    confirmSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        // const text = this.ruleForm.userId ? '修改' : '创建'
        // 验证通过
        if (valid) {
          this.submitUser()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitUser () {
      this.$emit('addExpert', this.ruleForm)
      this.close()
    },
    close () {
      this.checkExpertVisible = false
      this.$emit('closeModal')
      this.ruleForm = {
        name: '',
        sex: '',
        phone: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
