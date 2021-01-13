<template>
  <div class="index pl-16 pr-42">
    <div class="selector-group pt-36 pb-16">
      <el-radio-group v-model="duration" @change="changeDuration" size="small">
        <el-radio-button label="week">本周</el-radio-button>
        <el-radio-button label="month">本月</el-radio-button>
        <el-radio-button label="year">全年</el-radio-button>
      </el-radio-group>
      <div class="pl-32">
        <span class="date-picker-title">选择日期：</span>
        <el-date-picker
          v-model="date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd"
          @change="changeDateRange"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="content">
      <div class="content-l">
        <div class="trend-chart" id="trend"></div>
        <div class="chart-gap"></div>
        <div class="top-chart" id="top"></div>
      </div>

      <div class="content-r ml-16">
        <div class="click-number-title ">总视频点击量排名</div>
        <div class="click-number-content pt-20">
          <div class="item" v-for="i in 10" :key="i">
           <div class="item-left">
              <i>1</i>
            <div>如何预防老人感冒？</div>
           </div>
            <div  class="item- f16 bold color-top">322,124</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'
const echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
  data () {
    return {
      duration: 'year',
      date: '',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  mounted () {
    this.createTrendChart()
    this.createTopChart()
  },
  methods: {
    createTrendChart () {
      const trendChart = echarts.init(document.getElementById('trend'))
      var option = {
        title: {
          text: '点击量趋势',
          left: '60'
        },
        tooltip: {},
        legend: {
          data: ['点击数']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '点击数',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ],
        color: '#C23731'
      }
      trendChart.setOption(option)
    },
    createTopChart () {
      const topChart = echarts.init(document.getElementById('top'))
      var option = {
        title: {
          text: '视频分类点击量TOP5',
          left: '60'
        },
        tooltip: {
          // trigger: 'item',
          // axisPointer: { // 坐标轴指示器，坐标轴触发有效
          //   type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          // },
          formatter: '{a}<br/>{c}'
        },
        legend: {
          top: '20',
          data: ['身体照顾', '康复老人', '自理老人', '失能老人', '高龄老人']

        },
        xAxis: {
          // data: ['身体照顾', '康复老人', '自理老人', '失能老人', '高龄老人']
          type: 'category'
        },
        grid: {
          top: '80'
        },
        yAxis: {},
        series: [
          {
            name: '身体照顾',
            type: 'bar',
            data: [100]
          },
          {
            name: '康复老人',
            type: 'bar',
            data: [200]
          },
          {
            name: '自理老人',
            type: 'bar',
            data: [50]
          },
          {
            name: '失能老人',
            type: 'bar',
            data: [90]
          },
          {
            name: '高龄老人',
            type: 'bar',
            data: [600]
          }
        ],
        color: ['#C23731', '#2F4655', '#62A1A8', '#D48266', '#94C6AF']
      }
      topChart.setOption(option)
    },
    changeDuration (duration) {
      this.duration = duration
      console.log(duration)
    },
    changeDateRange (date) {
      console.log(date)
    }
  }
}
</script>
