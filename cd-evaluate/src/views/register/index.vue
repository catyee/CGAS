<template>
  <div class="register">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">{{ registerId? '编辑登记':'新建登记' }}</span>
      </div>
    </div>
    <div class="ml-16 list-container mr-16">
      <el-form
        label-position="right"
        label-width="auto"
        label-suffix=":"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
      >
        <div class="form-container">
          <!-- <el-form label-position="right" label-width="auto" label-suffix=":"> -->
          <div class="base form-group">
            <div class="title">老人基本情况</div>

            <div class="inline-box">
              <el-form-item label="老人身份证号" prop="idNumber">
                <el-input
                  placeholder="请输入身份证号"
                  v-model="ruleForm.idNumber"
                  :readonly="!!registerId"
                  :disabled="!!registerId"
                ></el-input>
              </el-form-item>
              <el-button type="primary ml-20" @click="getLast" v-show="!registerId">查询</el-button>
            </div>

            <el-form-item label="老人姓名" prop="name">
              <el-input
                placeholder="请输入老人姓名"
                v-model="ruleForm.name"
              ></el-input>
            </el-form-item>
            <el-form-item label="老人年龄" prop="age">
              <el-input
                placeholder="请输入老人年龄"
                v-model="ruleForm.age"
              ></el-input>
            </el-form-item>
            <div class="inline-box">
              <el-form-item label="老人手机号" prop="phone">
                <el-input
                  v-model="ruleForm.phone"
                  placeholder="请输入老人手机号"
                ></el-input>
              </el-form-item>
              <div class="tip ml-20">如老人无手机可不填</div>
            </div>
            <el-form-item label="接收汇款银行卡号" prop="cardNumber">
              <el-input
                v-model="ruleForm.cardNumber"
                placeholder="请输入接收汇款银行卡号"
              ></el-input>
            </el-form-item>
            <!-- </el-form> -->
          </div>
          <div class="home form-group pl-64">
            <div class="title">老人家庭情况</div>
            <!-- <el-form label-position="right" label-width="auto" label-suffix=":"> -->
            <el-form-item label="子女数量" prop="childNumber">
              <el-input
                v-model="ruleForm.childNumber"
                placeholder="请输入子女数量"
              ></el-input>
            </el-form-item>
            <el-form-item label="由谁抚养" prop="dependent">
              <el-input
                v-model="ruleForm.dependent"
                placeholder="请输入抚养人"
              ></el-input>
            </el-form-item>
            <el-form-item label="是否低保" prop="minimumLiving">
              <el-select v-model="ruleForm.minimumLiving" placeholder="请选择">
                <el-option
                  v-for="item in minimumLiving"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <!-- </el-form> -->
          </div>
        </div>
        <div class="form-container-b pt-18">
          <div class="form-group">
            <div class="title">联系人</div>
            <el-form-item label="联系人姓名" prop="contactName">
              <el-input
                v-model="ruleForm.contactName"
                placeholder="请输入联系人姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系人手机号" prop="contactPhone">
              <el-input
                v-model="ruleForm.contactPhone"
                placeholder="请输入联系人手机号"
              ></el-input>
            </el-form-item>
            <el-form-item label="与老人关系" prop="relate">
              <el-input
                v-model="ruleForm.relate"
                placeholder="请输入与老人关系"
              ></el-input>
            </el-form-item>
          </div>
          <div class="form-group pb-18 pr-88">
            <el-button @click="cancelSave">取消</el-button>
            <el-button type="primary" @click="beforeSave"
              >保存</el-button
            >
          </div>
        </div>
      </el-form>
    </div>
    <registerDialog
      :dialogVisible="showDialog"
      :registerData="ruleForm"
      @closeModal="showDialog = false"
      ref="registerDialog"
      @toSave="save"
    />
  </div>
