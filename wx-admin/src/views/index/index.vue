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
          v-model="duration"
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
        <div class="top-chart" id="care-top"></div>
      </div>

      <div class="content-r ml-16">
        <div class="click-number-title pt-10">总视频点击量排名</div>
        <div class="click-number-content">
          <div class="item" v-for=" (item, index) in videoCountList" :key="item.videoId" @click="toVideoDetail(item.videoId)">
            <div class="item-left">
              <img :src= "require(`@/assets/index-video/${index +1}.svg`)" >
              <div class="pl-9 pr-9  name" :title="item.videoName">{{item.videoName}}</div>
            </div>
            <div class="f16 bold" :class="{'color-top': index === 0 || index === 1 || index === 2}">{{item.count}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'

// 导入常量
import { getVideoTrend } from '@/api/video'
import {
  weekFirstDay,
  weekLastDay,
  monthFirstDay,
  monthLastDay,
  yearFirstDay,
  yearLastDay
} from '@/utils/dateUtil'
import filters from '@/utils/filter'
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
      duration: 'week',
      startTime: null,
      endTime: null,
      // 设置日期范围不能大于今天
      pickerOptions: {
        disabledDate: function (date) {
          return date.getTime() > new Date().getTime()
        }
      },
      // 总视频点击量排名
      videoCountList: []
    }
  },
  created () {
    this.getTime()
  },

  methods: {
    // 跳转到视频详情页面
    toVideoDetail (id) {
      this.$router.push({ path: '/main/video/' + id })
    },
    createChart (data) {
      this.createTrendChart(data.clickTrend)
      this.createTopChart(data.oldManClass)
      this.createCareTopChart(data.takeCareClass)
    },
    // 获取时间段
    getTime () {
      switch (this.duration) {
        case 'week':
          this.startTime = weekFirstDay()
          this.endTime = weekLastDay()
          break
        case 'month':
          this.startTime = monthFirstDay()
          this.endTime = monthLastDay()
          break
        case 'year':
          this.startTime = yearFirstDay()
          this.endTime = yearLastDay()
          break
      }
      this.getVideoTrend()
    },
    // 按时间段查询视频趋势
    getVideoTrend () {
      getVideoTrend({
        startTime: this.startTime,
        endTime: this.endTime
      }).then((res) => {
        if (res.code === 200 && res.data) {
          this.videoCountList = res.data.allVideoCount
          this.createChart(res.data)
        } else {
          this.msgError('查询失败')
        }
      })
    },
    // 点击量趋势图表
    createTrendChart (data) {
      const formatDate = filters.formatDate
      // 计算时间段
      const dayNum = (new Date(this.endTime).getTime() - new Date(this.startTime).getTime()) / 1000 / 3600 / 24
      // 不同时间段查询的数据 时间粒度不一样
      let xData = []
      const seriesData = []
      // 获取x轴时间段
      // x轴时间 分情况处理
      // 查询一周 时间为星期一 星期二。。。
      if (this.duration === 'week') {
        xData = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
        data.forEach((item) => {
          const date = item.startTime.slice(0, 10)
          const value = item.count
          seriesData.push({
            value: value,
            date: date
          })
        })
        // 查询14天到=60天 以周分隔单位
      } else if (dayNum > 14 && dayNum <= 60) {
        data.forEach((item, index) => {
          const date = `${item.startTime.slice(0, 10)} 至 ${item.endTime.slice(0, 10)}`
          const value = item.count
          xData.push(`第${index + 1}周`)
          seriesData.push({
            value: value,
            date: date
          })
        })
        // 2020-10-01
      } else if (dayNum > 60) {
        data.forEach((item, index) => {
          const date = `${item.startTime.slice(0, 10)} 至 ${item.endTime.slice(0, 10)}`
          const key = item.startTime.slice(0, 10)
          const value = item.count
          const time = formatDate(key, 'YYYY年mm月')
          xData.push(time)
          seriesData.push({
            value: value,
            date: date
          })
        })
      } else {
        data.forEach((item) => {
          const key = Object.keys(item)[0]
          const value = item[key]
          xData.push(key.slice(0, 10))
          seriesData.push({
            value: value,
            date: key.slice(0, 10)
          })
        })
      }
      const trendChart = echarts.init(document.getElementById('trend'))
      var option = {
        title: {
          text: '点击量趋势',
          left: '60'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              formatter: function (params) {
                return params.seriesData[0].data.date
              }
            }
          }
        },
        // legend: {
        //   data: ['点击数']
        // },
        xAxis: {
          data: xData,
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {},
        series: [
          {
            name: '点击数',
            type: 'bar',
            data: seriesData
          }
        ],
        color: '#C23731'
      }
      trendChart.setOption(option)
    },
    // 老人类型视频点击量
    createTopChart (data) {
      const olderTypes = []
      const seriesData = data.map(item => {
        const key = Object.keys(item)[0]
        const value = item[key]
        const obj = {
          name: key,
          type: 'bar',
          data: [value]
        }
        olderTypes.push(key)
        return obj
      })
      const topChart = echarts.init(document.getElementById('top'))
      var option = {
        title: {
          text: '老人类型视频点击量',
          left: '60'
        },
        tooltip: {
          trigger: 'item',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: '{a}<br/>{c}'
        },
        legend: {
          top: '40',
          data: olderTypes
        },
        xAxis: {
          // data: ['身体照顾', '康复老人', '自理老人', '失能老人', '高龄老人']
          type: 'category'
        },
        grid: {
          top: '100'
        },
        yAxis: {},
        series: seriesData,
        color: ['#C23731', '#2F4655', '#62A1A8', '#D48266', '#94C6AF']
      }
      topChart.setOption(option)
    },
    // 老人类型视频点击量
    createCareTopChart (data) {
      const careTypes = []
      const seriesData = data.map(item => {
        const key = Object.keys(item)[0]
        const value = item[key]
        const obj = {
          name: key,
          type: 'bar',
          data: [value]
        }
        careTypes.push(key)
        return obj
      })
      const topChart = echarts.init(document.getElementById('care-top'))
      var option = {
        title: {
          text: '老人类型视频点击量',
          left: '60'
        },
        tooltip: {
          trigger: 'item',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: '{a}<br/>{c}'
        },
        legend: {
          top: '40',
          data: careTypes
        },
        xAxis: {
          // data: ['身体照顾', '康复老人', '自理老人', '失能老人', '高龄老人']
          type: 'category'
        },
        grid: {
          top: '100'
        },
        yAxis: {},
        series: seriesData,
        color: ['#C23731', '#2F4655', '#62A1A8', '#D48266', '#94C6AF']
      }
      topChart.setOption(option)
    },
    changeDuration (duration) {
      this.duration = duration
      this.getTime()
    },
    // 选择时间段
    changeDateRange (date) {
      this.startTime = date[0]
      this.endTime = date[1]
      this.getVideoTrend()
    }
  }
}
</script>
