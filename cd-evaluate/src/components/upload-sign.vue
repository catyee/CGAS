<template>
  <!-- 上传签名页弹框 -->
  <div class="upload-sign">
    <el-dialog
      :visible.sync="showPanel"
      width="40%"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <div slot="title" class="title">上传并提交签名页照片</div>
      <div class="page">
        <img src="@/assets/upload.svg"  v-if="!signUrl"/>
        <el-image
          v-if="signUrl"
          style="width: 100%; height: 100%"
          :src="signUrl"
          :preview-src-list="[signUrl]"
        >
        </el-image>
      </div>
      <el-upload
        class="upload"
        :on-progress="uploadProcess"
        :before-upload="beforeUpload"
        :show-file-list="false"
        :headers="uploadHeaders"
        :on-success="handleSuccess"
        :on-error="handleError"
        :action="uploadUrl"
      >
        <div class="upload-opers">
          <div><i class="el-icon-upload"></i>上传签名页照片</div>
        </div>
        <el-progress
          v-if="showProgress"
          :percentage="uploadPercent"
          style="margin-top: 7px"
        ></el-progress>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closePanel">取 消</el-button>
        <el-button type="primary" @click.prevent="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.upload-sign {
  .title {
    text-align: center;
    color: #2b3940;
    font-weight: 600;
    font-size: 18px;
  }
  .el-dialog__header {
    padding: 32px 0;
  }
  /deep/.el-dialog__body {
    padding: 32px 32px;
    background-color: #f3f3f3;
  }
  .form {
    display: flex;
  }
  .el-form-item {
    flex: 1;
  }
  .el-form-item__label {
    box-sizing: border-box;
    padding-left: 16px;
    color: #7e888a;
  }
  /deep/.el-dialog__footer {
    text-align: center;
  }
  /deep/.el-button + .el-button {
    margin-left: 10px;
    &:hover {
      margin-left: 10px;
    }
  }
  .page {
    margin: 0 auto;
    width: 276.48px;
    height: 384.72px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .upload {
    padding-top: 24px;
    color: #c23731;
    text-align: center;
  }
}
</style>
<script>
import { getToken } from '@/utils/auth'
export default {
  components: {},
  props: {
    // 控制弹框的出现
    showPanel: Boolean,
    editTagId: Number
  },
  data () {
    return {
      uploadHeaders: { Authorization: 'Bearer ' + getToken() },
      uploadUrl: process.env.VUE_APP_BASE_API + '/common/upload',
      // 签名页照片地址
      signUrl: '',
      // 是否显示进度条
      showProgress: false,
      // 是否允许上传
      enableUpload: true
    }
  },
  // mounted只会执行一次
  mounted () {},
  // 监听父组件的tagId
  watch: {},
  // beforeUpdate 数据更新时会调用 此时vue实例中的数据已经是最新的 但在页面上数据还是旧的 此视可以进一步更改状态 这不会触发附加的渲染过程
  // updated 数据更新并且DOM渲染完成之后 在此时组件DOM已经更新 可以执行依赖于DOM的操作 避免在此更改状态 可能会导致无限循环
  // beforeUpdate () {
  //   // 更改tag1的状态
  //   if (this.editTagId) {
  //     this.relationForm.tag1 = this.editTagId
  //   }
  // },
  methods: {
    beforeUpload (file) {
      // 上传到服务器之前 禁止再次上传
      this.enableUpload = false
      const types = ['image/jpeg', 'image/jpg', 'image/png']

      if (types.indexOf(file.type) === -1) {
        this.msgError('请上传正确的格式')
        // 允许再次上传
        this.enableUpload = true
        return false
      }
      // 视频长度不大于20M
      if (file.size > 209715200) {
        this.msgError('文件过大')
        // 允许再次上传
        this.enableUpload = true
        return false
      }
    },
    // // 进度条
    uploadProcess (event, file, fileList) {
      // 显示进度条
      this.showProgress = true
      // 计算进度
      this.uploadPercent = file.percentage.toFixed(0) * 1
    },
    handleError (e) {
      // 允许再次上传
      this.enableUpload = true
      // 隐藏进度条
      this.showProgress = false
      // 重置上传进度百分比
      this.uploadPercent = 0
      this.msgError(e)
    },
    handleSuccess (res, file) {
      // 允许再次上传
      this.enableUpload = true
      // 隐藏进度条
      this.showProgress = false
      // 重置上传进度百分比
      this.uploadPercent = 0
      if (res.code === 200) {
        this.signUrl = res.url
        this.msgSuccess('上传成功')
      } else {
        this.msgError('上传失败')
      }
    },
    // 关闭弹框
    closePanel () {
      this.$emit('closeModal')
    },
    // 提交签名页照片
    submit () {
      // 发送图片地址到父组件
      this.$emit('getSignUrl', this.signUrl)
      this.closePanel()
    }
  }
}
</script>
