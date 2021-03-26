<template>
  <div class="upload-container">
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
        <el-button size="small" type="primary" :disabled="!enableUpload">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
           {{type === 'video' ? '（建议时长：0.5-15分钟 建议格式.mp4）': ''}}
        </div>
      </div>

      <el-progress
        v-if="showProgress"
        :percentage="uploadPercent"
        style="margin-top: 7px"
      ></el-progress>
    </el-upload>
    <slot></slot>
    <!-- <video
      v-if="videoForm.showVideoPath != '' && !videoFlag"
      v-bind:src="videoForm.showVideoPath"
      class="avatar video-avatar"
      controls="controls"
    >
      您的浏览器不支持视频播放
    </video> -->
  </div>
</template>
<script>
// 目前仅支持特定格式的图片和视频
export default {
  props: ['uploadUrl', 'uploadHeaders', 'type'],
  data () {
    return {
      // 是否显示进度条
      showProgress: false,
      // 视频进度条的进度，
      uploadPercent: '',
      // 是否允许上传
      enableUpload: true
    }
  },
  methods: {
    beforeUpload (file) {
      // 上传到服务器之前 禁止再次上传
      this.enableUpload = false
      let types
      if (this.type === 'video') {
        types = [
          'video/mp4',
          'video/ogg',
          'video/flv',
          'video/avi',
          'video/wmv',
          'video/rmvb',
          'video/mov'
        ]
      } else {
        types = ['image/jpeg', 'image/jpg', 'image/png']
      }
      if (
        types.indexOf(file.type) === -1
      ) {
        this.msgError('请上传正确的格式')
        // 允许再次上传
        this.enableUpload = true
        return false
      }
      // 视频长度不大于20M
      if (
        file.size > 209715200
      ) {
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
        if (this.type === 'video') {
          this.$emit('getUrl', res.url, res.videoDuration)
        } else {
          this.$emit('getUrl', res.url, res.videoDuration)
        }
        this.msgSuccess('上传成功')
      } else {
        this.msgError('上传失败')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .upload{
        .upload-opers{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
        .el-upload__tip{
          color: #2B3940;
          font-size: 12px;
          font-weight: 600;

        }
    }
</style>