</template>
<script>
import './index.scss'
import { isSfz, isPhone } from '@/utils/utils'
import registerDialog from '@/components/export-register'
import { addRegister, getlastRegister, getRegister, updateRegister } from '@/api/register'
export default {
  components: {
    registerDialog
  },
  data () {
    var checkIdCard = (rule, value, callback) => {
      value = value.trim()
      if (isSfz(value) === 1) {
        callback()
      } else {
        callback(new Error(isSfz(value)))
      }
    }
    var checkPhone = (rule, value, callback) => {
      value = value.trim()
      if (isPhone(value)) {
        callback()
      } else {
        callback(new Error('请输正确的手机号'))
      }
    }
    return {
      registerId: null, // 登记id
      showDialog: false,
      minimumLiving: [
        { value: 0, label: '否' },
        { value: 1, label: '是' }
      ],
      // 表单数据
      ruleForm: {
        registerYear: new Date().getFullYear(),
        idNumber: '', // 身份证号
        name: '', // 老人姓名
        age: '', // 老人年龄
        phone: '', // 老人手机号 非必填
        cardNumber: '', // 接收汇款银行卡号
        contactName: '', // 联系人姓名
        contactPhone: '', // 联系人手机号
        relate: '', // 与老人关系
        childNumber: '', // 子女数量
        dependent: '', // 由谁抚养
        minimumLiving: 0 // 是否低保
      },
      // 表单校验
      rules: {
        // 老人身份证号
        idNumber: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { validator: checkIdCard, trigger: 'blur' }
        ],
        // 老人姓名
        name: [{ required: true, message: '请输入老人姓名', trigger: 'blur' }],
        // 老人年龄
        age: [{ required: true, message: '请输入老人年龄', trigger: 'blur' }],
        // 老人手机号
        // phone: [
        //   { required: true, message: '请输入老人手机号', trigger: 'blur' },
        //   { validator: checkPhone, trigger: 'blur' }
        // ]
        // 汇款银行卡号
        cardNumber: [{ required: true, message: '请输入接收汇款银行卡号', trigger: 'blur' }],
        // 子女数量
        childNumber: [{ required: true, message: '请输入子女数量', trigger: 'blur' }],
        // 抚养人
        dependent: [{ required: true, message: '请输入抚养人', trigger: 'blur' }],
        // 是否低保
        minimumLiving: [{ required: true, message: '请选择是否低保', trigger: 'blur' }],
        // 联系人姓名
        contactName: [{ required: true, message: '请输入联系人姓名', trigger: 'blur' }],
        // 联系人手机号
        contactPhone: [
          { required: true, message: '请输入联系人手机号', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ],
        // 与老人关系
        relate: [{ required: true, message: '请输入与老人关系', trigger: 'blur' }]

      }
    }
  },
  created () {
    this.registerId = this.$route.params.id
    if (this.registerId) {
      this.getRegister()
    }
  },
  methods: {
    // 获取登记详情
    getRegister () {
      getRegister(this.registerId).then(res => {
        this.ruleForm = res.data
      })
    },
    // 确认是否保存
    beforeSave () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.showDialog = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 取消保存
    cancelSave () {
      this.$confirm('您确定取消吗?取消后将丢失输入内容', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$router.push({ path: '/register-list' })
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消'
          // })
        })
    },
    // 点击保存
    save () {
      // 编辑
      if (this.registerId) {
        updateRegister(this.ruleForm).then(res => {
          this.msgSuccess('保存成功')
          // 保存成功够调用子组件的打印
          // 必须保存成功后才能下载
          this.$refs.registerDialog.print()
          // this.showDialog = true
          // this.$router.push({ path: '/register-list' })
        })
      } else {
        // 新增
        addRegister(this.ruleForm).then(res => {
          this.msgSuccess('保存成功')
          // 保存成功够调用子组件的打印
          // 必须保存成功后才能下载
          this.$refs.registerDialog.print()
          // this.showDialog = true
          // this.$router.push({ path: '/register-list' })
        })
      }
    },
    getLast () {
      if (!this.ruleForm.idNumber) {
        this.msgError('请输入身份证号码查询')
        return
      }
      if (isSfz(this.ruleForm.idNumber) !== 1) {
        this.msgError('身份证格式不正确')
        return
      }
      getlastRegister({ idNumber: this.ruleForm.idNumber }).then(res => {
        if (res.data) {
          this.ruleForm = res.data
          this.ruleForm.registerId = null
          this.registerId = null
          this.ruleForm.registerYear = new Date().getFullYear()
        } else {
          this.msgError('此身份证号没有登记记录')
        }
      })
    }
  }
}
</script>
