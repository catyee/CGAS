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
          <td rowspan="2">机构</td>
          <td rowspan="2">检查项目</td>
          <td colspan="4">检查情况</td>
          <td colspan="2">在C项(不符合指标)中</td>
          <td rowspan="2">检查结果(整改/提升)</td>
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
            <td rowspan="2">服务社会老年人的养老院</td>
            <td>1机构</td>
            <td></td>
        </tr>
        <template>
             <tr>
            <td>2机构</td>
            <td>1机构</td>
            <td></td>
        </tr>
        </template>
         <tr>
            <td rowspan="2">敬老院</td>
            <td>1机构</td>
            <td></td>
        </tr>
        <template>
             <tr>
            <td>2机构</td>
            <td>1机构</td>
            <td></td>
        </tr>
        <tr>
            <td>合计</td>
            <td colspan="8">检查敬老院总数(2)个，其中:社会老年人的养老院(3)个,敬老院(10)个</td>
        </tr>
        </template>
      </table>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {}
</script>
