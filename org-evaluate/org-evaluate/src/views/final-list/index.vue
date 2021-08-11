<template>
  <div class="final-list">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">汇总</span>
      </div>
    </div>
    <div class="list-container ml-16">
      <table>
        <tr>
          <td rowspan="2" width="10%">机构</td>
          <td rowspan="2" width="15%">检查项目</td>
          <td colspan="4">检查情况</td>
          <td colspan="2">在C项(不符合指标)中</td>
          <td rowspan="2" width="10%">检查结果(整改/提升)</td>
        </tr>
        <tr>
          <td>A项数量</td>
          <td>B项数量</td>
          <td>C项数量</td>
          <td>未检查项目数量</td>
          <td>基础指标数量</td>
          <td>基础指标序号</td>
        </tr>
        <tr>
            <td :rowspan="YangLaoYuanData.rowspan">服务社会老年人的养老院</td>
            <template v-if="YangLaoYuanData.td1.name">
              <td>{{YangLaoYuanData.td1.name}}</td>
            <td>{{YangLaoYuanData.td1.sum && YangLaoYuanData.td1.sum.A.list.length}}</td>
            <td>{{YangLaoYuanData.td1.sum && YangLaoYuanData.td1.sum.B.list.length}}</td>
            <td>{{YangLaoYuanData.td1.sum && YangLaoYuanData.td1.sum.C.list.length}}</td>
            <td>0</td>
            <td>{{YangLaoYuanData.td1.sum && YangLaoYuanData.td1.sum.C.baseList.length}}</td>
            <td>{{YangLaoYuanData.td1.sum && YangLaoYuanData.td1.sum.C.baseStr}}</td>
            <td>{{YangLaoYuanData.td1.sum && YangLaoYuanData.td1.sum.result === 0 ? '整改':'提升'}}</td>
            </template>
        </tr>
        <template v-if="YangLaoYuanData.tdData.length">
          <tr v-for="item in YangLaoYuanData.tdData" :key="item.lastAssessId">
            <td>{{item.name}}</td>
            <td>{{item.sum.A.list.length}}</td>
            <td>{{item.sum.B.list.length}}</td>
            <td>{{item.sum.C.list.length}}</td>
            <td>0</td>
            <td>{{item.sum.C.baseList.length}}</td>
            <td>{{item.sum.C.baseList.baseStr}}</td>
            <td>{{item.sum.result=== 0 ? '整改':'提升'}}</td>
        </tr>
        </template>
         <tr>
            <td :rowspan="JingLaoYuanData.rowspan">敬老院</td>
             <template v-if="JingLaoYuanData.td1.name">
              <td>{{JingLaoYuanData.td1.name}}</td>
            <td>{{JingLaoYuanData.td1.sum && JingLaoYuanData.td1.sum.A.list.length}}</td>
            <td>{{JingLaoYuanData.td1.sum && JingLaoYuanData.td1.sum.B.list.length}}</td>
            <td>{{JingLaoYuanData.td1.sum && JingLaoYuanData.td1.sum.C.list.length}}</td>
            <td>0</td>
            <td>{{JingLaoYuanData.td1.sum && JingLaoYuanData.td1.sum.C.baseList.length}}</td>
            <td>{{JingLaoYuanData.td1.sum && JingLaoYuanData.td1.sum.C.baseStr}}</td>
            <td>{{JingLaoYuanData.td1.sum && JingLaoYuanData.td1.sum.result === 0 ? '整改':'提升'}}</td>
            </template>
        </tr>
         <template v-if="JingLaoYuanData.tdData.length">
          <tr v-for="item in JingLaoYuanData.tdData" :key="item.lastAssessId">
            <td>{{item.name}}</td>
            <td>{{item.sum.A.list.length}}</td>
            <td>{{item.sum.B.list.length}}</td>
            <td>{{item.sum.C.list.length}}</td>
            <td>0</td>
            <td>{{item.sum.C.baseList.length}}</td>
            <td>{{item.sum.C.baseList.baseStr}}</td>
            <td>{{item.sum.C.baseList.result=== 0 ? '整改':'提升'}}</td>
        </tr>
        </template>
        <tr>
            <td rowspan="2">合计</td>
            <td colspan="8">检查养老机构总数<span class="count">({{totalCount}})</span>个，其中:社会老年人的养老院<span class="count">({{YangLaoYuanData.count}})</span>个,敬老院<span class="count">({{JingLaoYuanData.count}})</span>个</td>
        </tr>
        <tr>
          <td colspan="8">检查结果中，需要整改的养老院总数<span class="count">({{YangLaoYuanData.failCount + JingLaoYuanData.failCount}})</span>个，其中：社会养老人的养老院<span class="count">({{YangLaoYuanData.failCount}})</span>个，敬老院<span class="count">({{JingLaoYuanData.failCount}})</span>个</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import './index.scss'
import { getSumList } from '@/api/check'
export default {
  data () {
    return {
      JingLaoYuanData: {
        rowspan: 1,
        td1: {},
        tdData: []
      },
      YangLaoYuanData: {
        rowspan: 1,
        td1: {},
        tdData: []
      },
      // 养老院总数
      totalCount: 0
    }
  },
  created () {
    this.getSumList()
  },
  methods: {
    // 处理统计数据
    handleData (data) {
      data = data.map(item => {
        item.sum = item.sum && JSON.parse(item.sum)
        return item
      })
      const fail = data.filter(item => {
        return item.sum.result === 0
      })
      return {
        // 每种类别的数量
        count: data.length ? data.length : 0,
        rowspan: data.length ? data.length : 1,
        td1: data[0] ? data[0] : {},
        tdData: data && data.slice(1),
        // 需要整改的数量
        failCount: fail.length
      }
    },
    // 获取统计列表
    getSumList () {
      getSumList().then(res => {
        const data = res.data
        this.totalCount = data.JingLaoYuan.length + data.YangLaoYuan.length
        this.JingLaoYuanData = this.handleData(data.JingLaoYuan)
        this.YangLaoYuanData = this.handleData(data.YangLaoYuan)
      })
    }
  }
}
</script>
