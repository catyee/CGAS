<template>
  <div class="cooperation">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">合作信息列表</span>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-8">
        <el-button type="primary" :disabled="!selectedIds.length" @click.prevent="download">批量下载</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        :fit="true"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="项目简介/介绍" prop="cooperateContent" width="400">
          <template slot-scope="scope">
            <happy-scroll color="rgba(0,0,0,0.5)" size="5">
              <div class="content-width">{{ scope.row.cooperateContent }}</div>
            </happy-scroll>
          </template>
        </el-table-column>
        <el-table-column prop="contactOrganize" label="单位名称">
        </el-table-column>
        <el-table-column
          prop="contactName"
          label="联系人"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="phone" label="手机号" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="email" label="邮箱" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="updateTime" label="时间" show-overflow-tooltip>
          <template slot-scope="scope">
            <div>{{scope.row.createTime|formatDate('YYYY-mm-dd')}}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
        <!-- 分页 -->
    <pagination :total="total" :queryParams="queryParams"  @initList="initList"></pagination>
  </div>
</template>
<script>
import './cooperation.scss'
import { getCooperationList, exportCooperationList } from '@/api/cooperation'
import pagination from '@/components/pagination.vue'
import { baseUrl } from '../../baseUrl'
export default {
  components: {
    pagination
  },
  data () {
    return {
      tableData: [],
      selectedIds: [], // 选中项的id
      selectedIdsStr: '', // 选中项id的拼接字符串
      // getList查询参数
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 20
      },
      // 总条数
      total: 0
    }
  },
  mounted () {
    // 获取合作列表
    this.initList()
  },
  methods: {
    // 获取用户列表
    initList () {
      getCooperationList(this.queryParams).then((res) => {
        this.tableData = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 选中表格中的每一项
    handleSelectionChange (value) {
      this.selectedIds = value.map((item) => {
        return item.cooperateId
      })
      this.selectedIdsStr = this.selectedIds.join(',')
    },
    // 导出合作列表
    download () {
      exportCooperationList(this.selectedIds).then((res) => {
        window.open(`${baseUrl}/common/download?fileName=${res.msg}&delete=true`)
      })
    }
  }
}
</script>
