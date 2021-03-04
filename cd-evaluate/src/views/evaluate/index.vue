<template>
  <div class="evaluate pt-16 pl-27">
    <div class="left" id="left">
      <div class="flex pt-16">
        <div class="title-line"></div>
        <span class="pl-4 f14">评估</span>
      </div>
      <div class="hash-list">
        <a
          href="#A1"
          class="pt-30"
          :class="activeClass === 0 ? 'active' : ''"
          @click="getActiveClass(0)"
          >A.1评估基本信息表</a
        >
        <a
          href="#A2"
          :class="activeClass === 1 ? 'active' : ''"
          @click="getActiveClass(1)"
          >A.2被评估者的基本信息表</a
        >
        <a
          href="#A3"
          :class="activeClass === 2 ? 'active' : ''"
          @click="getActiveClass(2)"
          >A.3信息提供者及联系人信息表</a
        >
        <a
          href="#B1"
          :class="activeClass === 3 ? 'active' : ''"
          @click="getActiveClass(3)"
          >B.1日常生活活动评估表</a
        >
        <a
          href="#B2"
          :class="activeClass === 4 ? 'active' : ''"
          @click="getActiveClass(4)"
          >B.2 精神状态评估表</a
        >
        <a
          href="#B3"
          :class="activeClass === 5 ? 'active' : ''"
          @click="getActiveClass(5)"
          >B.3 感知觉与沟通评估表</a
        >
        <a
          href="#B4"
          :class="activeClass === 6 ? 'active' : ''"
          @click="getActiveClass(6)"
          >B.4 社会参与评估表</a
        >
        <a
          href="#C"
          :class="activeClass === 7 ? 'active' : ''"
          @click="getActiveClass(7)"
          >C 老年人能力评估报告</a
        >
      </div>
    </div>
     <div style="display:none">
        <exportEvaluate :evaluateData="evaluateData" id="evaluate"></exportEvaluate></div>
    <div class="wrap" @scroll="scrollEvent">
      <div class="center-wrap mt-16">
        <div class="center" id="print">
          <div class="tabs" id="pdfDom">
            <!-- A1 评估基本信息表 -->
            <div id="A1" class="evaluate-tab table-container">
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
            <div id="A2" class="evaluate-tab table-container">
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
                      <input
                        type="text"
                        class="input-text"
                        v-model="evaluateData.A_2_1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.2</span>性别
                    </td>
                    <td>
                      <div class="choices">
                        <el-radio-group
                          v-model="evaluateData.A_2_2"
                          class="radio-group"
                        >
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
                        <img
                          src="@/assets/date.svg"
                          class="pl-10"
                          alt="请选择日期"
                          @click="chooseBornDate"
                          v-popover:datePicker
                        />
                        <el-date-picker
                          ref="datePicker"
                          style="display: none"
                          v-model="evaluateData.A_2_3"
                          type="date"
                          placeholder="选择日期"
                        >
                        </el-date-picker>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question" colspan="2">
                      <span class="table-num">A.2.4</span> 身份证号
                    </td>
                    <td>
                      <continueInput
                        v-model="evaluateData.A_2_4"
                        :inputNums="18"
                      />
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
                        <el-checkbox-group
                          v-model="evaluateData.A_2_11.value"
                          class="radio-group"
                        >
                          <el-checkbox :label="1"
                            >1城镇职工基本医疗保险</el-checkbox
                          >
                          <el-checkbox :label="2"
                            >2城镇居民基本医疗保险</el-checkbox
                          >
                          <el-checkbox :label="3"
                            >3新型农村合作医疗</el-checkbox
                          >
                          <el-checkbox :label="4">4贫困求助</el-checkbox>
                          <el-checkbox :label="5">5商业医疗保险</el-checkbox>
                          <el-checkbox :label="6">6全公费</el-checkbox>
                          <el-checkbox :label="7">7全自费</el-checkbox>
                          <el-checkbox :label="8">
                            <span>8其他</span>
                            <radioInput
                              :radioValue="evaluateData.A_2_11.value"
                              :type="2"
                              v-model="evaluateData.A_2_11.text"
                            ></radioInput>
                          </el-checkbox>
                        </el-checkbox-group>
                        <div class="right">
                          <div
                            v-for="(i, index) in evaluateData.A_2_11.value"
                            :key="index"
                          >
                            <input
                              type="text"
                              class="input"
                              :value="i"
                              readonly
                            />
                            <span
                              v-if="
                                evaluateData.A_2_11.value.length > 1 &&
                                index !== evaluateData.A_2_11.value.length - 1
                              "
                              >/
                            </span>
                          </div>
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
                        <el-checkbox-group
                          v-model="evaluateData.A_2_12.value"
                          class="radio-group"
                        >
                          <el-checkbox :label="1">1退休金/养老金</el-checkbox>
                          <el-checkbox :label="2">2子女补贴</el-checkbox>
                          <el-checkbox :label="3">3亲友资助</el-checkbox>
                          <el-checkbox :label="4">
                            <span>4其他补贴</span>
                            <radioInput
                              :radioValue="evaluateData.A_2_12.value"
                              :type="2"
                              v-model="evaluateData.A_2_12.text"
                            ></radioInput>
                          </el-checkbox>
                        </el-checkbox-group>
                        <div class="right">
                          <div
                            v-for="(i, index) in evaluateData.A_2_12.value"
                            :key="index"
                          >
                            <input
                              type="text"
                              class="input"
                              :value="i"
                              readonly
                            /><span
                              v-if="
                                evaluateData.A_2_12.value.length > 1 &&
                                index !== evaluateData.A_2_12.value.length - 1
                              "
                              >/
                            </span>
                          </div>
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
            <div id="A3" class="evaluate-tab table-container">
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
                      <input
                        type="text"
                        class="input-text"
                        v-model="evaluateData.A_3_1"
                      />
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
                      <input
                        type="text"
                        class="input-text"
                        v-model="evaluateData.A_3_3"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="question">
                      <span class="table-num">A.3.4</span>联系人电话
                    </td>
                    <td>
                      <input
                        type="text"
                        class="input-text"
                        v-model="evaluateData.A_3_4"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="B1" class="evaluate-tab table-container">
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
                      <el-radio v-model="evaluateData.B_1_1" :label="10"
                        >10
                        分，可独立进食（在合理的时间内独立进食准备好的食物）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_1" :label="5"
                        >5 分，
                        需部分帮助（进食过程中需要一定帮助，如协助把持餐具）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_1" :label="0"
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
                      <el-radio v-model="evaluateData.B_1_2" :label="5"
                        >5 分， 准备好洗澡水后，可自己独立完成洗澡过程</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_2" :label="0"
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
                      <el-radio v-model="evaluateData.B_1_3" :label="5"
                        >5 分， 可自己独立完成</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_3" :label="0"
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
                      <el-radio v-model="evaluateData.B_1_4" :label="10"
                        >10 分，可独立完成</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_4" :label="5"
                        >5
                        分，需部分帮助（能自己穿脱，但需他人帮助整理衣物、系扣/鞋带、拉拉链）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_4" :label="0"
                        >0 分， 需极大帮助或完全依赖他人</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.5 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="3">
                      <span class="table-num bold">B.1.4 大便控制</span>
                    </td>
                    <td class="question center" rowspan="3">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_5"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_5" :label="10"
                        >10 分，可控制大便</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_5" :label="5"
                        >5 分， 偶尔失控（每周＜1 次），或需要他人提示</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_5" :label="0"
                        >0 分， 完全失控</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.6 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="3">
                      <span class="table-num bold">B.1.6 小便控制</span>
                    </td>
                    <td class="question center" rowspan="3">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_6"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_6" :label="10"
                        >10 分，可控制小便</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_6" :label="5"
                        >5 分， 偶尔失控（每天＜1 次，但每周＞1
                        次），或需要他人提示</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_6" :label="0"
                        >0 分， 完全失控，或留置导尿管</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.7 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="3">
                      <span class="table-num bold">B.1.7 如厕：</span>
                      包括去厕所、解 开衣裤、擦净、 整理衣裤、冲水
                    </td>
                    <td class="question center" rowspan="3">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_7"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_7" :label="10"
                        >10 分，可独立完成</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_7" :label="5"
                        >5 分，
                        需部分帮助（需他人搀扶去厕所、需他人帮忙冲水或整理衣裤等）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_7" :label="0"
                        >0 分， 需极大帮助或完全依赖他人</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.8 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="4">
                      <span class="table-num bold">B.1.8 床椅转移</span>
                    </td>
                    <td class="question center" rowspan="4">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_8"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_8" :label="15"
                        >15 分，可独立完成</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_8" :label="10"
                        >10 分，需部分帮助（需他人搀扶或使用拐杖）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_8" :label="5"
                        >5 分，
                        需极大帮助（较大程度上依赖他人搀扶和帮助）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_8" :label="0"
                        >0 分， 完全依赖他人</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.9 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="4">
                      <span class="table-num bold">B.1.9 平地行走</span>
                    </td>
                    <td class="question center" rowspan="4">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_9"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_9" :label="15"
                        >15 分，可独立在平地上行走 45m</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_9" :label="10"
                        >10
                        分，需部分帮助（因肢体残疾、平衡能力差、过度衰弱、视力等问题，在一定
                        程度上需他人地搀扶或使用拐杖、助行器等辅助用具）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_9" :label="5"
                        >5 分，
                        需极大帮助（因肢体残疾、平衡能力差、过度衰弱、视力等问题，在较大
                        程度上依赖他人搀扶，或坐在轮椅上自行移动）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_9" :label="0"
                        >0 分， 完全依赖他人</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.10 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="3">
                      <span class="table-num bold">B.1.10 上下楼梯</span>
                    </td>
                    <td class="question center" rowspan="3">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_1_10"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_1_10" :label="10"
                        >10 分，可独立上下楼梯（连续上下 10-15
                        个台阶）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_10" :label="5"
                        >5 分，
                        需部分帮助（需他人搀扶，或扶着楼梯、使用拐杖等）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_1_10" :label="0"
                        >0 分， 需极大帮助或完全依赖他人</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B1.11 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold"
                        >B.1．11 日常生活 活动总分</span
                      >
                    </td>
                    <td class="question center">
                      <input
                        type="text"
                        class="input"
                        v-model="B_1_11"
                        readonly
                      />
                      分
                    </td>
                    <td>上述10个项目得分之和</td>
                  </tr>
                </table>
                <!-- B1 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold">B.1 日常生活活动分级</span>
                    </td>
                    <td class="question center">
                      <input
                        type="text"
                        class="input"
                        v-model="B_1"
                        readonly
                      />
                      级
                    </td>
                    <td>
                      <div class="line22">0 能力完好：总分 100 分</div>
                      <div class="line22">1 轻度受损：总分 65-95 分</div>
                      <div class="line22">2 中度受损：总分 45-60 分</div>
                      <div class="line22">3 重度受损：总分≤40 分</div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- B2精神状态评估表 -->
            <div id="B2" class="evaluate-tab table-container">
              <div class="table-wrap">
                <div class="table-title">
                  <span class="table-num">B.2 </span>精神状态评估表
                </div>
                <!-- B2.1 -->
                <table class="evaluate-table">
                  <tr>
                    <td class="question" rowspan="6">
                      <span class="table-num bold">B.2.1 认知功能</span>
                    </td>
                    <td class="question center" rowspan="3">测验</td>
                    <td class="line22">
                      “我说三样东西，请重复一遍，并记住，一会儿会问您”：苹果、手表、国旗
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="line22">
                        (1)画钟测验：“请您在这儿画一个圆形的时钟，在时钟上标出
                        10 点 45 分”
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="line22">
                        (2)回忆词语：“现在请您告诉我，刚才我要您记住的三样东西是什么？
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="question center" rowspan="3">
                      评分
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_2_1.score"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_2_1.score" :label="0"
                        >0
                        分，画钟正确（画出一个闭锁圆，指针位置准确），且能回忆出
                        2-3 个词</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_2_1.score" :label="1"
                        >1
                        分，画钟错误（画的圆不闭锁，或指针位置不准确），或只回忆出
                        0-1 个词</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_2_1.score" :label="2"
                        >2 分，已确诊为认知障碍，如老年痴呆</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B2.2 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="3">
                      <span class="table-num bold">B.2.2 攻击行为</span>
                    </td>
                    <td class="question center" rowspan="3">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_2_2"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_2_2" :label="0"
                        >0
                        分，无身体攻击行为（如打/踢/推/咬/抓/摔东西）和语言攻击行为（如骂人、
                        语言威胁、尖叫）</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_2_2" :label="1"
                        >1
                        分，每月有几次身体攻击行为，或每周有几次语言攻击行为</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_2_2" :label="2"
                        >2
                        分，每周有几次身体攻击行为，或每日有语言攻击行为</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B2.3 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="3">
                      <span class="table-num bold">B.2.3 抑郁症状</span>
                    </td>
                    <td class="question center" rowspan="3">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_2_3"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_2_3" :label="0"
                        >0 分，无</el-radio
                      >
                    </td>
                       </tr>
                   <tr>
                      <td>
                      <el-radio v-model="evaluateData.B_2_3" :label="1"
                        >1 分，情绪低落、不爱说话、不爱梳洗、不爱活动</el-radio
                      >
                    </td>
                   </tr>
                    <tr>
                      <td>
                      <el-radio v-model="evaluateData.B_2_3" :label="2"
                        >2 分，有自杀念头或自杀行为</el-radio
                      >
                    </td>

                    </tr>
                </table>
                <!-- B2.4 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold">B.2.4 精神状 态总分</span>
                    </td>
                    <td class="question center">
                      <input
                        type="text"
                        class="input"
                        v-model="B_2_4"
                        readonly
                      />
                      分
                    </td>
                    <td>上述3个项目得分之和</td>
                  </tr>
                </table>
                <!-- B2 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold">B.2 精神状态 分级</span>
                    </td>
                    <td class="question center">
                      <input
                        type="text"
                        class="input"
                        v-model="B_2"
                        readonly
                      />
                      级
                    </td>
                    <td>
                      <div class="line22">0 能力完好：总分为 0 分</div>
                      <div class="line22">1 轻度受损：总分为 1 分</div>
                      <div class="line22">2 中度受损：总分 2-3 分</div>
                      <div class="line22">3 重度受损：总分 4-6 分</div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- B.3 感知觉与沟通评估表 -->
            <div id="B3" class="evaluate-tab table-container">
              <div class="table-wrap">
                <div class="table-title">
                  <span class="table-num">B.3 </span>感知觉与沟通评估表
                </div>
                <!-- B3.1 -->
                <table class="evaluate-table">
                  <tr>
                    <td class="question" rowspan="4">
                      <span class="table-num bold">B.3.1 意识水平</span>
                    </td>
                    <td class="question center" rowspan="4">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_3_1"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_3_1" :label="0"
                        >0 分，神志清醒，对周围环境警觉</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_1" :label="1"
                        >1
                        分，嗜睡，表现为睡眠状态过度延长。当呼唤或推动其肢体时可唤醒，并能进
                        行正确的交谈或执行指令，停止刺激后又继续入睡</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_1" :label="2"
                        >2
                        分，昏睡，一般的外界刺激不能使其觉醒，给予较强烈的刺激时可有短时的意
                        识清醒，醒后可简短回答提问，当刺激减弱后又很快进入睡眠状态</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_1" :label="3"
                        >3
                        分，昏迷，处于浅昏迷时对疼痛刺激有回避和痛苦表情；处于深昏迷时对刺激
                        无反应（若评定为昏迷，直接评定为重度失能，可不进行以下项目的评估）</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B3.2 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="5">
                      <span class="table-num bold">B.3.2 视力：</span>
                      若平日带老花 镜或近视镜， 应在佩戴眼镜 的情况下评估
                    </td>
                    <td class="question center" rowspan="5">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_3_2"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_3_2" :label="0"
                        >0 分，能看清书报上的标准字体</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_2" :label="1"
                        >1
                        分，能看清楚大字体，但看不清书报上的标准字体</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_2" :label="2">
                        2 分，视力有限，看不清报纸大标题，但能辨认物体</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_2" :label="3"
                        >3
                        分，辨认物体有困难，但眼睛能跟随物体移动，只能看到光、颜色和形状</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_2" :label="4"
                        >4 分，没有视力，眼睛不能跟随物体移动</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B3.3 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="5">
                      <span class="table-num bold">B.3.3 听力：</span>
                      若平时佩戴助 听器，应在佩 戴助听器的情 况下评估
                    </td>
                    <td class="question center" rowspan="5">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_3_3"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_3_3" :label="0"
                        >0
                        分，可正常交谈，能听到电视、电话、门铃的声音</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_3" :label="1"
                        >1 分，在轻声说话或说话距离超过 2 米时听不清</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_3" :label="2">
                        2
                        分，正常交流有些困难，需在安静的环静或大声说话才能听到</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_3" :label="3"
                        >3 分，讲话者大声说话或说话很慢，才能部分听见</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_3" :label="4"
                        >4 分，完全听不见</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B3.4 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="5">
                      <span class="table-num bold">B.3.4 沟通交流:</span>
                      包括非语言沟 通
                    </td>
                    <td class="question center" rowspan="4">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_3_4"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_3_4" :label="0"
                        >0 分，无困难，能与他人正常沟通和交流</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_4" :label="1"
                        >1
                        分，能够表达自己的需要及理解别人的话，但需要增加时间或给予帮助</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_4" :label="2">
                        2
                        分，表达需要或理解有困难，需频繁重复或简化口头表达</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_3_4" :label="3"
                        >3 分，不能表达需要或理解他人的话</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B3 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold">B.3 感知觉与 沟通分级</span>
                    </td>
                    <td class="question center">
                      <input
                        type="text"
                        class="input"
                        v-model="B_3"
                        readonly
                      />
                      级
                    </td>
                    <td>
                      <div class="line22">
                        0 能力完好：意识清醒，且视力和听力评为 0 或 1，沟通评为
                        0
                      </div>
                      <div class="line22">
                        1 轻度受损：意识清醒，但视力或听力中至少一项评为
                        2，或沟通评为 1
                      </div>
                      <div class="line22">
                        2 中度受损：意识清醒，但视力或听力中至少一项评为
                        3，或沟通评为 2； 或嗜睡，视力或听力评定为 3
                        及以下，沟通评定为 2 及以下
                      </div>
                      <div class="line22">
                        3 重度受损：意识清醒或嗜睡，但视力或听力中至少一项评为
                        4，或沟通评为 3； 或昏睡/昏迷
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- B.4 社会参与评估表 -->
            <div id="B4" class="evaluate-tab table-container">
              <div class="table-wrap">
                <div class="table-title">
                  <span class="table-num">B.4 </span>社会参与评估表
                </div>
                <!-- B4.1 -->
                <table class="evaluate-table">
                  <tr>
                    <td class="question" rowspan="5">
                      <span class="table-num bold">B.4.1 生活能力</span>
                    </td>
                    <td class="question center" rowspan="5">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_4_1"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_4_1" :label="0"
                        >0
                        分，除个人生活自理外（如饮食、洗漱、穿戴、二便），能料理家务（如做饭、
                        洗衣）或当家管理事务</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_1" :label="1"
                        >1
                        分，除个人生活自理外，能做家务，但欠好，家庭事务安排欠条</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_1" :label="2"
                        >2
                        分，个人生活能自理；只有在他人帮助下才能做些家务，但质量不好</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_1" :label="3"
                        >3
                        分，个人基本生活事务能自理（如饮食、二便），在督促下可洗漱</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_1" :label="4"
                        >4
                        分，个人基本生活事务（如饮食、二便）需要部分帮助或完全依赖他人帮助</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B4.2 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="5">
                      <span class="table-num bold">B.4.2 工作能力</span>
                    </td>
                    <td class="question center" rowspan="5">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_4_2"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_4_2" :label="0"
                        >0
                        分，原来熟练的脑力工作或体力技巧性工作可照常进行</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_2" :label="1"
                        >1
                        分，原来熟练的脑力工作或体力技巧性工作能力有所下降</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_2" :label="2">
                        2
                        分，原来熟练的脑力工作或体力技巧性工作明显不如以往，部分遗忘</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_2" :label="3"
                        >3
                        分，对熟练工作只有一些片段保留，技能全部遗忘</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_2" :label="4"
                        >4 分，对以往的知识或技能全部磨灭</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B4.3 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="5">
                      <span class="table-num bold"
                        >B.4.3 时 间 / 空 间 定 向</span
                      >
                    </td>
                    <td class="question center" rowspan="5">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_4_3"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_4_3" :label="0"
                        >0
                        分，时间观念（年、月、日、时）清楚；可单独出远门，能很快掌握新环境的
                        方位</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_3" :label="1"
                        >1
                        分，时间观念有些下降，年、月、日清楚，但有时相差几天；可单独来往于近
                        街，知道现住地的名称和方位，但不知回家路线</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_3" :label="2">
                        2
                        分，时间观念较差，年、月、日不清楚，可知上半年或下半年；只能单独在家
                        附近行动，对现住地只知名称，不知道方位</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_3" :label="3"
                        >3
                        分，时间观念很差，年、月、日不清楚，可知上午或下午；只能在左邻右舍间
                        串门，对现住地不知名称和方位</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_3" :label="4"
                        >4 分，无时间观念；不能单独外出</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B4.4 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="5">
                      <span class="table-num bold">B.4.4 人物定向</span>
                    </td>
                    <td class="question center" rowspan="5">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_4_4"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_4_4" :label="0"
                        >0
                        分，知道周围人们的关系，知道祖孙、叔伯、姑姨、侄子侄女等称谓的意义；
                        可分辨陌生人的大致年龄和身份，可用适当称呼</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_4" :label="1"
                        >1
                        分，只知家中亲密近亲的关系，不会分辨陌生人的大致年龄，不能称呼陌生人</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_4" :label="2">
                        2
                        分，只能称呼家中人，或只能照样称呼，不知其关系，不辨辈分</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_4" :label="3"
                        >3
                        分，只认识常同住的亲人，可称呼子女或孙子女，可辨熟人和生人</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_4" :label="4"
                        >4 分，只认识保护人，不辨熟人和生人</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B4.5 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question" rowspan="5">
                      <span class="table-num bold">B.4.5 社会交往能力</span>
                    </td>
                    <td class="question center" rowspan="5">
                      <input
                        type="text"
                        class="input"
                        v-model="evaluateData.B_4_5"
                        readonly
                      />
                      分
                    </td>
                    <td>
                      <el-radio v-model="evaluateData.B_4_5" :label="0"
                        >0
                        分，参与社会，在社会环境有一定的适应能力，待人接物恰当</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_5" :label="1"
                        >1
                        分，能适应单纯环境，主动接触人，初见面时难让人发现智力问题，不能理解
                        隐喻语</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_5" :label="2">
                        2
                        分，脱离社会，可被动接触，不会主动待人，谈话中很多不适词句，容易上当
                        受骗</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_5" :label="3"
                        >3
                        分，勉强可与人交往，谈吐内容不清楚，表情不恰当</el-radio
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <el-radio v-model="evaluateData.B_4_5" :label="4"
                        >4 分，难以与人接触</el-radio
                      >
                    </td>
                  </tr>
                </table>
                <!-- B4.6 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold">B.4.6 社会参 与总分</span>
                    </td>
                    <td class="question center">
                      <input
                        type="text"
                        class="input"
                        v-model="B_4_6"
                        readonly
                      />
                      分
                    </td>
                    <td>上述 5 个项目得分之和</td>
                  </tr>
                </table>
                <!-- B4 -->
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold">B.4 社会参与 分级</span>
                    </td>
                    <td class="question center">
                      <input
                        type="text"
                        class="input"
                        v-model="B_4"
                        readonly
                      />
                      级
                    </td>
                    <td>
                      <div class="line22">0 能力完好：总分 0-2 分</div>
                      <div class="line22">1 轻度受损：总分 3-7 分</div>
                      <div class="line22">2 中度受损：总分 8-13 分</div>
                      <div class="line22">3 重度受损：总分 14-20 分</div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- C 老年人能力评估报告 -->
            <div id="C" class="table-container">
              <div class="h1-title">附 录 C</div>
              <div class="title-desc">（规范性附录）</div>
              <div class="subtitle">老年人能力评估报告</div>
              <div class="table-wrap">
                <table class="evaluate-table">
                  <tr>
                    <td class="question" rowspan="2">
                      <span class="table-num bold">C.1 一级指标 分级</span>
                    </td>
                    <td>
                      <div>
                        <span class="table-num bold">C.1.1 日常生活活动：</span>
                        <input
                          type="text"
                          class="input"
                          v-model="B_1"
                          readonly
                        />级
                      </div>
                    </td>
                    <td>
                      <div class="c-td">
                        <span class="table-num bold">C.1.2 精神状态：</span>
                        <input
                          type="text"
                          class="input"
                          v-model="B_2"
                          readonly
                        />级
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="c-td">
                        <span class="table-num bold">C.1.3 感知觉与沟通：</span>
                        <input
                          type="text"
                          class="input"
                          v-model="B_3"
                          readonly
                        />级
                      </div>
                    </td>
                    <td>
                      <div>
                        <span class="table-num bold">C.1.4 社会参与：</span>
                        <input
                          type="text"
                          class="input"
                          v-model="B_4"
                          readonly
                        />级
                      </div>
                    </td>
                  </tr>
                </table>
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold"
                        >C.2 老年人能 力初步等级</span
                      >
                    </td>
                    <td>
                      <div class="choices">
                          <div class="choice" :class="{'active':C_2=== 0 }">0 能力完好</div>
                          <div class="choice" :class="{'active':C_2=== 1 }">1 轻度失能</div>
                          <div class="choice" :class="{'active':C_2=== 2 }">2 中度失能</div>
                          <div class="choice" :class="{'active':C_2=== 3 }">3 重度失能</div>
                        <!-- <el-radio-group
                          v-model="evaluateData.C_2"
                          class="radio-group"
                        >
                          <el-radio :label="0">0能力完好</el-radio>
                          <el-radio :label="1">1轻度失能</el-radio>
                          <el-radio :label="2">2中度失能</el-radio>
                          <el-radio :label="3">3重度失能</el-radio>
                        </el-radio-group> -->
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="C_2"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold">C.3 等级变更 条款</span>
                    </td>
                    <td>
                      <div>
                        <el-radio v-model="C_3" :label="1"
                          >1
                          有认知障碍/痴呆、精神疾病者，在原有能力级别上提高一个等级；</el-radio
                        >
                      </div>
                      <div>
                        <el-radio v-model="C_3" :label="2"
                          >2 近 30 天内发生过 2
                          次及以上跌倒、噎食、自杀、走失者，在原有能力级别上提高一
                          个等级；</el-radio
                        >
                      </div>
                      <div>
                        <el-radio v-model="C_3" :label="3"
                          >3 处于昏迷状态者，直接评定为重度失能；</el-radio
                        >
                      </div>
                      <div>
                        <el-radio v-model="C_3" :label="4"
                          >4 若初步等级确定为“3 重度失能”，则不考虑上述 1-3
                          中各情况对最终等级的影响， 等级不再提高</el-radio
                        >
                      </div>
                      <div style="text-align: right" class="pb-10">
                        <input
                          type="text"
                          class="input"
                          v-model="C_3"
                          readonly
                        />
                      </div>
                    </td>
                  </tr>
                  <tr></tr>
                </table>
                <table class="evaluate-table no-bt">
                  <tr>
                    <td class="question">
                      <span class="table-num bold"
                        >C.4 老年人能 力最终等级</span
                      >
                    </td>
                    <td>
                      <div class="choices">
                        <div class="choice">0能力完好</div>
                        <div class="choice">1轻度失能</div>
                        <div class="choice">2中度失能</div>
                        <div class="choice">3重度失能</div>
                        <!-- <el-radio-group
                          v-model="evaluateData.C_4"
                          class="radio-group"
                        >
                          <el-radio :label="0">0能力完好</el-radio>
                          <el-radio :label="1">1轻度失能</el-radio>
                          <el-radio :label="2">2中度失能</el-radio>
                          <el-radio :label="3">3重度失能</el-radio>
                        </el-radio-group> -->
                        <div class="right">
                          <input
                            type="text"
                            class="input"
                            v-model="C_4"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
                <table class="evaluate-table">
                  <tr>
                    <td>
                      <div class="sign-box">
                        <div class="sign-input">
                          <div class="inline">评估员签名:</div>
                          <input
                            type="text"
                            class="input-text inline"
                            v-model="evaluateData.C_1_2"
                          />、
                          <input
                            type="text"
                            class="input-text inline"
                            v-model="evaluateData.C_1_2"
                          />
                        </div>
                        <div class="sign-input sign-date">
                          <div class="inline">日期:</div>
                          <input
                            type="text"
                            class="input-text inline"
                            v-model="evaluateData.C_1_2"
                          />年
                          <input
                            type="text"
                            class="input-text inline"
                            v-model="evaluateData.C_1_2"
                          />月
                          <input
                            type="text"
                            class="input-text inline"
                            v-model="evaluateData.C_1_2"
                          />日
                        </div>
                      </div>
                      <div class="sign-box">
                        <div class="sign-input">
                          <div class="inline">信息提供者签名:</div>
                          <input
                            type="text"
                            class="input-text inline"
                            v-model="evaluateData.C_1_2"
                          />
                        </div>
                        <div class="sign-input sign-date">
                          <div class="inline">日期:</div>
                          <input
                            type="text"
                            class="input-text inline"
                            v-model="evaluateData.C_1_2"
                          />年
                          <input
                            type="text"
                            class="input-text inline"
                            v-model="evaluateData.C_1_2"
                          />月
                          <input
                            type="text"
                            class="input-text inline"
                            v-model="evaluateData.C_1_2"
                          />日
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td>
                      <div class="pl-40 pt-20 pb-20">
                        <span class="bold">注：</span
                        >老年人能力初步等级划分标准:
                      </div>
                      <div class="bold pl-10 pb-20">0 能力完好：</div>
                      <div class="pl-40 pb-20">
                        日常生活活动、精神状态、感知觉与沟通分级均为
                        0，社会参与分级为 0 或 1
                      </div>
                      <div class="bold pl-10 pb-20">1 轻度失能：</div>
                      <div class="pl-40 pb-20">
                        <div class="pb-20">
                          日常生活活动、精神状态、感知觉与沟通分级均为
                          0，社会参与分级为 0 或 1
                        </div>
                        <div>
                          或日常生活活动分级为
                          1，精神状态、感知觉与沟通、社会参与中至少有一项的分级为
                          0 或 1
                        </div>
                      </div>
                      <div class="bold pl-10 pb-20">2 中度失能：</div>
                      <div class="pl-40 pb-20">
                        <div class="pb-20">
                          日常生活活动分级为
                          1，但精神状态、感知觉与沟通、社会参与均为
                          2，或有一项为 3；
                        </div>
                        <div>
                          或日常生活活动分级为
                          2，且精神状态、感知觉与沟通、社会参与中有 1-2
                          项的分级为 1 或 2
                        </div>
                      </div>
                      <div class="bold pl-10 pb-20">3 重度失能：</div>
                      <div class="pl-40 pb-20">
                        <div class="pb-20">日常生活活动的分级为 3；</div>
                        <div class="pb-20">
                          或日常生活活动、精神状态、感知觉与沟通、社会参与分级均为
                          2
                        </div>
                        <div class="pb-20">
                          或日常生活活动分级为
                          2，且精神状态、感知觉与沟通、社会参与中至少有一项分级为
                          3
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="print-sign">
            <el-button class="btn" type="primary" @click="printSign"
              >确认以上选择无误打印签名页</el-button
            >
          </div>
        </div>
      </div>
      <div class="save">
        <el-button type="primary" @click="print">暂存</el-button>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>
