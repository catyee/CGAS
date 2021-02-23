<template>
  <div class="evaluate pt-16 pl-27">
    <div class="left" id="left">
      <div class="flex pt-16">
        <div class="title-line"></div>
        <span class="pl-4 f14">评估</span>
      </div>
      <div class="hash-list">
        <a href="#A1" class="pt-30">A.1评估基本信息表</a>
        <a href="#A2">A.2被评估者的基本信息表</a>
        <a href="#A3">A.3信息提供者及联系人信息表</a>
        <a href="#B1">B.1日常生活活动评估表</a>
        <a href="#B2">B.2 精神状态评估表</a>
        <a href="#B3">B.3 感知觉与沟通评估表</a>
        <a href="#B4">B.4 社会参与评估表</a>
      </div>
    </div>
    <div class="wrap">
      <div class="center-wrap mt-16">
        <div class="center"  id="print">
          <div class="tabs">
            <div id="A1" class="evaluate-tab">
              <div class="pt-20">
                MZ/T 039—2013
              </div>
              <div>附 录 A</div>
              <div>（规范性附录）</div>
              <div>老年人能力评估基本信息表</div>
              <div>
                A.1 评估基本信息表
              </div>
              <table>
                <tr>
                  <td>A.1.1 评估编号</td>
                  <td>
                    <el-input placeholder="请输入内容"></el-input>
                    <el-input  placeholder="请输入内容"></el-input>
                  </td>
                </tr>
              </table>
            </div>
            <div id="A2" class="evaluate-tab">A2</div>
            <div id="A3" class="evaluate-tab">A3</div>
            <div id="B1" class="evaluate-tab">B1</div>
            <div id="A2" class="evaluate-tab">B2</div>
            <div id="B3" class="evaluate-tab">B3</div>
            <div id="B4" class="evaluate-tab">B4</div>
          </div>
        </div>
      </div>
      <div class="save">
         <el-button type="primary" @click="print">暂存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {
  mounted () {
    // document.getElementById('center-wrap').style.height = document.body.clientHeight || document.documentElement.clientHeight
  },
  methods: {
    print () {
      console.log(333)
      // 根据div标签ID拿到div中的局部内容
      const bdhtml = window.document.body.innerHTML
      var jubuData = document.getElementById('print').innerHTML
      // // 把获取的 局部div内容赋给body标签, 相当于重置了 body里的内容
      window.document.body.innerHTML = jubuData
      // 调用打印功能
      window.print()
      window.document.body.innerHTML = bdhtml// 重新给页面内容赋值；
      // 重新赋值之后 事件会失效！！！
      console.log(bdhtml, 'dddddd')
      location.reload()
    }
  }
}
</script>
