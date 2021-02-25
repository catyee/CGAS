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
                        v-model="evaluateData.A_1_1"
                        :inputNums="6"
                        :disabled="true"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="question">
                      <span class="table-num">A.1.2</span>评估基准日期
                    </td>
                    <td>
                      <div class="evaluate-date">
                        <continueInput
                          v-model="A1EvaluateYear"
                          :inputNums="4"
                          :disabled="true"
                        />
                        <div class="text">年</div>
                        <continueInput
                          v-model="A1EvaluateMonth"
                          :inputNums="2"
                          :disabled="true"
                        />
                        <div class="text">月</div>
                        <continueInput
                          v-model="A1EvaluateDay"
                          :inputNums="2"
                          :disabled="true"
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
                          v-model="evaluateData.A_1_3"
                          class="radio-group"
                        >
                          <el-radio :label="1">1接受服务前初评</el-radio>
                          <el-radio :label="2">2接受服务后的常规评估</el-radio>
                          <el-radio :label="3"
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
                            v-model="evaluateData.A_1_3"
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
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.1</span>姓名
                    </td>
                    <td>
                      <input type="text" class="input-text" v-model="evaluateData.A_2_1" />
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.2</span>性别
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group v-model="evaluateData.A_2_2" class="radio-group">
                          <el-radio :label="1">1男</el-radio>
                          <el-radio :label="2">2女</el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_2"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.3</span> 出生日期
                    </td>
                    <td>
                      <div class="evaluate-date">
                        <continueInput
                          v-model="A1bornDateYear"
                          :inputNums="4"
                          :disabled="true"
                        />
                        <div class="text">年</div>
                        <continueInput
                          v-model="A1bornDateMonth"
                          :inputNums="2"
                          :disabled="true"
                        />
                        <div class="text">月</div>
                        <continueInput
                          v-model="A1bornDateDay"
                          :inputNums="2"
                          :disabled="true"
                        />
                        <div class="text">日</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.4</span> 身份证号
                    </td>
                    <td>
                      <continueInput v-model="evaluateData.A_2_4" :inputNums="18" />
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.5</span> 社保卡号
                    </td>
                    <td>
                      <continueInput
                        v-model="evaluateData.A_2_5"
                        :inputNums="9"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.6</span> 民族
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_6.value"
                          class="radio-group"
                        >
                          <el-radio :label="1">1汉族</el-radio>
                          <el-radio :label="2">
                            <span>2少数民族</span>
                            <radioInput
                              :radioValue="evaluateData.A_2_6.value"
                              :type="2"
                              v-model="evaluateData.A_2_6.text"
                            ></radioInput>
                            <!-- <input
                              type="text"
                              class="input-text"
                              v-model="A1.nation.text"
                            /> -->
                          </el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_6.value"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.7</span> 文化程度
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_7"
                          class="radio-group"
                        >
                          <el-radio :label="1">1文盲</el-radio>
                          <el-radio :label="2"> 2小学 </el-radio>
                          <el-radio :label="3"> 3初中 </el-radio>
                          <el-radio :label="4"> 4高中/技校/中专 </el-radio>
                          <el-radio :label="5"> 5大学专科及以上 </el-radio>
                          <el-radio :label="6"> 6不详 </el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_7"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.8</span> 宗教信仰
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_8.value"
                          class="radio-group"
                        >
                          <el-radio :label="0">0无</el-radio>
                          <el-radio :label="1">
                            <span>1有</span>
                            <radioInput
                              :radioValue="evaluateData.A_2_8.value"
                              :type="1"
                              v-model="evaluateData.A_2_8.text"
                            ></radioInput>
                          </el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_8.value"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.9</span>婚姻状况
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_9"
                          class="radio-group"
                        >
                          <el-radio :label="1">1未婚</el-radio>
                          <el-radio :label="2">2已婚</el-radio>
                          <el-radio :label="3">3丧偶</el-radio>
                          <el-radio :label="4">4离婚</el-radio>
                          <el-radio :label="5">5未说明的婚姻状况</el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_9"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.10</span>居住情况
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_10"
                          class="radio-group"
                        >
                          <el-radio :label="1">1独居</el-radio>
                          <el-radio :label="2">2与配偶/伴侣居住</el-radio>
                          <el-radio :label="3">3与子女居住</el-radio>
                          <el-radio :label="4">4与父母居住</el-radio>
                          <el-radio :label="5">5与兄弟姐妹居住</el-radio>
                          <el-radio :label="6">6与其他亲属居住</el-radio>
                          <el-radio :label="7">7与非亲属关系的人居住</el-radio>
                          <el-radio :label="8">8养老机构</el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_10"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.11</span>医疗费用支付方式
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_11.value"
                          class="radio-group"
                        >
                          <el-radio :label="1">1城镇职工基本医疗保险</el-radio>
                          <el-radio :label="2">2城镇居民基本医疗保险</el-radio>
                          <el-radio :label="3">3新型农村合作医疗</el-radio>
                          <el-radio :label="4">4贫困求助</el-radio>
                          <el-radio :label="5">5商业医疗保险</el-radio>
                          <el-radio :label="6">6全公费</el-radio>
                          <el-radio :label="7">7全自费</el-radio>
                          <el-radio :label="8">
                            <span>8其他</span>
                            <radioInput
                              :radioValue="evaluateData.A_2_11.value"
                              :type="2"
                              v-model="evaluateData.A_2_11.text"
                            ></radioInput>
                          </el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_11.value"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.12</span>经济来源
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_12.value"
                          class="radio-group"
                        >
                          <el-radio :label="1">1退休金/养老金</el-radio>
                          <el-radio :label="2">2子女补贴</el-radio>
                          <el-radio :label="3">3亲友资助</el-radio>
                          <el-radio :label="4">
                            <span>4其他补贴</span>
                            <radioInput
                              :radioValue="evaluateData.A_2_12.value"
                              :type="2"
                              v-model="evaluateData.A_2_12.text"
                            ></radioInput>
                          </el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_12.value"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- 疾病诊断 -->
                  <!-- 痴呆 -->
                  <tr>
                    <td class="question1" rowspan="3">
                      <span class="table-num">A.2.13</span>疾病诊断
                    </td>
                    <td class="question1">
                      <span class="table-num">A.2.13.1</span>痴呆
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_13_1"
                          class="radio-group"
                        >
                          <el-radio :label="0">0无</el-radio>
                          <el-radio :label="1">1轻度</el-radio>
                          <el-radio :label="2">2中度</el-radio>
                          <el-radio :label="3">3重度</el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_13_1"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- 精神疾病 -->
                  <tr>
                    <td class="question1">
                      <span class="table-num">A.2.13.2</span>精神疾病
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_13_2"
                          class="radio-group"
                        >
                          <el-radio :label="0">0无</el-radio>
                          <el-radio :label="1">1精神分裂症</el-radio>
                          <el-radio :label="2">2双相情感障碍</el-radio>
                          <el-radio :label="3">3偏执性精神障碍</el-radio>
                          <el-radio :label="4">分裂情感性障碍</el-radio>
                          <el-radio :label="5">癫痫所致精神障碍</el-radio>
                          <el-radio :label="6"
                            >精神发育迟滞伴发精神障碍</el-radio
                          >
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_13_2"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- 慢性疾病 -->
                  <tr>
                    <td class="question1">
                      <span class="table-num">A.2.13.2</span>慢性疾病
                    </td>
                    <td>
                      <input
                        type="text"
                        class="input-text"
                        v-model="evaluateData.A_2_13_3"
                      />
                    </td>
                  </tr>

                  <!-- 近30天内意外事件 -->
                  <!-- 跌倒 -->
                  <tr>
                    <td class="question1" rowspan="5">
                      <span class="table-num">A.2.14</span>近30天内意外事件
                    </td>
                    <td class="question1">
                      <span class="table-num">A.2.14.1</span>跌倒
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_14_1"
                          class="radio-group"
                        >
                          <el-radio :label="0">0无</el-radio>
                          <el-radio :label="1">1发生过1次</el-radio>
                          <el-radio :label="2">2发生过2次</el-radio>
                          <el-radio :label="3">3发生过3次及以上</el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_14_1"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- 走失 -->
                  <tr>
                    <td class="question1">
                      <span class="table-num">A.2.14.2</span>走失
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_14_2"
                          class="radio-group"
                        >
                          <el-radio :label="0">0无</el-radio>
                          <el-radio :label="1">1发生过1次</el-radio>
                          <el-radio :label="2">2发生过2次</el-radio>
                          <el-radio :label="3">3发生过3次及以上</el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_14_2"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- 噎食 -->
                  <tr>
                    <td class="question1">
                      <span class="table-num">A.2.14.3</span>噎食
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_14_3"
                          class="radio-group"
                        >
                          <el-radio :label="0">0无</el-radio>
                          <el-radio :label="1">1发生过1次</el-radio>
                          <el-radio :label="2">2发生过2次</el-radio>
                          <el-radio :label="3">3发生过3次及以上</el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_14_3"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- 自杀 -->
                  <tr>
                    <td class="question1">
                      <span class="table-num">A.2.14.4</span>自杀
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_14_4"
                          class="radio-group"
                        >
                          <el-radio :label="0">0无</el-radio>
                          <el-radio :label="1">1发生过1次</el-radio>
                          <el-radio :label="2">2发生过2次</el-radio>
                          <el-radio :label="3">3发生过3次及以上</el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_2_14_4"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <!-- 其他 -->
                  <tr>
                    <td class="question1">
                      <span class="table-num">A.2.14.5</span>其他
                    </td>
                    <td>
                      <input
                        type="text"
                        class="input-text"
                        v-model="evaluateData.A_2_14_5"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- A3 信息提供者及联系人信息表 -->
            <div id="A3" class="evaluate-tab">
              <div class="table-wrap">
                <div class="table-title">
                  <span class="table-num">A.3 </span>信息提供者及联系人信息表
                </div>
                <table class="evaluate-table">
                  <tr>
                    <td class="question">
                      <span class="table-num">A.3.1</span>信息提供者的姓名
                    </td>
                    <td>
                      <input type="text" class="input-text" v-model="evaluateData.A_3_1" />
                    </td>
                  </tr>
                  <tr>
                    <td class="question">
                      <span class="table-num">A.3.2</span>信息提供者与老人的关系
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_3_2.value"
                          class="radio-group"
                        >
                          <el-radio :label="1">1配偶</el-radio>
                          <el-radio :label="2">2子女</el-radio>
                          <el-radio :label="3">3其他亲属</el-radio>
                          <el-radio :label="4">4雇佣照顾者</el-radio>
                          <el-radio :label="5">
                            <span>5其他</span>
                            <radioInput
                              :radioValue="evaluateData.A_3_2.value"
                              :type="2"
                              v-model="evaluateData.A_3_2.text"
                            ></radioInput>
                          </el-radio>
                        </el-radio-group>
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="evaluateData.A_3_2.value"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                   <tr>
                    <td class="question">
                      <span class="table-num">A.3.3</span>联系人姓名
                    </td>
                    <td>
                      <input type="text" class="input-text" v-model="evaluateData.A_3_3" />
                    </td>
                  </tr>
                   <tr>
                    <td class="question">
                      <span class="table-num">A.3.4</span>联系人电话
                    </td>
                    <td>
                      <input type="text" class="input-text" v-model="evaluateData.A_3_4" />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="B1" class="evaluate-tab">
              <div class="page-top">MZ/T 039—2013</div>
              <div class="h1-title">附 录 B</div>
              <div class="title-desc">（规范性附录）</div>
              <div class="subtitle">老年人能力评估表</div>
              <div class="table-wrap">
                <div class="table-title">
                  <span class="table-num">B.1 </span>日常生活活动评估表
                </div>
                <!-- B1.1 -->
                <table class="evaluate-table">
                  <tr>
                    <td class="question" rowspan="3">
                      <span class="table-num bold">B.1.1进食:</span
                      >指用餐具将食物由容器送到口中、咀嚼、吞咽等过程
                    </td>
                    <td class="question center" rowspan="3">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_1"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_1" label="10"
                        >10
                        分，可独立进食（在合理的时间内独立进食准备好的食物）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_1" label="5"
                        >5 分，
                        需部分帮助（进食过程中需要一定帮助，如协助把持餐具）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_1" label="0"
                        >0 分，
                        需极大帮助或完全依赖他人，或有留置营养管</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.2 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="2">
                      <span class="table-num bold">B.1.2 洗澡</span>
                    </td>
                    <td class="question center" rowspan="2">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_2"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_2" label="5"
                        >5 分， 准备好洗澡水后，可自己独立完成洗澡过程</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_2" label="0"
                        >0 分， 在洗澡过程中需他人帮助</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.3 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="2">
                      <span class="table-num bold">B.1.3 修饰：</span
                      >指洗脸、刷牙、 梳头、刮脸等
                    </td>
                    <td class="question center" rowspan="2">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_3"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_3" label="5"
                        >5 分， 可自己独立完成</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_3" label="0"
                        >0 分， 需他人帮助</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.4 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="3">
                      <span class="table-num bold">B.1.4 穿衣：</span
                      >指穿脱衣服、系 扣、拉拉链、穿 脱鞋袜、系鞋带
                    </td>
                    <td class="question center" rowspan="3">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_4"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_4" label="10"
                        >10 分，可独立完成</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_4" label="5"
                        >5 分，需部分帮助（能自己穿脱，但需他人帮助整理衣物、系扣/鞋带、拉拉链）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_4" label="0"
                        >0 分， 需极大帮助或完全依赖他人</el-radio
                      >
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="A2" class="evaluate-tab"></div>
            <div id="B3" class="evaluate-tab"></div>
            <div id="B4" class="evaluate-tab"></div>
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
import { getYearOrMonthOrDay } from '@/utils/dateUtil.js'
import continueInput from '@/components/common/continue-input.vue'
import radioInput from '@/components/common/radio-input.vue'
export default {
  components: {
    continueInput,
    radioInput
  },
  data () {
    return {
      A1: {
        // A.1
        evaluateNum: '123456', // 评估编号
        date: '2011-2-22', // 评估日期
        // year: '', // 根据评估日期解析出的年
        // month: '', // 根据评估日期解析出的月
        // day: '', // 根据评估日期解析出的日
        evaluateReason: 1, // 评估原因
        // A.2
        name: '', // 被评估者的姓名
        sex: 1, // 被评估者的性别
        bornDate: '2000-12-12', // 被评估者的出生日期
        idCard: '', // 被评估者的身份证号
        socialSecurity: '', // 社保卡号
        nation: {
          // 民族
          type: 2,
          text: '壮族'
        },
        education: 3, // 文化程度
        religion: {
          // 宗教信仰
          type: 1,
          text: '佛教'
        },
        marriage: 1, // 婚姻状况
        liveSituation: 8, // 居住情况
        medicalPayments: {
          // 医疗费用支出
          type: 8,
          text: '免费'
        },
        income: {
          // 经济来源
          type: 4,
          text: '自己收入'
        },
        disease: {
          // 疾病诊断
          cd: 0, // 痴呆
          jsjb: 0, // 精神疾病
          mxjb: '' // 慢性疾病
        },
        // 近30天意外事件
        accident: {
          dd: 0, // 跌倒
          lose: 0, // 走失
          ys: 1, // 噎食
          zs: 0, // 自杀
          other: '' // 其他
        }
      },
      A3: {
        // 信息提供者姓名
        name: '',
        // 信息提供者与老人的关系
        relation: {
          type: 5,
          text: '亲戚'
        },
        // 联系人的姓名
        lxrName: '',
        // 联系人电话
        lxrPhone: ''
      },
      B1: {
        // 进食
        eat: '5',
        // 洗澡
        bath: '0',
        // 修饰
        clear: '5',
        // 穿衣
        wear: '5'
      },
      evaluateData: {
        // A1 评估基本信息表
        A_1_1: '123456', // 评估编号
        A_1_2: '2011-2-12', // 评估基准日期
        A_1_3: 3, // 评估原因
        // A2被评估者的基本信息表
        A_2_1: '测试', // 姓名
        A_2_2: 2, // 性别
        A_2_3: '2020-12-12', // 出生日期
        A_2_4: '370181199208176522', // 身份证号
        A_2_5: '123456789', // 社保卡号
        A_2_6: {
          value: 2,
          text: '白族'
        }, // 民族
        A_2_7: 4, // 文化程度
        A_2_8: {
          value: 1,
          text: '道教'
        }, // 宗教信仰
        A_2_9: 2, // 婚姻状况
        A_2_10: 2, // 居住情况
        A_2_11: { // todo！！！// 医疗费用支出
          value: 8,
          text: '免费'
        },
        A_2_12: { // todo！！！// 经济来源
          value: 4,
          text: '自己赚钱'
        },
        // 疾病诊断
        A_2_13_1: 2, // 痴呆
        A_2_13_2: 2, // 精神疾病
        A_2_13_3: 2, // 慢性疾病
        // 近30天内意外事件
        A_2_14_1: 2, // 跌倒
        A_2_14_2: 1, // 走失
        A_2_14_3: 2, // 噎食
        A_2_14_4: 2, // 自杀
        A_2_14_5: '其他', // 其他
        // A3信息提供者及联系人信息表
        A_3_1: '姓名', // 信息提供者的姓名
        A_3_2: { // 信息提供者与老人的关系
          value: 5,
          text: '亲戚'
        },
        A_3_3: '联系人姓名', // 联系人姓名
        A_3_4: '13120424213', // 联系人电话
        // B1日常生活活动评估表
        B_1_1: '10', // 进食
        B_1_2: '5', // 洗澡
        B_1_3: '0', // 修饰
        B_1_4: '10', // 穿衣
        B_1_5: '10', // 大便控制
        B_1_6: '10', // 小便控制
        B_1_7: '10', // 如厕
        B_1_8: '15', // 床椅转移
        B_1_9: '15', // 平地行走
        B_1_10: '10', // 上下楼梯
        B_1_11: '', // 日常生活 活动总分
        B_1_12: '0', // 日常生活 活动分级
        // B2 精神状态评估表
        B_2_1: { // 认知功能测验
          img: '', // 测验图片
          text1: '',
          text2: '',
          text3: '',
          score: '2'
        },
        B_2_2: '2', // 攻击行为
        B_2_3: '2', // 抑郁症状
        B_2_4: '', // 精神状态总分
        B_2_: '', // 精神状态分级

        // 感知觉与沟通评估表
        B_3_1: '2', // 意识水平
        B_3_2: '2', // 视力
        B_3_3: '2', // 听力
        B_3_4: '2', // 沟通交流
        B_3: '', // 感知觉与沟通分级
        // B4 社会参与评估表
        B_4_1: '0', // 生活能力
        B_4_2: '3', // 工作能力
        B_4_3: '2', // 时间/空间定向
        B_4_4: '2', // 人物定向
        B_4_5: '2', // 社会交往能力
        B_4_6: '2', // 社会参与总分
        B_4: '2' // 社会参与分级
      }
    }
  },
  computed: {
    // 根据评估日期解析出的年
    A1EvaluateYear: function () {
      return getYearOrMonthOrDay(this.evaluateData.A_1_2, 'y').toString()
    },
    // 根据评估日期解析出的月
    A1EvaluateMonth: function () {
      return getYearOrMonthOrDay(this.evaluateData.A_1_2, 'm').toString()
    },
    // 根据评估日期解析出的日
    A1EvaluateDay: function () {
      return getYearOrMonthOrDay(this.evaluateData.A_1_2, 'd').toString()
    },
    // 根据被评估者出生日期解析出的年
    A1bornDateYear: function () {
      return getYearOrMonthOrDay(this.evaluateData.A_2_3, 'y').toString()
    },
    // 根据被评估者出生日期解析出的月
    A1bornDateMonth: function () {
      return getYearOrMonthOrDay(this.evaluateData.A_2_3, 'm').toString()
    },
    // 根据被评估者出生日期解析出的日
    A1bornDateDay: function () {
      return getYearOrMonthOrDay(this.evaluateData.A_2_3, 'd').toString()
    }
  },
  mounted () {
    // document.getElementById('center-wrap').style.height = document.body.clientHeight || document.documentElement.clientHeight
  },
  methods: {
    print () {
      console.log(JSON.stringify(this.evaluateData), 'A1111111111')
      // console.log(333)
      // // 根据div标签ID拿到div中的局部内容
      // const bdhtml = window.document.body.innerHTML
      // var jubuData = document.getElementById('print').innerHTML
      // // // 把获取的 局部div内容赋给body标签, 相当于重置了 body里的内容
      // window.document.body.innerHTML = jubuData
      // // 调用打印功能
      // window.print()
      // window.document.body.innerHTML = bdhtml // 重新给页面内容赋值；
      // // 重新赋值之后 事件会失效！！！
      // console.log(bdhtml, 'dddddd')
      // location.reload()
    }
  }
}
</script>
