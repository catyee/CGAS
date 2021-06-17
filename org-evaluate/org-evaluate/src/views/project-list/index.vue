<template>
  <div class="project-list">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">项目列表</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">项目编号:</div>
        <div>
          <el-input
            v-model="queryParams.searchValue"
            placeholder=""
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">被检查机构名称:</div>
        <div>
          <el-input
            v-model="queryParams.searchValue"
            placeholder=""
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">检查组成员:</div>
        <div>
          <el-input
            v-model="queryParams.searchValue"
            placeholder=""
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pl-12 pr-5 f14">检查日期:</div>
        <el-date-picker
          type="daterange"
          align="right"
          unlink-panels
          v-model="date"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
          @change="queryDate"
        >
        </el-date-picker>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">状态:</div>
        <div>
          <el-select
            v-model="queryParams.assessStatus"
            placeholder="请选择"
            clearable
            @clear="handleQuery"
            @change="handleQuery"
          >
            <el-option
              v-for="(item, index) in evaluateStatus"
              :key="index"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="flex">
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-15">
        <el-button
          type="primary"
          >新建检查</el-button
        >
        <router-link to="/video/add-video">
          <el-button type="primary">生成汇总表</el-button>
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
            {{ scope.row.videoDuration | formatTime }}
          </template>
        </el-table-column>
        <el-table-column
          prop="videoName"
          label="视频标题"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="oldManType"
          label="老人类型"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="takeCareType"
          label="照料类型"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="tags" label="标签" show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-for="(tag, index) in scope.row.tagList" :key="tag.tagId">{{
              index !== scope.row.tagList.length - 1
                ? tag.tagName + ","
                : tag.tagName
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="日期" show-overflow-tooltip>
          <template slot-scope="scope">
            <div>{{ scope.row.createTime | formatDate("YYYY-mm-dd") }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <span>{{ scope.row.status === 0 ? "正常" : "已下架" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="oper-btns">
              <span
                class="color-green pointer"
                @click="viewVideo(scope.row.videoId)"
                >查看</span
              >
              <span
                class="color-red pointer"
                @click="delteVideo(scope.row.videoId)"
                >删除</span
              >
              <span
                class="color-green pointer"
                @click="editVideo(scope.row.videoId)"
                >修改</span
              >
              <span
                class="color-green pointer"
                :class="[
                  { 'color-green': scope.row.status === 1 },
                  { 'color-red': scope.row.status === 0 },
                ]"
                @click="updateVideoStatus(scope.row)"
              >
                {{ scope.row.status === 0 ? "下架" : "上架" }}
              </span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {
  data () {
    return {
      date: '',
      evaluateStatus: [],
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 20,
        // 查询关键字
        searchValue: null,
        // 评估状态 全部 未评估 评估中 已评估
        assessStatus: null,
        beginTime: null,
        endTime: null
      }
    }
  },
  methods: {
    // 按关键字搜索
    handleQuery () {
      this.queryParams.pageNum = 1
      this.initList()
    },
    // 按照日期筛选
    queryDate () {
      this.queryParams.beginTime = this.date && this.date[0]
      this.queryParams.endTime = this.date && this.date[1]
      this.handleQuery()
    },
    // 获取列表
    initList () {}
  }
}
</script>
