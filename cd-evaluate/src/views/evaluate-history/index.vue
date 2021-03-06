<template>
  <div class="evaluate-history">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">历史评估</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f12 no-wrap">关键字:</div>
        <div>
          <el-input
            v-model="queryParams.searchValue"
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
        <div class="color-grey pr-5 f14 no-wrap">评估状态:</div>
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
    </div>
    <div class="list-container pl-16">
      <el-table
        class="table"
        :data="list"
        tooltip-effect="dark"
        style="width: 100%"
        :fit="true"
      >
        <el-table-column label="序号" width="70px">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="登记日期" prop="registerYear">
          <!-- <template slot-scope="scope">
            {{ scope.row.createTime && scope.row.createTime.slice(0, 11) }}
          </template> -->
        </el-table-column>
        <el-table-column prop="name" label="老人姓名"> </el-table-column>
        <el-table-column prop="idNumber" label="身份证号" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="age" label="年龄" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="childNumber"
          label="子女数"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="dependent"
          label="由谁抚养"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="minimumLiving" label="是否低保">
          <template slot-scope="scope">
            {{ scope.row.minimumLiving === 0 ? "否" : "是" }}
          </template>
        </el-table-column>
        <el-table-column prop="cardNumber" label="银行卡" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="assessStatus" label="评估状态">
          <template slot-scope="scope">
            <span class="color-green" v-show="scope.row.assessStatus === 2">
              已评估
            </span>
            <span class="color-orange" v-show="scope.row.assessStatus === 1">
              评估中
            </span>
            <span class="color-red" v-show="scope.row.assessStatus === 0">
              未评估
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="assessStatus" label="评估结果" width="400">
          <template slot-scope="scope">
            <div class="result-con">
              <div class="pr-20">
                {{ evaluateResult[scope.row.assessResult] }}
              </div>
              <div
                v-if="!scope.row.assessResult && scope.row.assessResult !== 0"
              >
                无
              </div>
              <div
                v-if="scope.row.assessResult || scope.row.assessResult === 0"
              >
                <div class="pb-10">
                  <span class="pr-20">C1.1日常生活活动：2级</span>
                  <span>C1.2精神状态：2级</span>
                </div>
                <div>
                  <span class="pr-20">C1.1日常生活活动：2级</span>
                  <span>C1.2精神状态：2级</span>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 限制只有评估员可以评估 -->
            <div
              class="color-green"
              @click="evaluate(null, scope.row.createBy, scope.row.registerId)"
              v-show="scope.row.assessStatus === 0 && role === 'common'"
            >
              去评估
            </div>
            <!-- 限制只有评估员可以评估 -->
            <div
              class="color-green"
              @click="
                evaluate(
                  scope.row.assessId,
                  scope.row.createBy,
                  scope.row.registerId
                )
              "
              v-show="scope.row.assessStatus === 1 && role === 'common'"
            >
              评估
            </div>
            <div
              class="color-green pr-20"
              @click="toEvaluateResult(scope.row.assessId)"
              v-show="scope.row.assessStatus === 2"
            >
              查看当前评估结果
            </div>
            <!-- <div class="color-green" @click="toHistory(scope.row.idNumber)">
              历史评估
            </div> -->
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
import { evaluateStatus, evaluateResult } from '@/libs/constant'
import { getRegisterList } from '@/api/register'
export default {
  components: {
    pagination
  },
  computed: {
    role () {
      return this.$store.getters.roles[0]
    }
  },
  data () {
    return {
      date: '', // 评估日期选择器绑定数据
      evaluateStatus: evaluateStatus,
      evaluateResult: evaluateResult,
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
      },
      // 总条数
      total: 0,
      list: []
    }
  },
  mounted () {
    // 获取列表
    this.initList()
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
    initList () {
      getRegisterList(this.queryParams).then((res) => {
        this.list = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 去评估
    evaluate (id, createBy, registerId) {
      const assessId = id || ''
      this.$router.push({
        path: '/evaluate/' + assessId,
        query: { createBy: createBy, registerId: registerId }
      })
    },
    // 查看评估结果
    toEvaluateResult (id) {
      this.$router.push({ path: '/evaluate-show/' + id })
    }
  }
}
</script>
