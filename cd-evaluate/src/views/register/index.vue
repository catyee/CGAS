<template>
  <div class="register">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">{{ pageTitle }}</span>
      </div>
    </div>
    <div class="ml-16 list-container mr-16">
      <el-form label-position="right" label-width="auto" label-suffix=":"  :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="form-container">
          <!-- <el-form label-position="right" label-width="auto" label-suffix=":"> -->
          <div class="base form-group">
            <div class="title">老人基本情况</div>

            <div class="inline-box">
              <el-form-item label="老人身份证号" prop="idCard">
                <el-input placeholder="请输入身份证号" v-model="ruleForm.idCard"></el-input>
              </el-form-item>
              <el-button type="primary ml-20">查询</el-button>
            </div>

            <el-form-item label="老人姓名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="老人年龄">
              <el-input></el-input>
            </el-form-item>
            <div class="inline-box">
              <el-form-item label="老人手机号">
                <el-input></el-input>
              </el-form-item>
              <div class="tip ml-20">如老人无手机可不填</div>
            </div>
            <el-form-item label="接收汇款银行卡号">
              <el-input></el-input>
            </el-form-item>
            <!-- </el-form> -->
          </div>
          <div class="home form-group pl-64">
            <div class="title">老人家庭情况</div>
            <!-- <el-form label-position="right" label-width="auto" label-suffix=":"> -->
            <el-form-item label="子女数量">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="由谁抚养">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="是否低保">
              <el-input></el-input>
            </el-form-item>
            <!-- </el-form> -->
          </div>
        </div>
        <div class="form-container-b pt-18">
          <div class="form-group">
            <div class="title">联系人</div>
            <el-form label-position="right" label-width="auto" label-suffix=":">
              <el-form-item label="联系人姓名">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="联系人手机号">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="与老人关系">
                <el-input></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="form-group pb-18 pr-88">
            <el-button>取消</el-button>
            <el-button type="primary" @click="showDialog = true">保存</el-button>
          </div>
        </div>
      </el-form>
    </div>
    <registerDialog :dialogVisible="showDialog" @closeModal="showDialog= false"/>
  </div>
</template>
<script>
import './index.scss'
import { isSfz } from '@/utils/utils'
import registerDialog from '@/components/export-register'
export default {
  components: {
    registerDialog
  },
  data () {
    var checkIdCard = (rule, value, callback) => {
      if (isSfz(value) === 1) {
        callback()
      } else {
        callback(new Error(isSfz(value)))
      }
    }
    return {
      showDialog: true,
      pageTitle: '编辑登记',
      // 表单数据
      ruleForm: {
        idCard: '', // 身份证号
        name: '', // 老人姓名
        age: '', // 老人年龄
        phone: '', // 老人手机号 非必填
        account: '', // 接收汇款银行卡号
        lxr: '', // 联系人姓名
        lxrPhone: '', // 联系人手机号
        relation: '', // 与老人关系
        childCount: '', // 子女数量
        care: '', // 由谁抚养
        isPoor: false // 是否低保
      },
      // 表单校验
      rules: {
        idCard: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { validator: checkIdCard, trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
