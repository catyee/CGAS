<template>
  <div class="cooperation">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">用户留言列表</span>
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
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="反馈内容" prop="suggestContent">
         <template slot-scope="scope">
            <happy-scroll color="rgba(0,0,0,0.5)" size="5">
              <div class="content-width">{{ scope.row.suggestContent }}</div>
            </happy-scroll>
          </template>
        </el-table-column>
        <el-table-column prop="contactName" label="联系人"> </el-table-column>
        <el-table-column prop="phone" label="手机号" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="updateTime" label="反馈时间" show-overflow-tooltip>
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
import './suggest.scss'
import { getSuggestList, exportSuggestList } from '@/api/cooperation'
import pagination from '@/components/pagination.vue'
export default {
  components: {
    pagination
  },
  data () {
    return {
      tableData: [
      ],
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
      getSuggestList(this.queryParams).then((res) => {
        this.tableData = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 选中表格中的每一项
    handleSelectionChange (value) {
      this.selectedIds = value.map((item) => {
        return item.suggestId
      })
      this.selectedIdsStr = this.selectedIds.join(',')
    },
    // 导出建议列表
    download () {
      exportSuggestList(this.selectedIds).then((res) => {
        window.open(`${process.env.VUE_APP_BASE_API}/common/download?fileName=${res.msg}&delete=true`)
      })
    }
  }
}
</script>
