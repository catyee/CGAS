<template>
  <div class="relation-chart">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <router-link to="/relation/relation-list">
          <span class="pl-2 f14 color-danger">管理关系/</span>
        </router-link>
        <span class="pl-2 f14">关系图谱</span>
      </div>
    </div>
    <div class="chart-wrap ml-16">
      <div class="chart" id="chart"></div>
    </div>
  </div>
</template>
<script>
import './relation-chart.scss'
import { getRelationList, getTagList } from '@/api/relation'
var echarts = require('echarts')
export default {
  data () {
    return {
      // 查询参数
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 99999999
      },
      // 关系列表
      relations: [],
      // 标签列表
      tags: []
    }
  },
  created () {
    // 获取关系列表
    this.initList()
  },

  methods: {
    // 获取关系列表
    initList () {
      Promise.all([getRelationList(this.queryParams), getTagList(this.queryParams)]).then(res => {
        this.relations = res[0].rows
        this.tags = res[1].rows
        this.renderChart()
      })
    //   getRelationList(this.queryParams).then((res) => {
    //     this.relations = res.rows
    //     this.getChartData()
    //   })
    //   getTagList(this.queryParams).then((res) => {
    //     this.tags = res.rows
    //   })
    },

    // 获取图表数据
    renderChart () {
      var myChart = echarts.init(document.getElementById('chart'))
      const nodes = this.tags.map(item => {
        return {
          id: item.tagName,
          tagId: item.tagId,
          name: item.tagName,
          symbolSize: 30,
          symbol: 'circle'
        }
      })
      // 设置曲线的弧度
      const links = []
      this.relations.forEach(item => {
        let count = 1
        const current = {
          source: item.tagName1,
          target: item.tagName2,
          name: item.relate,
          category: item.relate
        }

        links.forEach(item => {
          if (current.source === item.source && current.target === item.target) {
            count++
          }
        })
        current.lineStyle = {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'blue' // 0% 处的颜色
            }, {
              offset: 1, color: '#3dd67a' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
          curveness: 0.3 * count,
          width: 1,
          opacity: 0.5
        }
        links.push(current)
      })
      const option = {
        title: { text: '关系图谱' },
        darkMode: 'auto',
        tooltip: {
          // 鼠标是否可以进入提示框浮层中 属性默认为false 如果不设置为true的话，无法操作提示框里的button
          enterable: true,
          triggerOn: 'click',
          formatter: function (x) {
            if (x.data.source) {
              return x.data.source + x.data.name + x.data.target
            } else {
              const url = window.location.href
              const goVideoList = url.split('relation')[0] + 'video/video-list?tagId=' + x.data.tagId
              return `<a href="${goVideoList}" >查看标签<span class="color-danger">${x.data.name}</span>的相关视频</a>`
            }
          }
        },
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'force',
            data: nodes,
            links: links,
            roam: true,
            label: {
              show: true,
              position: 'bottom',
              distance: 5,
              fontSize: 12,
              align: 'center',
              color: '#333'
            },
            edgeLabel: { // 边的设置
              show: true,
              position: 'middle',
              fontSize: 12,
              // 边上字体的颜色
              color: '#5470c6',
              // backgroundColor: 'red',
              //   borderRadius: 15,
              //   width: 30,
              //   height: 30,
              //   borderWidth: 5,
              formatter: (params) => {
                return params.data.name
              }
            },
            force: {
              repulsion: 100,
              gravity: 0.08,
              edgeLength: 50
            },
            // 每一个标签的样式
            itemStyle: {
              color: '#4992ff',
              nodeStyle: {
                brushType: 'both',
                borderColor: 'rgba(0,215,0,0.4)',
                borderWidth: 1
              }
            //   color: {
            //     type: 'radial',
            //     x: 0.5,
            //     y: 0.5,
            //     r: 0.5,
            //     colorStops: [
            //       {
            //         offset: 0,
            //         color: '#3dd67a' // 0% 处的颜色
            //       },
            //       {
            //         offset: 0.7,
            //         color: '#3dd67a' // 0% 处的颜色
            //       },
            //       {
            //         offset: 1,
            //         color: '#95dcb2' // 100% 处的颜色
            //       }
            //     ],
            //     global: false // 缺省为 false
            //   }
            },
            zoom: 1,
            nodeScaleRatio: 0.6,
            edgeSymbol: ['circle', 'arrow'], // 边两边的类型
            autoCurveness: 0.01 // 多条边的时候，自动计算曲率
          }
        ]

      }

      myChart.setOption(option)
    //   myChart.on('click', 'series', function (data) {
    //     console.log(data, 'dddddddddd')
    //   })
    }
  }
}
</script>
