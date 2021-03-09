<template>
  <div class="register">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">{{ pageTitle }}</span>
      </div>
    </div>
    <div class="ml-16 list-container mr-16">
      <div class="form-container">
        <div class="base form-group">
          <div class="title">老人基本情况</div>
          <el-form label-position="right" label-width="auto" label-suffix=":">
            <el-form-item label="老人身份证号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="老人姓名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="老人年龄">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="老人手机号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="接收汇款银行卡号">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="home form-group pl-64">
          <div class="title">老人家庭情况</div>
          <el-form label-position="right" label-width="auto" label-suffix=":">
            <el-form-item label="老人身份证号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="老人姓名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="老人年龄">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="form-container-b pt-18">
        <div class="form-group">
          <div class="title">联系人</div>
          <el-form label-position="right" label-width="auto" label-suffix=":">
            <el-form-item label="老人身份证号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="老人姓名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="老人年龄">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="form-group pb-18 pr-88">
          <el-button >取消</el-button>
          <el-button type="primary">保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {
  data () {
    return {
      pageTitle: '编辑登记'
    }
  }
}
</script>