<script>
import './index.scss'
import { getYearOrMonthOrDay } from '@/utils/dateUtil.js'
import continueInput from '@/components/common/continue-input.vue'
import radioInput from '@/components/common/radio-input.vue'
import { isEmpty, isSfz } from '@/utils/utils'
import exportEvaluate from '@/components/export-evaluate.vue'
import { exportTable } from '@/api/evaluate'
export default {
  components: {
    continueInput,
    radioInput,
    exportEvaluate
  },
  data () {
    return {
      activeClass: 0,
      // 当前hash
      currentHash: 'A1',
      // 表格评估数据
      evaluateData: {
        // A1 评估基本信息表
        A_1_1: '123456', // 评估编号
        A_1_2: '2011/2/12', // 评估基准日期
        A_1_3: 1, // 评估原因
        // A2被评估者的基本信息表
        A_2_1: '测试', // 姓名
        A_2_2: 2, // 性别
        A_2_3: '2011/2/12', // 出生日期
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
        // 医疗费用支付方式
        A_2_11: {
          value: [1, 3, 8],
          text: '免费'
        },
        // 经济来源
        A_2_12: {
          value: [4, 1],
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
        A_3_2: {
          // 信息提供者与老人的关系
          value: 5,
          text: '亲戚'
        },
        A_3_3: '联系人姓名', // 联系人姓名
        A_3_4: '13120424213', // 联系人电话
        // B1日常生活活动评估表
        B_1_1: 10, // 进食
        B_1_2: 5, // 洗澡
        B_1_3: 5, // 修饰
        B_1_4: 10, // 穿衣
        B_1_5: 10, // 大便控制
        B_1_6: 10, // 小便控制
        B_1_7: 10, // 如厕
        B_1_8: 15, // 床椅转移
        B_1_9: 15, // 平地行走
        B_1_10: 10, // 上下楼梯
        B_1_11: 0, // 日常生活 活动总分
        B_1: '', // 日常生活 活动分级
        // B2 精神状态评估表
        B_2_1: {
          // 认知功能测验
          img: '', // 测验图片
          text1: '',
          text2: '',
          text3: '',
          score: 2
        },
        B_2_2: 2, // 攻击行为
        B_2_3: 2, // 抑郁症状
        B_2_4: 0, // 精神状态总分
        B_2: '', // 精神状态分级

        // 感知觉与沟通评估表
        B_3_1: 2, // 意识水平
        B_3_2: 2, // 视力
        B_3_3: 2, // 听力
        B_3_4: 2, // 沟通交流
        B_3: '', // 感知觉与沟通分级
        // B4 社会参与评估表
        B_4_1: 0, // 生活能力
        B_4_2: 3, // 工作能力
        B_4_3: 2, // 时间/空间定向
        B_4_4: 2, // 人物定向
        B_4_5: 2, // 社会交往能力
        B_4_6: 0, // 社会参与总分
        B_4: 0, // 社会参与分级
        C_1_1: 2, // 日常生活活动等级
        C_1_2: 2, // 精神状态
        C_1_3: 2, // 感知觉与沟通
        C_1_4: 2, // 社会参与
        C_2: 2, // 老年人能力初步等级
        C_3: 2, // 等级变更条款
        C_4: 2 // 老年人能力最终等级
      },
      // C.3 等级变更 条款
      C_3: null,

      htmlTitle: '测试'
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
    A1bornDateYear: {
      get: function () {
        return getYearOrMonthOrDay(this.evaluateData.A_2_3, 'y').toString()
      },
      set: function () {
        return getYearOrMonthOrDay(this.evaluateData.A_2_3, 'y').toString()
      }
    },
    // 根据被评估者出生日期解析出的月
    A1bornDateMonth: {
      get: function () {
        return getYearOrMonthOrDay(this.evaluateData.A_2_3, 'm').toString()
      },
      set: function () {
        return getYearOrMonthOrDay(this.evaluateData.A_2_3, 'm').toString()
      }
    },
    // 根据被评估者出生日期解析出的日
    A1bornDateDay: {
      get: function () {
        return getYearOrMonthOrDay(this.evaluateData.A_2_3, 'd').toString()
      },
      set: function () {
        return getYearOrMonthOrDay(this.evaluateData.A_2_3, 'd').toString()
      }
    },
    // 日常生活 活动总分 B_1_11
    B_1_11: function () {
      return (
        Number(this.evaluateData.B_1_1) +
        Number(this.evaluateData.B_1_2) +
        Number(this.evaluateData.B_1_3) +
        Number(this.evaluateData.B_1_4) +
        Number(this.evaluateData.B_1_5) +
        Number(this.evaluateData.B_1_6) +
        Number(this.evaluateData.B_1_7) +
        Number(this.evaluateData.B_1_8) +
        Number(this.evaluateData.B_1_9) +
        Number(this.evaluateData.B_1_10)
      )
    },
    // B_1 日常生活活动分级
    B_1: function () {
      if (this.B_1_11 === 100) {
        return 0
      }
      if (this.B_1_11 >= 65 && this.B_1_11 <= 95) {
        return 1
      }
      if (this.B_1_11 >= 45 && this.B_1_11 <= 60) {
        return 2
      }
      if (this.B_1_11 <= 40) {
        return 3
      }
      return ''
    },
    // B_2_4 精神状态总分
    B_2_4: function () {
      return (
        Number(this.evaluateData.B_2_2) +
        Number(this.evaluateData.B_2_3) +
        Number(this.evaluateData.B_2_4)
      )
    },
    // B_2 精神状态分级
    B_2: function () {
      if (this.B_2_4 === 0) {
        return 0
      }
      if (this.B_2_4 === 1) {
        return 1
      }
      if (this.B_2_4 === 2 || this.B_2_4 === 3) {
        return 2
      }
      if (this.B_2_4 === 4 || this.B_2_4 === 5 || this.B_2_4 === 6) {
        return 3
      }

      return ''
    },
    // B_3 感知觉与 沟通分级
    B_3: function () {
      // 0 能力完好：意识清醒，且视力和听力评为 0 或 1，沟通评为 0
      if (this.evaluateData.B_3_1 === 0 && (this.evaluateData.B_3_2 === 0 || this.evaluateData.B_3_2 === 1) && (this.evaluateData.B_3_3 === 0 || this.evaluateData.B_3_3 === 1) && this.evaluateData.B_3_4 === 0) {
        return 0
      }
      // 1 轻度受损：意识清醒，但视力或听力中至少一项评为 2，或沟通评为 1
      if (this.evaluateData.B_3_1 === 0 && (this.evaluateData.B_3_2 === 2 || this.evaluateData.B_3_3 === 2 || this.evaluateData.B_3_4 === 1)) {
        return 1
      }
      // 2 中度受损：意识清醒，但视力或听力中至少一项评为 3，或沟通评为 2；
      if (this.evaluateData.B_3_1 === 0 && (this.evaluateData.B_3_2 === 3 || this.evaluateData.B_3_3 === 3 || this.evaluateData.B_3_4 === 2)) {
        return 2
      }
      // 2 中度受损：或嗜睡，视力或听力评定为 3 及以下，沟通评定为 2 及以下
      if (this.evaluateData.B_3_1 === 1 && (this.evaluateData.B_3_2 <= 3 || this.evaluateData.B_3_3 <= 3) && this.evaluateData.B_3_4 <= 2) {
        return 2
      }
      // 3 重度受损：意识清醒或嗜睡，但视力或听力中至少一项评为 4，或沟通评为 3；
      if ((this.evaluateData.B_3_1 === 0 || this.evaluateData.B_3_1 === 1) && (this.evaluateData.B_3_2 === 4 || this.evaluateData.B_3_3 === 4) && this.evaluateData.B_3_4 === 3) {
        return 3
      }
      // 3 重度受损： 或昏睡/昏迷
      if (this.evaluateData.B_3_1 === 3 || this.evaluateData.B_3_1 === 2) {
        return 3
      }
      return ''
    },
    // B_4_6 社会参与总分
    B_4_6: function () {
      return this.evaluateData.B_4_1 + this.evaluateData.B_4_2 + this.evaluateData.B_4_3 + this.evaluateData.B_4_4 + this.evaluateData.B_4_5
    },
    // B_4 社会参与分级
    B_4: function () {
      if (this.B_4_6 >= 0 && this.B_4_6 <= 2) {
        return 0
      }
      if (this.B_4_6 >= 3 && this.B_4_6 <= 7) {
        return 1
      }
      if (this.B_4_6 >= 8 && this.B_4_6 <= 13) {
        return 2
      }
      if (this.B_4_6 >= 14 && this.B_4_6 <= 20) {
        return 3
      }
      return ''
    },
    // C_2 老年人能力初步等级
    // 日常生活活动 B_1
    // 精神状态 B_2
    // 感知觉与沟通 B_3
    // 社会参与 B_4
    C_2: function () {
      // 0 能力完好：日常生活活动、精神状态、感知觉与沟通分级均为 0，社会参与分级为 0 或 1
      if (this.B_1 === 0 && this.B_2 === 0 && this.B_3 === 0 && (this.B_4 === 0 || this.B_4 === 1)) {
        return 0
      }
      // 1 轻度失能：日常生活活动分级为 0，但精神状态、感知觉与沟通中至少一项分级为 1 及以上，或社会参与的分级为 2；
      if (this.B_1 === 0 && (this.B_2 >= 1 || this.B_3 >= 1 || this.B_4 === 2)) {
        return 1
      }
      // 1 轻度失能：或日常生活活动分级为 1，精神状态、感知觉与沟通、社会参与中至少有一项的分级为 0 或 1
      if (this.B_1 === 1 && (this.B_2 <= 1 || this.B_3 <= 1 || this.B_4 <= 1)) {
        return 1
      }
      // 2 中度失能：日常生活活动分级为 1，但精神状态、感知觉与沟通、社会参与均为 2，或有一项为 3；
      if (this.B_1 === 1 && ((this.B_2 === 2 && this.B_3 === 2 && this.B_4 === 2) || (this.B_2 === 3 && this.B_3 !== 3 && this.B_4 !== 3) || (this.B_2 !== 3 && this.B_3 === 3 && this.B_4 !== 3) || (this.B_2 !== 3 && this.B_3 !== 3 && this.B_4 === 3))) {
        return 2
      }
      // 2 中度失能：或日常生活活动分级为 2，且精神状态、感知觉与沟通、社会参与中有 1-2 项的分级为 1 或 2
      if (this.B_1 === 2 && ((this.B_2 === 1 || this.B_2 === 2) || (this.B_3 === 1 || this.B_3 === 2) || (this.B_4 === 1 || this.B_4 === 2)) && !(((this.B_2 === 1 || this.B_2 === 2) && (this.B_3 === 1 || this.B_3 === 2) && (this.B_4 === 1 || this.B_4 === 2)))) {
        return 2
      }
      // 3 重度失能：日常生活活动的分级为 3；
      if (this.B_1 === 3) {
        return 3
      }
      // 3 重度失能： 或日常生活活动、精神状态、感知觉与沟通、社会参与分级均为 2；
      if (this.B_1 === 2 && this.B_2 === 2 && this.B_3 === 2 && this.B_4 === 2) {
        return 3
      }
      // 3 重度失能： 或日常生活活动分级为 2，且精神状态、感知觉与沟通、社会参与中至少有一项分级为 3
      if (this.B_1 === 2 && (this.B_2 === 3 || this.B_3 === 3 || this.B_4 === 3)) {
        return 3
      }
      return ''
    },
    // C_4 最终等级
    C_4: function () {
      return ''
    }
  },
  watch: {
    B_4: function (val) {
      this.evaluateData.B_4 = val
    }
  },
  mounted () {
    // 刷新页面跳转到对应的hash
    if (!location.hash) return
    this.toHash(location.hash)
  },
  methods: {
    // 点击选择出生日期
    chooseBornDate () {
      console.log(222)
      this.$refs.datePicker.pickerVisible = true
    },
    // 跳转到指定hash
    toHash (hash) {
      document
        .querySelector(hash)
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
    // 监听滚动条
    scrollEvent (e) {
      const scrollItems = document.querySelectorAll('.table-container')
      for (let i = scrollItems.length - 1; i >= 0; i--) {
        // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
        const judge =
          e.target.scrollTop >=
          scrollItems[i].offsetTop - scrollItems[0].offsetTop
        if (judge) {
          this.activeClass = i
          break
        }
      }
      // 滚动条触底了
      if (
        e.srcElement.scrollTop + e.srcElement.offsetHeight ===
        e.srcElement.scrollHeight
      ) {
        this.activeClass = scrollItems.length - 1
      }
    },
    // 激活hash
    getActiveClass (index) {
      this.activeClass = index
      const jump = document.querySelectorAll('.table-container')
      jump[index].scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
    // 下载 打印签名页
    printSign () {
      // this.checkData()
      const evaluate = document.getElementById('evaluate').innerHTML
      const html = `
        <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        html,
        body {
            font-size: 14px;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            vertical-align: middle;
        }

        tr,
        td {
            min-height: 32px;
            border: 1px solid #E7E7E7;
        }

        .h1-title {
            line-height: 28px;
            font-weight: 600;
            color: #000000;
            font-size: 20px;
            text-align: center;
            padding-top: 32px;
        }

        .title-desc {
            text-align: center;
            padding: 10px 0;
            font-size: 16px;
            color: #000000;
            line-height: 17px;
        }

        .subtitle {
            text-align: center;
            font-size: 16px;
            color: #000000;
            line-height: 17px;
            padding-bottom: 32px;
        }

        .table-wrap {
            padding-bottom: 24px;
        }

        .table-title {
            text-align: left;
            padding-left: 8px;
            padding-bottom: 8px;
            font-weight: 600;
            color: #000000;
            line-height: 20px;
            font-size: 16px;
        }

        .evaluate-table {
            border: 1px solid #E7E7E7;
            width: 100%;

        }

        .table-num {
            padding-right: 8px;
        }

        td {
            padding: 8px;
            font-size: 14px;
            vertical-align: middle;
        }

        .question {
            width: 20%;
            padding: 8px;
            vertical-align: middle;
            line-height: 22px;
        }

        .center {
            text-align: center;
        }

        .question1 {
            width: 10%;
            padding: 8px;
            line-height: 22px;
        }


        .text {
            padding: 0 8px;
        }

        .choices {
            position: relative;
            padding: 6px 8px;
            vertical-align: middle;
        }


        .right {
            position: absolute;
            bottom: 5px;
            right: 5px;

        }


        .no-bt {
            border-top: none;
        }

        .line22 {
            line-height: 32px;
        }

        .print-sign {
            text-align: center;
            margin-top: 64px;
        }

        .text-box-group {
            font-size: 0;
        }

        .text-box {
            display: inline-block;
            border: 1px solid #000;
            width: 22px;
            margin: 0 2px;
            font-size: 14px;
            line-height: 22px;
            text-align: center;
            height: 22px;
        }

        .text {
            display: inline-block;
            font-size: 14px;
        }

        .choice-text {
            display: inline-block;
            padding-right: 10px;
            line-height: 22px;
        }

        .text-undeline {
            display: inline-block;
            padding: 3px 5px;
            border-bottom: 1px solid #000;
        }

        .right-group {
            display: inline-block;
        }
        .sign-input{
            display: inline-block;
            width: 40%;
            text-align: left;
            margin-bottom: 5px;
        }
        .bold{
            font-weight: 600;
        }
        .pt-20{
            padding-top: 10px;
        }
        .pb-20{
            padding-bottom: 10px;
        }
        .pl-10{
            padding-left: 10px;
        }
        .brakpage{
          page-break-after: always;
        }
    </style>
</head>

<body>
${evaluate}
</body>

</html>
      `
      exportTable(html).then(res => {
        window.open(`${process.env.VUE_APP_BASE_API}/common/download?fileName=${res.msg}&delete=true`)
      })
    },
    // 检测填写内容
    checkData () {
      // A1
      // 验证评估原因
      if (isEmpty(this.evaluateData.A_1_3)) {
        this.msgError('请选择评估原因')
        this.toHash('#A1')
        return
      }
      // A2
      // 验证被评估者姓名
      if (isEmpty(this.evaluateData.A_2_1)) {
        this.msgError('请输入被评估者的姓名')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_2)) {
        this.msgError('请选择被评估者的性别')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_3)) {
        this.msgError('请选择被评估者的出生日期')
        this.toHash('#A2')
        return
      }
      if (isSfz(this.evaluateData.A_2_4) !== 1) {
        this.msgError('被评估者的' + isSfz(this.evaluateData.A_2_4))
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_4)) {
        this.msgError('请输入被评估者的身份证')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_5)) {
        this.msgError('请输入被评估者的社保卡号')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_6.value)) {
        this.msgError('请选择被评估者的民族')
        this.toHash('#A2')
        return
      }
      if (
        this.evaluateData.A_2_6.value === 2 &&
        isEmpty(this.evaluateData.A_2_6.text)
      ) {
        this.msgError('请输入被评估者的少数民族类型')
        this.toHash('#A2')
      }
      if (isEmpty(this.evaluateData.A_2_7)) {
        this.msgError('请选择被评估者的文化程度')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_8.value)) {
        this.msgError('请选择被评估者的宗教信仰')
        this.toHash('#A2')
        return
      }
      if (
        this.evaluateData.A_2_8.value === 1 &&
        isEmpty(this.evaluateData.A_2_8.text)
      ) {
        this.msgError('请输入被评估者的宗教信仰')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_9)) {
        this.msgError('请选择被评估者的婚姻状况')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_10)) {
        this.msgError('请选择被评估者的居住情况')
        this.toHash('#A2')
        return
      }
      if (
        !this.evaluateData.A_2_11.value ||
        !this.evaluateData.A_2_11.value.length
      ) {
        this.msgError('请选择被评估者的医疗费用支付方式')
        this.toHash('#A2')
        return
      }
      if (
        this.evaluateData.A_2_11.value.indexOf(8) !== -1 &&
        isEmpty(this.evaluateData.A_2_11.text)
      ) {
        this.msgError('请输入被评估者的其他医疗费用支付方式')
        this.toHash('#A2')
      }
      if (
        !this.evaluateData.A_2_12.value ||
        !this.evaluateData.A_2_12.value.length
      ) {
        this.msgError('请选择被评估者的经济来源')
        this.toHash('#A2')
        return
      }
      if (
        this.evaluateData.A_2_12.value.indexOf(4) !== -1 &&
        isEmpty(this.evaluateData.A_2_12.text)
      ) {
        this.msgError('请输入被评估者的其他经济来源')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_13_1)) {
        this.msgError('请选择被评估者的痴呆状况')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_13_2)) {
        this.msgError('请选择被评估者的精神疾病状况')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_13_3)) {
        this.msgError('请输入被评估者的慢性疾病疾病状况')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_14_1)) {
        this.msgError('请选择被评估者的跌倒状况')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_14_2)) {
        this.msgError('请选择被评估者的走失状况')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_14_3)) {
        this.msgError('请选择被评估者的噎食状况')
        this.toHash('#A2')
        return
      }
      if (isEmpty(this.evaluateData.A_2_14_4)) {
        this.msgError('请选择被评估者的自杀状况')
        this.toHash('#A2')
        return
      }
      // A3
      if (isEmpty(this.evaluateData.A_3_1)) {
        this.msgError('请输入信息提供者的姓名')
        this.toHash('#A3')
        return
      }
      if (isEmpty(this.evaluateData.A_3_2.value)) {
        this.msgError('请选择信息提供者与老人的关系')
        this.toHash('#A3')
        return
      }
      if (
        this.evaluateData.A_3_2.value === 5 &&
        isEmpty(this.evaluateData.A_3_2.text)
      ) {
        this.msgError('请输入信息提供者与老人的关系')
        this.toHash('#A3')
        return
      }
      if (isEmpty(this.evaluateData.A_3_3)) {
        this.msgError('请输入联系人姓名')
        this.toHash('#A3')
        return
      }
      if (isEmpty(this.evaluateData.A_3_4)) {
        this.msgError('请输入联系人电话')
        this.toHash('#A3')
        return
      }
      // B1
      if (isEmpty(this.evaluateData.B_1_1)) {
        this.msgError('请选择进食状况')
        this.toHash('#B1')
        return
      }
      if (isEmpty(this.evaluateData.B_1_2)) {
        this.msgError('请选择洗澡状况')
        this.toHash('#B1')
        return
      }
      if (isEmpty(this.evaluateData.B_1_3)) {
        this.msgError('请选择修饰状况')
        this.toHash('#B1')
        return
      }
      if (isEmpty(this.evaluateData.B_1_4)) {
        this.msgError('请选择穿衣状况')
        this.toHash('#B1')
        return
      }
      if (isEmpty(this.evaluateData.B_1_5)) {
        this.msgError('请选择大便控制状况')
        this.toHash('#B1')
        return
      }
      if (isEmpty(this.evaluateData.B_1_6)) {
        this.msgError('请选择小便控制状况')
        this.toHash('#B1')
        return
      }
      if (isEmpty(this.evaluateData.B_1_7)) {
        this.msgError('请选择如厕状况')
        this.toHash('#B1')
        return
      }
      if (isEmpty(this.evaluateData.B_1_8)) {
        this.msgError('请选择床椅转移状况')
        this.toHash('#B1')
        return
      }
      if (isEmpty(this.evaluateData.B_1_9)) {
        this.msgError('请选择平地行走状况')
        this.toHash('#B1')
        return
      }
      if (isEmpty(this.evaluateData.B_1_10)) {
        this.msgError('请选择上下楼梯状况')
        this.toHash('#B1')
      }
      if (isEmpty(this.evaluateData.B_2_1.score)) {
        this.msgError('请选择认知功能评分')
        this.toHash('#B2')
        return
      }
      if (isEmpty(this.evaluateData.B_2_2)) {
        this.msgError('请选择攻击行为评分')
        this.toHash('#B2')
        return
      }
      if (isEmpty(this.evaluateData.B_2_3)) {
        this.msgError('请选择抑郁症状评分')
        this.toHash('#B2')
        return
      }
      // B3
      if (isEmpty(this.evaluateData.B_3_1)) {
        this.msgError('请选择意识水平评分')
        this.toHash('#B3')
        return
      }
      if (isEmpty(this.evaluateData.B_3_2)) {
        this.msgError('请选择视力评分')
        this.toHash('#B3')
        return
      }
      if (isEmpty(this.evaluateData.B_3_3)) {
        this.msgError('请选择听力评分')
        this.toHash('#B3')
        return
      }
      if (isEmpty(this.evaluateData.B_3_4)) {
        this.msgError('请选择沟通交流评分')
        this.toHash('#B3')
        return
      }
      // B4
      if (isEmpty(this.evaluateData.B_4_1)) {
        this.msgError('请选择生活能力评分')
        this.toHash('#B4')
        return
      }
      if (isEmpty(this.evaluateData.B_4_2)) {
        this.msgError('请选择工作能力评分')
        this.toHash('#B4')
        return
      }
      if (isEmpty(this.evaluateData.B_4_3)) {
        this.msgError('请选择时间/空间定向评分')
        this.toHash('#B4')
        return
      }
      if (isEmpty(this.evaluateData.B_4_4)) {
        this.msgError('请选择人物定向评分')
        this.toHash('#B4')
        return
      }
      if (isEmpty(this.evaluateData.B_4_5)) {
        this.msgError('请选择社会交往能力评分')
        this.toHash('#B4')
      }
    },
    exportPdf () {
      const style = `
       <style>
        table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            vertical-align: middle;
        }

        tr,
        td {
            min-height: 32px;
            border: 1px solid #E7E7E7;
        }

        .h1-title {
            line-height: 28px;
            font-weight: 600;
            color: #000000;
            font-size: 20px;
            text-align: center;
            padding-top: 32px;
        }

        .title-desc {
            text-align: center;
            padding: 6px 0;
            font-size: 12px;
            color: #000000;
            line-height: 17px;
        }

        .subtitle {
            text-align: center;
            font-size: 12px;
            color: #000000;
            line-height: 17px;
            padding-bottom: 32px;
        }

        .table-wrap {
            padding-bottom: 24px;
        }

        .table-title {
            text-align: left;
            padding-left: 8px;
            padding-bottom: 8px;
            font-weight: 600;
            color: #000000;
            line-height: 20px;
            font-size: 16px;
        }

        .evaluate-table {
            border: 1px solid #E7E7E7;
            width: 100%;

        }

        .table-num {
            padding-right: 8px;
        }

        td {
            padding: 8px;
            font-size: 14px;
            vertical-align: middle;
        }

        .question {
            width: 20%;
            padding: 8px;
            vertical-align: middle;
            line-height: 22px;
        }

        .center {
            text-align: center;
        }

        .question1 {
            width: 10%;
            padding: 8px;
            line-height: 22px;
        }

        .evaluate-date {
            display: flex;
            align-items: center;

        }

        .text {
            padding: 0 8px;
        }

        .choices {
            position: relative;
            padding: 6px 8px;
            vertical-align: middle;
        }

        .el-radio__input.is-checked+.el-radio__label {
            color: #000;
        }

        .el-radio__input.is-checked+.el-radio__label {
            color: #000;
        }

        .el-radio__label {
            color: #000;
        }

        .el-radio {
            white-space: pre-wrap;
            line-height: 32px;
            margin-right: 10px;

        }

        .el-radio__input.is-checked .el-radio__inner {
            border-color: #000;
            background: #fff;
        }

        .el-radio__inner {
            border-color: #aaa;
            background: #fff;
        }

        .el-radio__inner::after {
            width: 6px;
            height: 6px;
            background-color: #000;
            border-color: #000;
        }

        .radio-group {
            padding-right: 50px;
        }

        .right {
            position: absolute;
            bottom: 5px;
            right: 5px;

        }

        .input {
            display: inline-block;
            width: 22px;
            height: 22px;
            font-size: 14px;
            border-radius: 4px;
            border: 1px solid #ddd;
            cursor: pointer;
            margin-right: 1px;
            text-align: center;
        }

        .input {
            display: inline-block;
            width: 22px;
            height: 22px;
            font-size: 14px;
            border-radius: 4px;
            border: 1px solid #ddd;
            cursor: pointer;
            margin-right: 1px;
            text-align: center;
        }

        .input-text {
            font-size: 14px;
            padding: 2px 5px;
            border: none;
            border-bottom: 1px solid #333;
        }

        .no-bt {
            border-top: none;
        }

        .line22 {
            line-height: 32px;
        }

        .print-sign {
            text-align: center;
            margin-top: 64px;
        }
    </style>
      `
      const body = document.getElementById('pdfDom').innerHTML
      const html = `
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>打印</title>
    ${style}
</head>

<body>
  ${body}
</body>

</html>
      `
      console.log(html)
      console.log(document.getElementById('id'), 'ddddddddddd')
    },
    print () {
      // console.log(JSON.stringify(this.evaluateData), 'A1111111111')
      // console.log(333)
      // // 根据div标签ID拿到div中的局部内容
      // const bdhtml = window.document.body.innerHTML
      // var jubuData = document.getElementById('pdfDom').innerHTML
      // // // 把获取的 局部div内容赋给body标签, 相当于重置了 body里的内容
      // window.document.body.innerHTML = jubuData
      // // 调用打印功能
      window.print()
      // window.document.body.innerHTML = bdhtml // 重新给页面内容赋值；
      // // 重新赋值之后 事件会失效！！！
      // console.log(bdhtml, 'dddddd')
      // location.reload()
    }
  }
}
</script>
