<template>
  <div class="add-video">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">上传视频</span>
      </div>
    </div>
    <div class="content">
      <el-form
        :model="videoForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="视频标题" prop="videoName">
          <el-input v-model="videoForm.videoName"></el-input>
        </el-form-item>
        <el-form-item label="视频简介" prop="desc">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请输入内容"
            v-model="videoForm.desc"
          >
          </el-input>
        </el-form-item>
        <!-- <el-form-item label="上传封面" required>
          <el-col>
            <el-form-item prop="date1">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  （建议尺寸：宽720px 高360px 支持扩展名：png、jpg
                  大小限制：不超过3M）
                </div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-form-item> -->
        <div class="inline-form">
          <el-form-item label="视频分类" prop="oldManType">
            <el-select
              v-model="videoForm.oldManType"
              placeholder="请选择老人类型"
            >
              <el-option
                v-for="item in olderTypes"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label-width="0" prop="takeCareType">
            <el-select
              v-model="videoForm.takeCareType"
              class="ml-20"
              placeholder="请选择照料类型"
            >
              <el-option
                v-for="item in careTypes"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-form-item label="视频标签" prop="tags">
          <div class="tag-selector">
            <el-select
              v-model="videoForm.tags"
              filterable
              multiple
              placeholder="请选择"
            >
              <el-option
                v-for="item in tagOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-button class="ml-20" type="primary">添加新标签</el-button>
            <div class="tag-list pt-10 pb-10">
              <el-tag>标签一</el-tag>
            </div>
          </div>
        </el-form-item>
        <!-- <el-form-item label="上传视频" prop="resource">
          <el-upload
            drag
            class="upload-video"
            :on-progress="uploadVideoProcess"
            :before-upload="beforeUploadVideo"
            :show-file-list="false"
            :headers="upload.headers"
            :on-success="handleVideoSuccess"
            :action="upload.url"
          >
            <video
              v-if="videoForm.showVideoPath != '' && !videoFlag"
              v-bind:src="videoForm.showVideoPath"
              class="avatar video-avatar"
              controls="controls"
            >
              您的浏览器不支持视频播放
            </video>
            <el-progress
              v-if="videoFlag == true"
              type="circle"
              v-bind:percentage="videoUploadPercent"
              style="margin-top: 7px"
            ></el-progress>
              <i v-else-if="videoForm.showVideoPath =='' && !videoFlag"
                       class="el-icon-plus avatar-uploader-icon">点击上传</i>
            <div slot="tip" class="el-upload__tip">
              最多可以上传1个视频，建议时长不大于10分钟，推荐格式mp4
            </div>
          </el-upload>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import './add-video.scss'
import { olderTypes, careTypes } from '@/libs/constant.js'
import { getToken } from '@/utils/auth'
export default {
  data () {
    return {
      // 老人类型列表
      olderTypes: [],
      // 照料类型列表
      careTypes: [],
      tagOptions: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 }
      ],
      videoForm: {
        // 视频标题
        videoName: '',
        // 老人类型
        oldManType: '',
        // 照料类型
        takeCareType: '',
        // 视频简介
        desc: '',
        // 封面地址
        imagAddr: '',
        // 所属标签 至少选择三个
        tags: '',
        // 视频地址
        videoAddr: ''
      },
      rules: {
        // 视频标题校验
        videoName: [
          { required: true, message: '请输入视频标题', trigger: 'blur' }
        ],
        // 老人类型校验
        oldManType: [
          { required: true, message: '请选择老人类型', trigger: 'change' }
        ],
        // 照料类型校验
        takeCareType: [
          { required: true, message: '请选择照料类型', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          // {
          //   type: 'array',
          //   required: true,
          //   message: '请至少选择一个活动性质',
          //   trigger: 'change'
          // }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写视频简介', trigger: 'blur' }]
      },
      /// ////////////////////
      // 是否显示进度条
      videoFlag: false,
      // 进度条的进度，
      videoUploadPercent: '',
      isShowUploadVideo: false,
      // 显示上传按钮
      // videoForm: {
      //   showVideoPath: ''
      // },
      // 上传文件地址
      upload: {
        headers: { Authorization: 'Bearer ' + getToken() },
        // 上传的地址
        url: process.env.VUE_APP_BASE_API + '/common/video/upload',
        loading: false
      }
    }
  },
  created () {
    this.olderTypes = olderTypes
    this.careTypes = careTypes
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    beforeUploadVideo (file) {
      var fileSize = file.size / 1024 / 1024 < 50
      if (
        [
          'video/mp4',
          'video/ogg',
          'video/flv',
          'video/avi',
          'video/wmv',
          'video/rmvb',
          'video/mov'
        ].indexOf(file.type) === -1
      ) {
        this.msgSuccess('请上传正确的视频格式')
        return false
      }
      if (!fileSize) {
        this.msgError('视频大小不能超过50MB')
        return false
      }
      this.isShowUploadVideo = false
    },
    // 进度条
    uploadVideoProcess (event, file, fileList) {
      this.videoFlag = true
      this.videoUploadPercent = file.percentage.toFixed(0) * 1
    },
    handleVideoSuccess (res, file) {
      this.isShowUploadVideo = true
      this.videoFlag = false
      this.videoUploadPercent = 0

      // 前台上传地址
      // if (file.status == 'success' ) {
      //    this.videoForm.showVideoPath = file.url;
      // } else {
      //     layer.msg("上传失败，请重新上传");
      // }

      // 后台上传地址
      // if (res.Code === 200) {
      //   this.videoForm.showVideoPath = res.Data
      // } else {
      //   layer.msg(res.Message)
      // }
    }
  }
}
</script>
