<template>
  <div class="add-video">
    <div class="page-title">
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
        <el-form-item label="上传封面" prop="imagAddr">
          <el-col>
            <el-form-item prop="date1">
              <upload
                :uploadHeaders="upload.headers"
                :uploadUrl="upload.imageUrl"
                :type="'img'"
                @getUrl="getImgUrl"
              >
                <el-image
                  v-show="videoForm.imagAddr"
                  :src="videoForm.imagAddr"
                  :preview-src-list="[videoForm.imagAddr]"
                >
                  <div slot="placeholder" class="image-slot">
                    图片加载中<span class="dot">...</span>
                  </div>
                </el-image>
              </upload>
            </el-form-item>
          </el-col>
        </el-form-item>
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
          <el-form-item label-width="0" prop="takeCareType" class="ml-20">
            <el-select
              v-model="videoForm.takeCareType"
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
            <div class="tag-choose">
              <el-select
                v-model="currentSelectTag"
                class="pr-20"
                filterable
                placeholder="请选择"
                @change="addTagToList"
              >
                <el-option
                  v-for="tag in tagList"
                  :key="tag.tagId"
                  :label="tag.tagName"
                  :value="tag.tagId"
                >
                </el-option>
              </el-select>
              <newTag @addedTag="getTagList"></newTag>
            </div>
            <div class="tag-list pt-10 pb-10">
              <el-tag
                class="mr-10"
                v-for="tag in selectedTags"
                :key="tag.tagId"
                closable
                @close="removeTag(tag.tagId)"
              >
                {{ tag.tagName }}
              </el-tag>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="上传视频" prop="videoAddr">
          <upload
            :uploadHeaders="upload.headers"
            :uploadUrl="upload.videoUrl"
            :type="'video'"
            @getUrl="getVideoUrl"
          >
            <video
              v-if="videoForm.videoAddr"
              v-bind:src="videoForm.videoAddr"
              style="width: 100%"
              height="200px"
              class="avatar video-avatar mt-20"
              controls="controls"
            >
              您的浏览器不支持视频播放
            </video>
          </upload>
        </el-form-item>
        <el-form-item>
          <div class="btn-groups">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >保存</el-button
            >
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import './add-video.scss'
import { olderTypes, careTypes } from '@/libs/constant.js'
import { getToken } from '@/utils/auth'
import upload from '@/components/upload'
import newTag from '@/components/add-tag.vue'
import { getTagList } from '@/api/relation'
import { addVideo } from '@/api/video'
export default {
  components: {
    upload,
    newTag
  },
  data () {
    return {
      // 当前下拉选中的标签
      currentSelectTag: null,
      // 老人类型列表
      olderTypes: olderTypes,
      // 照料类型列表
      careTypes: careTypes,
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
        videoAddr: '',
        // 视频状态默认都是正常0
        status: 0
      },
      // 表单校验
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
        imagAddr: [{ required: true, message: '请上传封面', trigger: 'blur' }],
        videoAddr: [{ required: true, message: '请上传视频', trigger: 'blur' }],
        desc: [{ required: true, message: '请填写视频简介', trigger: 'blur' }]
      },
      // 上传文件地址
      upload: {
        headers: { Authorization: 'Bearer ' + getToken() },
        // 上传的地址
        videoUrl: process.env.VUE_APP_BASE_API + '/common/video/upload',
        imageUrl: process.env.VUE_APP_BASE_API + '/common/upload'
      },
      // 标签列表
      tagList: [],
      // 查询标签列表参数
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小 一页显示 不分页
        pageSize: 9999999
      },
      // 选中的标签
      selectedTags: []
    }
  },
  // mounted只会执行一次
  mounted () {
    this.getTagList()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const tags = this.selectedTags.map((item) => {
            return item.tagId
          })
          if (tags.length < 3) {
            this.msgError('请至少选择三个标签')
            return
          }
          this.videoForm.tags = tags.join(',')
          addVideo(this.videoForm).then((res) => {
            if (res.code === 200) {
              this.msgSuccess('添加成功')
            } else {
              this.msgError('添加失败' + res.code)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 获取图片地址
    getImgUrl (url) {
      this.videoForm.imagAddr = url
    },
    // 获取视频地址
    getVideoUrl (url) {
      this.videoForm.videoAddr = url
    },
    // 获取标签列表
    getTagList () {
      getTagList(this.queryParams).then((res) => {
        this.tagList = res.rows
      })
    },
    // 选中一个标签 加入到选中的标签列表
    addTagToList (id) {
      console.log(id, 'idid')
      const tag = this.tagList.filter((item) => {
        return item.tagId === id
      })[0]
      const hasTag = this.selectedTags.find((item) => {
        return item.tagId === id
      })
      if (hasTag) return
      this.selectedTags.push(tag)
    },
    // 删除一个tag
    removeTag (id) {
      this.selectedTags = this.selectedTags.filter((item) => {
        return item.tagId !== id
      })
      this.currentSelectTag = ''
    }
  }
}
</script>
