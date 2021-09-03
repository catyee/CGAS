<template>
  <div class="project-list">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">检查列表</span>
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
        <div class="color-grey pr-5 f14 no-wrap">专家组成员:</div>
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
       <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">检查类型:</div>
        <div>
          <el-select
            v-model="queryParams.assessType"
            placeholder="请选择"
            clearable
            @clear="handleQuery"
            @change="handleQuery"
          >
            <el-option
              v-for="(item, index) in checkTypes"
              :key="index"
              :label="item.label"
              :value="item.type"
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
        <el-button type="primary" @click="addNewCheck" >新建检查</el-button>
        <router-link to="/final-list">
          <el-button type="primary" v-if="role!== 'common'">生成汇总表</el-button>
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
        <el-table-column label="检查类型" prop="assessType">
           <template slot-scope="scope">
            {{ checkTypes[scope.row.assessType -1].label }}
          </template>
        </el-table-column>
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
            <span :class="{'color-danger': scope.row.assessStatus === 3|| scope.row.assessStatus === 4 ,'color-green': scope.row.assessStatus === 1 }">{{ !scope.row.assessStatus ? evaluateStatus[0]['label'] : evaluateStatus[scope.row.assessStatus]['label']}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="oper-btns">
                <span
                  v-show="scope.row.assessStatus=== evaluateStatus[0].status"
                @click="editCheck(scope.row)"
                class="color-danger pointer"
                >修改</span
              >
                <span
                 v-show="scope.row.assessStatus=== evaluateStatus[0].status"
                @click="removeProject(scope.row)"
                class="color-danger pointer"
                >删除</span
              >
              <span
                @click="getHistory(scope.row)"
                v-show="scope.row.assessStatus!== evaluateStatus[0].status"
                class="color-green pointer"
                >查看历史</span
              >
               <span
               v-show="scope.row.assessStatus=== evaluateStatus[2].status || scope.row.assessStatus=== evaluateStatus[3].status "
                @click="toCheckShow(scope.row)"
                class="color-green pointer"
                >查看</span
              >
              <!-- <span
               v-show="scope.row.assessStatus === evaluateStatus[2].status"
                class="color-red pointer"
                >下载</span
              > -->
              <span
                class="color-green pointer"
                @click="createCheck(scope.row)"
                 v-show="(!scope.row.assessStatus || scope.row.assessStatus === evaluateStatus[1].status) && role === 'common'"
                >去检查</span
              >
               <span
                class="color-danger pointer"
                @click="abandon(scope.row)"
                 v-show="(scope.row.assessStatus === evaluateStatus[3].status)"
                >废弃</span
              >
              <span
                class="color-danger pointer"
                @click="review(scope.row)"
                 v-show="(scope.row.assessStatus === evaluateStatus[3].status) && role === 'common'"
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
    <AddNewCheck :newCheckVisible="dialogShow" @close="dialogShow= false" @submit="submit" :title="checkModalTitle" :checkData="checkModalData"/>

    <CheckHistory :dialogTableVisible="showHistory" :assessType="historyType" :title="historyTitle"  :gridData="historyData" @close="showHistory = false"/>
  </div>
</template>
<script>
import './index.scss'
import { evaluateStatus, checkTypes } from '@/libs/constant'
import pagination from '@/components/pagination.vue'
import AddNewCheck from './newCheck.vue'
import CheckHistory from './check-history.vue'
import { getProjectList, getCheckListByProjectId, deleteProject, updateProject } from '@/api/project-list'
import { mapActions } from 'vuex'
export default {
  components: {
    AddNewCheck,
    pagination,
    CheckHistory
  },
  data () {
    return {
      historyType: null, // 查看历史检查的类型
      checkModalData: {},
      checkModalTitle: '新建检查',
      //  role: this.$store.getters.roles[0],
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
      // 评估类型
      checkTypes: checkTypes,
      // 列表
      tableData: [],
      queryParams: {
        assessType: null, // 检查类型
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 10,
        // 查询关键字
        name: null,
        // 负责专员id
        userId: null,
        // 专家组
        expertNames: '',
        assessStatus: null,
        // 检查日期
        inspectTime: null
      }
    }
  },
  created () {
    this.changeFullStatus(false)
    this.initList()
  },
  computed: {
    role () {
      return this.$store.getters.roles[0]
    }
  },
  methods: {
    ...mapActions([
      'changeFullStatus'
    ]),
    // 废弃
    abandon (data) {
      this.$confirm('您确定要废弃该项检查吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          updateProject({
            projectId: data.projectId,
            assessStatus: 4
          }).then(res => {
            this.msgSuccess('操作成功')
            this.initList()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    // 删除项目
    removeProject (data) {
      this.$confirm('您确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          deleteProject(data.projectId).then(res => {
            this.msgSuccess('删除成功')
            this.initList()
          })
        })
        .catch(() => {
          this.msgInfo('已取消删除')
        })
    },
    // 编辑项目
    editCheck (data) {
      this.checkModalTitle = '修改检查'
      this.dialogShow = true
      this.checkModalData = data
    },
    // 查看已经完成
    toCheckShow (data) {
      this.$router.push({
        path: '/check-show/' + data.lastAssessId,
        query: { assessType: data.assessType }
      })
    },
    // 复查
    review (data) {
      const passData = JSON.stringify(
        {
          projectId: data.projectId,
          assessType: data.assessType,
          name: data.name,
          inspector: data.userName,
          assessStatus: data.assessStatus,
          inspectTime: data.inspectTime ? data.inspectTime : data.createTime
        }
      )
      // 移除掉存储的assessId
      // 避免相互影响
      localStorage.removeItem('assessId')
      this.$confirm('您确定要开始复查吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push({
          path: '/check/',
          query: { data: passData }
        })
      }).catch(() => {

      })
    },
    // 新建检查评估
    createCheck (data) {
      const passData = JSON.stringify(
        {
          projectId: data.projectId,
          assessType: data.assessType,
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
        this.$confirm('您确定要开始检查吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(passData)
          this.$router.push({
            path: '/check/',
            query: { data: passData }
          })
        }).catch(() => {

        })
      }
    },
    // 获取列表
    initList () {
      // 检查人员登录 只能查询到对应的列表
      if (this.role === 'common') {
        this.queryParams.userId = this.$store.state.user.userId
      }
      getProjectList(this.queryParams).then((res) => {
        this.tableData = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 新增检查
    submit () {
      this.initList()
    },
    // 新建项目
    addNewCheck () {
      this.checkModalTitle = '新建检查'
      this.dialogShow = true
      // 清空新建检查的form表单 如果不处理 在新建的时候表单内会受到编辑的影响保留了数据
      this.checkModalData = {}
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
        projectId: data.projectId
      }).then(res => {
        if (!res.data.length) {
          this.msgInfo('没有检查历史')
          return
        }
        this.showHistory = true
        this.historyTitle = data.name + '机构检查记录'
        this.historyData = res.data
        this.historyType = data.assessType
      })
    }
  }
}
</script>
