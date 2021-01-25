<template>
  <div class="video-list">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">视频列表</span>
      </div>
      <div class="flex pr-16">
        <span class="color-grey pr-5 f14">视频类型:</span>
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">关键字:</div>
        <el-input v-model="keyword" placeholder="请输入内容"></el-input>
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
        >
        </el-date-picker>
      </div>
      <div class="flex pr-16">
        <span class="color-grey pr-5 f14">选择老人类型:</span>
        <el-select v-model="oldManType" placeholder="请选择">
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
        <el-select v-model="takeCareType" placeholder="请选择">
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
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-15">
        <el-button type="primary">删除选中视频</el-button>
        <router-link to="/main/add-video">
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
            ></el-image> </template
          >>
        </el-table-column>
        <el-table-column prop="videoDuration" label="视频长度"> </el-table-column>
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
        </el-table-column>
        <el-table-column prop="updateTime" label="日期" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="status" label="状态" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="oper-btns">
              <span class="color-green pointer" @click="viewVideo(scope.row.videoId)">查看</span>
              <span class="color-red pointer" @click="delteVideo(scope.row.videoId)">删除</span>
              <span class="color-green pointer">修改</span>
              <span class="color-green pointer">下架</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import './video-list.scss'
import { olderTypes, careTypes } from '@/libs/constant.js'
import { getVideoList, removeVideo } from '@/api/video.js'
export default {
  data () {
    return {
      // 老人类型
      olderTypes: olderTypes,
      // 照料类型
      careTypes: careTypes,
      // 老人类型
      oldManType: '',
      // 照料类型
      takeCareType: '',
      // 总条数
      total: 0,
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 20
      },
      keyword: '',
      // 视频类型
      type: '0',
      date: '',
      options: [
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
        {
          imagAddr:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          videoDuration: "3'20''",
          videoName: '如何预防老人感冒',
          oldManType: '自理老人',
          takeCareType: '生活照料',
          tags: '防护、慢性病管理、健康管理',
          updateTime: '2019-07-06',
          status: '正常'
        }
      ]
    }
  },
  mounted () {
    this.initList()
  },
  methods: {
    handleSelectionChange () {},
    // 获取列表
    initList () {
      getVideoList(this.queryParams).then(res => {
        this.tableData = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 查看视频
    viewVideo (id) {
      this.$router.push({ path: '/main/video/' + id })
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
