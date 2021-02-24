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
        <div class="center" id="print">
          <div class="tabs">
            <!-- A1 评估基本信息表 -->
            <div id="A1" class="evaluate-tab">
              <div class="page-top">MZ/T 039—2013</div>
              <div class="h1-title">附 录 A</div>
              <div class="title-desc">（规范性附录）</div>
              <div class="subtitle">老年人能力评估基本信息表</div>
              <div class="table-wrap">
                <div class="table-title">
                  <span class="table-num">A.1 </span>评估基本信息表
                </div>
                <table class="evaluate-table">
                  <tr>
                    <td class="question">
                      <span class="table-num">A.1.1</span>评估编号
                    </td>
                    <td>
                      <continueInput
                        v-model="A1.evaluateNum"
                        :inputNums="6"
                        :disabled="true"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="question">
                      <span class="table-num">A.1.2</span> 评估基准日期
                    </td>
                    <td>
                      <div class="evaluate-date">
                        <continueInput
                          v-model="A1.evaluateNum"
                          :inputNums="4"
                        />
                        <div class="text">年</div>
                        <continueInput
                          v-model="A1.evaluateNum"
                          :inputNums="2"
                        />
                        <div class="text">月</div>
                        <continueInput
                          v-model="A1.evaluateNum"
                          :inputNums="2"
                        />
                        <div class="text">日</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question">
                      <span class="table-num">A.1.3</span> 评估原因
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="A1.evaluateReason"
                          class="radio-group"
                        >
                          <el-radio :label="1">1接受服务前初评</el-radio>
                          <el-radio :label="6">2接受服务后的常规评估</el-radio>
                          <el-radio :label="9"
                            >3状况发生变化后的即时评估</el-radio
                          >
                          <el-radio :label="4"
                            >4因评估结果有疑问进行的复评</el-radio
                          >
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="A1.evaluateReason"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- A2 被评估者的基本信息表-->
            <div id="A2" class="evaluate-tab">
              <div class="table-wrap">
                <div class="table-title">
                  <span class="table-num">A.2 </span>被评估者的基本信息表
                </div>
                <table class="evaluate-table">
                  <tr>
                    <td class="question">
                      <span class="table-num">A.2.1</span>姓名
                    </td>
                    <td>
                      <input type="text" class="input-text">
                    </td>
                  </tr>
                  <tr>
                    <td class="question">
                      <span class="table-num">A.2.2</span> 性别
                    </td>
                    <td>
                      <div class="evaluate-date">
                        <continueInput
                          v-model="A1.evaluateNum"
                          :inputNums="4"
                        />
                        <div class="text">年</div>
                        <continueInput
                          v-model="A1.evaluateNum"
                          :inputNums="2"
                        />
                        <div class="text">月</div>
                        <continueInput
                          v-model="A1.evaluateNum"
                          :inputNums="2"
                        />
                        <div class="text">日</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question">
                      <span class="table-num">A.1.3</span> 评估原因
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="A1.evaluateReason"
                          class="radio-group"
                        >
                          <el-radio :label="1">1接受服务前初评</el-radio>
                          <el-radio :label="6">2接受服务后的常规评估</el-radio>
                          <el-radio :label="9"
                            >3状况发生变化后的即时评估</el-radio
                          >
                          <el-radio :label="4"
                            >4因评估结果有疑问进行的复评</el-radio
                          >
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="A1.evaluateReason"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
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
import continueInput from '@/components/common/continue-input.vue'
export default {
  components: {
    continueInput
  },
  data () {
    return {
      A1: {
        evaluateNum: '123456',
        evaluateReason: 1
      }
    }
  },
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
      window.document.body.innerHTML = bdhtml // 重新给页面内容赋值；
      // 重新赋值之后 事件会失效！！！
      console.log(bdhtml, 'dddddd')
      // location.reload()
    }
  }
}
</script>
