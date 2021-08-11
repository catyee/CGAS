<template>
  <div class="video-list">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">视频列表</span>
      </div>
      <div class="flex pr-16">
        <span class="color-grey pr-5 f14">视频类型:</span>
        <el-select v-model="queryParams.status" placeholder="请选择" clearable  @clear="handleQuery" @change="handleQuery">
          <el-option
            v-for="item in videoTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">关键字:</div>
        <el-input v-model="queryParams.videoName" placeholder="请输入内容" @change="handleQuery"></el-input>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pl-12 pr-5 f14">选择日期:</div>
        <el-date-picker
          v-model="date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
          @change="queryDate"
        >
        </el-date-picker>
      </div>
      <div class="flex pr-16">
        <span class="color-grey pr-5 f14">选择老人类型:</span>
        <el-select v-model="queryParams.oldManType" clearable  placeholder="请选择" @change="handleQuery"  @clear="handleQuery">
          <el-option
            v-for="item in olderTypes"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>
      <div class="flex pr-10">
        <span class="color-grey pr-5 f14">选择照料类型:</span>
        <el-select v-model="queryParams.takeCareType" clearable  placeholder="请选择" @change="handleQuery"  @clear="handleQuery">
          <el-option
            v-for="item in careTypes"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>
      <div class="flex">
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-15">
        <el-button type="primary"  :disabled="!selectedIds.length" @click.prevent="deletedVideos" >删除选中视频</el-button>
        <router-link to="/video/add-video">
          <el-button type="primary">上传新视频</el-button>
        </router-link>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="视频" prop="pic">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.imagAddr"
              fit="fill"
               :preview-src-list="[scope.row.imagAddr]"
            >
                 <div slot="placeholder" class="image-slot">
                    图片加载中<span class="dot">...</span>
                  </div>
            </el-image> </template
          >>
        </el-table-column>
        <el-table-column prop="videoDuration" label="视频长度">
          <template slot-scope="scope">
            {{scope.row.videoDuration | formatTime}}
          </template>
        </el-table-column>
        <el-table-column prop="videoName" label="视频标题" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="oldManType"
          label="老人类型"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="takeCareType" label="照料类型" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="tags" label="标签" show-overflow-tooltip>
             <template slot-scope="scope">
               <span v-for="(tag,index) in scope.row.tagList" :key="tag.tagId" >{{index !==scope.row.tagList.length-1? tag.tagName + ',':tag.tagName}}</span>
             </template>
        </el-table-column>
        <el-table-column prop="createTime" label="日期" show-overflow-tooltip>
           <template slot-scope="scope">
            <div>{{scope.row.createTime|formatDate('YYYY-mm-dd')}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
           <template slot-scope="scope">
             <span>{{scope.row.status === 0 ? '正常': '已下架'}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="oper-btns">
              <span class="color-green pointer" @click="viewVideo(scope.row.videoId)">查看</span>
              <span class="color-red pointer" @click="delteVideo(scope.row.videoId)">删除</span>
              <span class="color-green pointer" @click="editVideo(scope.row.videoId)">修改</span>
              <span class="color-green pointer" :class="[{'color-green':scope.row.status === 1},{'color-red':scope.row.status === 0}]" @click="updateVideoStatus(scope.row)">
                {{scope.row.status === 0? '下架' : '上架'}}
              </span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
     <pagination :total="total" :queryParams="queryParams"  @initList="initList"></pagination>
  </div>
</template>
<script>
import './video-list.scss'
import { olderTypes, careTypes } from '@/libs/constant.js'
import { getVideoList, removeVideo, updateVideo } from '@/api/video.js'
import pagination from '@/components/pagination.vue'
export default {
  components: {
    pagination
  },
  data () {
    return {
      selectedIds: [], // 选中项的id
      selectedIdsStr: '', // 选中项id的拼接字符串
      // 老人类型
      olderTypes: olderTypes,
      // 照料类型
      careTypes: careTypes,
      // 老人类型
      // oldManType: '',
      // 照料类型
      // takeCareType: '',
      // 总条数
      total: 0,
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 20,
        oldManType: null,
        takeCareType: null,
        // 视频状态0正常 1已下架
        status: null,
        videoName: null,
        beginTime: null,
        endTime: null,
        // 标签id
        tags: null,
        keyword: ''
      },
      keyword: '',
      // 视频类型
      type: '0',
      // 选中的日期范围
      date: '',
      videoTypes: [
        {
          value: '0',
          label: '正常视频'
        },
        {
          value: '1',
          label: '下架视频'
        }
      ],
      tableData: [
      ]
    }
  },
  created () {
    // 点击标签跳转到视频列表 获取此过程中的tagId 只显示当前标签的视频列表
    this.queryParams.tags = this.$route.query.tagId
  },
  mounted () {
    this.initList()
  },
  methods: {
    // 删除选中视频
    deletedVideos () {
      this.delteVideo(this.selectedIdsStr)
    },
    // 上架下架视频
    updateVideoStatus (video) {
      const text = video.status === 0 ? '下架' : '上架'
      const status = video.status === 0 ? 1 : 0
      this.$confirm('您确定要' + text + '视频吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'confirm-pannel'
      })
        .then(() => {
          updateVideo({ videoId: video.videoId, status: status }).then(res => {
            if (res.code === 200) {
              this.msgSuccess('修改成功')
              this.initList()
            } else {
              this.msgError('修改失败' + res.code)
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
    },
    // 选中表格中的每一项
    handleSelectionChange (value) {
      this.selectedIds = value.map(item => {
        return item.videoId
      })
      this.selectedIdsStr = this.selectedIds.join(',')
    },
    // 按照日期筛选
    queryDate () {
      this.queryParams.beginTime = this.date[0]
      this.queryParams.endTime = this.date[1]
      this.handleQuery()
    },
    // 按关键字搜索
    handleQuery () {
      this.queryParams.pageNum = 1
      this.initList()
    },
    // 获取列表
    initList () {
      getVideoList(this.queryParams).then(res => {
        this.tableData = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 查看视频
    viewVideo (id) {
      this.$router.push({ path: '/video/video/' + id })
    },
    // 编辑视频
    editVideo (id) {
      this.$router.push({ path: '/video/add-video/' + id })
    },
    // 删除视频
    delteVideo (id) {
      this.$confirm('此操作将永久删除该视频, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'confirm-pannel'
      })
        .then(() => {
          removeVideo(id).then((res) => {
            if (res.code === 200) {
              this.msgSuccess('删除成功')
              this.handleQuery()
            }
          })
        })
        .catch(() => {
          this.msgInfo('已取消删除')
        })
    }
  }
}
</script>
