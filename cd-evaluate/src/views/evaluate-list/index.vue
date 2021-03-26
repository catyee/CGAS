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
      >
        <el-table-column label="序号" width="70px">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="评估日期" prop="createTime">
          <template slot-scope="scope">
            {{ scope.row.createTime && scope.row.createTime.slice(0, 11) }}
          </template>
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
        <el-table-column prop="contactName" label="联系人姓名">
        </el-table-column>
        <el-table-column
          prop="relate"
          label="与老人关系"
          style="show-overflow-tooltip"
        >
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
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div
              class="color-green"
              @click="createEvaluate(scope.row)"
              v-show="scope.row.assessStatus === 0"
            >
              去评估
            </div>
            <div
              class="color-green"
              @click="evaluate(scope.row)"
              v-show="scope.row.assessStatus === 1"
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
            <div class="color-green" @click="toHistory(scope.row.idNumber)">
              历史评估
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
  </div>
</template>
<script>
import './index.scss'
import pagination from '@/components/pagination.vue'
import { evaluateStatus } from '@/libs/constant'
import { getRegisterList } from '@/api/register'
import { getCode, addEvaluate } from '@/api/evaluate'
export default {
  components: {
    pagination
  },
  data () {
    return {
      date: '',
      evaluateStatus: evaluateStatus,
      // 表格评估数据
      evaluateData: {
        A1EvaluateYear: null,
        // A1 评估基本信息表
        A_1_1: '', // 评估编号
        A_1_2: new Date(), // 评估基准日期 默认今天
        A_1_3: null, // 评估原因
        // A2被评估者的基本信息表
        A_2_1: null, // 姓名
        A_2_2: null, // 性别
        A_2_3: null, // 出生日期
        A_2_4: '', // 身份证号
        A_2_5: '', // 社保卡号
        // 民族
        A_2_6: {
          value: null,
          text: null
        },
        A_2_7: null, // 文化程度
        // 宗教信仰
        A_2_8: {
          value: null,
          text: null
        },
        A_2_9: null, // 婚姻状况
        A_2_10: null, // 居住情况
        // 医疗费用支付方式
        A_2_11: {
          value: [],
          text: null
        },
        // 经济来源
        A_2_12: {
          value: [],
          text: null
        },
        // 疾病诊断
        A_2_13_1: null, // 痴呆
        A_2_13_2: null, // 精神疾病
        A_2_13_3: null, // 慢性疾病
        // 近30天内意外事件
        A_2_14_1: null, // 跌倒
        A_2_14_2: null, // 走失
        A_2_14_3: null, // 噎食
        A_2_14_4: null, // 自杀
        A_2_14_5: null, // 其他
        // A3信息提供者及联系人信息表
        A_3_1: null, // 信息提供者的姓名
        A_3_2: {
          // 信息提供者与老人的关系
          value: null,
          text: null
        },
        A_3_3: null, // 联系人姓名
        A_3_4: null, // 联系人电话
        // B1日常生活活动评估表
        B_1_1: null, // 进食
        B_1_2: null, // 洗澡
        B_1_3: null, // 修饰
        B_1_4: null, // 穿衣
        B_1_5: null, // 大便控制
        B_1_6: null, // 小便控制
        B_1_7: null, // 如厕
        B_1_8: null, // 床椅转移
        B_1_9: null, // 平地行走
        B_1_10: null, // 上下楼梯
        B_1_11: null, // 日常生活 活动总分
        B_1: '', // 日常生活 活动分级
        // B2 精神状态评估表
        B_2_1: {
          // 认知功能测验
          img: '', // 测验图片
          text1: '',
          text2: '',
          text3: '',
          score: null
        },
        B_2_2: null, // 攻击行为
        B_2_3: null, // 抑郁症状
        B_2_4: null, // 精神状态总分
        B_2: '', // 精神状态分级

        // 感知觉与沟通评估表
        B_3_1: null, // 意识水平
        B_3_2: null, // 视力
        B_3_3: null, // 听力
        B_3_4: null, // 沟通交流
        B_3: '', // 感知觉与沟通分级
        // B4 社会参与评估表
        B_4_1: null, // 生活能力
        B_4_2: null, // 工作能力
        B_4_3: null, // 时间/空间定向
        B_4_4: null, // 人物定向
        B_4_5: null, // 社会交往能力
        B_4_6: null, // 社会参与总分
        B_4: null // 社会参与分级
      },
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
    // 未评估的时候 点击去评估首先创建评估编号 创建之后跳转到评估页面
    createEvaluate (data) {
      if (!data.createBy) {
        this.msgError('数据错误，缺少creatBy')
      }
      getCode({ createBy: data.createBy })
        .then((res) => {
          data.code = res.msg
          this.evaluateData.A_1_1 = data.code
        })
        .then(() => {
          addEvaluate({
            registerId: data.registerId,
            aInfoJson: JSON.stringify(this.evaluateData)
          }).then((res) => {
            // 给评估id赋值
            data.assessId = res.data
            // 创建完成编号 跳转到评估页面
            this.evaluate(data)
          })
        })
    },
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
    evaluate (data) {
      const parseData = JSON.stringify({
        registerId: data.registerId,
        name: data.name,
        idNumber: data.idNumber
      })
      // createBy是为了新建评估的时候创建评估编号使用
      this.$router.push({
        path: '/evaluate/' + data.assessId,
        query: { data: parseData }
      })
    },
    // 查看评估结果
    toEvaluateResult (id) {
      this.$router.push({ path: '/evaluate-show/' + id })
    },
    // 历史评估
    toHistory (idNumber) {
      this.$router.push({ path: '/evaluate-history/' + idNumber })
    }
  }
}
</script>
