<template>
  <div class="evaluate-list">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">评估管理</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f12 no-wrap">关键字:</div>
        <div>
          <el-input
            v-model="queryParams.tagName"
            placeholder="姓名/身份证号/手机号"
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex">
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pl-12 pr-5 f14">按评估日期查询:</div>
        <el-date-picker
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
        <div class="color-grey pr-5 f14 no-wrap">评估状态:</div>
        <div>
          <el-select
            v-model="queryParams.status"
            placeholder="请选择"
            clearable
            @clear="handleQuery"
            @change="handleQuery"
          >
            <el-option
              v-for="item in evaluateStatus"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="list-container ml-16">
      <el-table :data="list" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="序号" width="70px">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="评估日期" prop="date">
        </el-table-column>
        <el-table-column prop="name" label="老人姓名">
        </el-table-column>
        <el-table-column
          prop="idCard"
          label="身份证号"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="child"
          label="子女数"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="dependents" label="由谁抚养" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="isPoor" label="是否低保" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="account" label="银行卡">
        </el-table-column>
        <el-table-column prop="account" label="联系人姓名">
        </el-table-column>
        <el-table-column prop="account" label="与老人关系">
        </el-table-column>
        <el-table-column prop="account" label="评估状态">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="color-green" @click="evaluate(scope.row.id)">去评估</div>
            <div class="color-green">历史评估</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      :total="total"
      :queryParams="queryParams"
      @initList="initList"
    ></pagination>
  </div>
</template>
<script>
import './index.scss'
import pagination from '@/components/pagination.vue'
export default {
  components: {
    pagination
  },
  data () {
    return {
      evaluateStatus: ['全部'],
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 20,
        // 视频状态0正常 1已下架
        status: null,
        beginTime: null,
        endTime: null
      },
      // 总条数
      total: 0,
      list: [
        {
          id: 1,
          date: '2020.1.20',
          name: '张三',
          idCard: '11111111',
          age: 65,
          child: 2,
          dependents: '22',
          isPoor: false,
          account: '123',
          lxr: '111',
          lxrPhone: '123',
          relation: '本人',
          status: '未评估'
        }
      ]
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
      this.queryParams.beginTime = this.date[0]
      this.queryParams.endTime = this.date[1]
      this.handleQuery()
    },
    // 获取列表
    initList () {
    //   getVideoList(this.queryParams).then(res => {
    //     this.tableData = res.rows
    //     this.total = parseInt(res.total)
    //   })
    },
    // 去评估
    evaluate (id) {
      this.$router.push({ path: '/evaluate/' + id })
    }
  }
}
</script>
