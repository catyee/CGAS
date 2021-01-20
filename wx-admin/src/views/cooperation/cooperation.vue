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
        <el-button type="primary">批量下载</el-button>
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
        <el-table-column label="项目简介/介绍" prop="cooperateContent" >
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
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagenation">
      <el-pagination
        background
        @size-change="initList"
        @current-change="initList"
        :page-sizes="[20, 30, 50, 100]"
        :current-page.sync="queryParams.pageNum"
        :page-size.sync="queryParams.pageSize"
        layout="total,sizes, prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import './cooperation.scss'
import { getCooperationList } from '@/api/cooperation'
export default {
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
        return item.userId
      })
      this.selectedIdsStr = this.selectedIds.join(',')
    }
  }
}
</script>
