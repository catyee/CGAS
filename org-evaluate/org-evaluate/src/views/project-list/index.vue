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
            v-model="queryParams.projectNumber"
            placeholder=""
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">被检查机构名称:</div>
        <div>
          <el-input
            v-model="queryParams.name"
            placeholder=""
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">检查组成员:</div>
        <div>
          <el-input
            v-model="queryParams.expertNames"
            placeholder=""
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pl-12 pr-5 f14">检查日期:</div>
        <el-date-picker
          type="date"
          align="right"
          value-format="yyyy-MM-dd"
          unlink-panels
          v-model="queryParams.inspectTime"
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
              :value="item.status"
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
        <el-button type="primary" @click="addNewCheck">新建检查</el-button>
        <router-link to="/final-list">
          <el-button type="primary">生成汇总表</el-button>
        </router-link>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column label="序号" type="index"> </el-table-column>
        <el-table-column label="项目编号" prop="projectNumber"> </el-table-column>
        <el-table-column label="被检查机构名称" prop="name"> </el-table-column>
        <el-table-column label="负责专员" prop="userName"> </el-table-column>
        <el-table-column label="专家组成员" prop="expertNames">
          <template slot-scope="scope">
            {{ scope.row.expertNames && scope.row.expertNames.length ? scope.row.expertNames: '暂无'}}
          </template>
        </el-table-column>
        <el-table-column label="检查时间" prop="inspectTime">
          <template slot-scope="scope">
            {{ scope.row.inspectTime?scope.row.inspectTime: scope.row.createTime }}
          </template>
        </el-table-column>
        <el-table-column prop="assessStatus" label="状态">
          <template slot-scope="scope">
            <span>{{ !scope.row.assessStatus ? evaluateStatus[0]['label'] : evaluateStatus[scope.row.assessStatus]['label']}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="oper-btns">
              <span
                @click="getHistory(scope.row)"
                class="color-green pointer"
                >查看历史</span
              >
              <!-- <span
               v-show="scope.row.assessStatus === evaluateStatus[2].status"
                class="color-red pointer"
                >下载</span
              > -->
              <span
                class="color-green pointer"
                @click="createCheck(scope.row)"
                 v-show="!scope.row.assessStatus || scope.row.assessStatus === evaluateStatus[1].status"
                >去检查</span
              >
              <span
                class="color-green pointer"
                 v-show="scope.row.assessStatus === evaluateStatus[3].status"
                >复查</span
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
       <pagination
      :total="total"
      :queryParams="queryParams"
      @initList="initList"
    ></pagination>
    <AddNewCheck :newCheckVisible="dialogShow" @close="dialogShow= false" @submit="submit"/>
    <CheckHistory :dialogTableVisible="showHistory" :title="historyTitle"  :gridData="historyData" @close="showHistory = false"/>
  </div>
</template>
<script>
import './index.scss'
import { evaluateStatus } from '@/libs/constant'
import pagination from '@/components/pagination.vue'
import AddNewCheck from './newCheck.vue'
import CheckHistory from './check-history.vue'
import { getProjectList, getCheckListByProjectId } from '@/api/project-list'
export default {
  components: {
    AddNewCheck,
    pagination,
    CheckHistory
  },
  data () {
    return {
      // 检查历史列表
      historyData: [],
      // 历史检查弹框标题
      historyTitle: '',
      // 检查历史弹框
      showHistory: false,
      // 是否显示新建检查弹框
      dialogShow: false,
      // 总条数
      total: 0,
      date: '',
      // 评估状态
      evaluateStatus: evaluateStatus,
      // 列表
      tableData: [],
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 20,
        // 查询关键字
        name: null,
        // 专家组
        expertNames: '',
        assessStatus: null,
        // 检查日期
        inspectTime: null
      }
    }
  },
  created () {
    this.initList()
  },
  methods: {
    // 新建检查评估
    createCheck (data) {
      const passData = JSON.stringify(
        {
          projectId: data.projectId,
          name: data.name,
          inspector: data.userName,
          assessStatus: data.assessStatus,
          inspectTime: data.inspectTime ? data.inspectTime : data.createTime
        }
      )
      // 移除掉存储的assessId
      // 避免相互影响
      localStorage.removeItem('assessId')
      if (data.lastAssessId) {
        this.$router.push({
          path: '/check/' + data.lastAssessId,
          query: { data: passData }
        })
      } else {
        this.$router.push({
          path: '/check/',
          query: { data: passData }
        })
      }
    },
    // 获取列表
    initList () {
      getProjectList(this.queryParams).then((res) => {
        this.tableData = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 新增检查
    submit () {
      this.initList()
    },
    // 新建检查
    addNewCheck () {
      this.dialogShow = true
    },
    // 按关键字搜索
    handleQuery () {
      this.queryParams.pageNum = 1
      this.initList()
    },
    // 按照日期筛选
    queryDate () {
      this.handleQuery()
    },
    // 根据项目id 获取项目下所有的检查历史
    getHistory (data) {
      getCheckListByProjectId({
        projectId: data.projectId,
        assessStatus: 3
      }).then(res => {
        if (!res.data.length) {
          this.msgInfo('没有检查历史')
          return
        }
        this.showHistory = true
        this.historyTitle = data.name + '机构检查记录'
        this.historyData = res.data
      })
    }
  }
}
</script>
