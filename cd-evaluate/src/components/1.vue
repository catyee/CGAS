<template>
  <div class="container">
    <div class="tabs">
      <!-- A1 评估基本信息表 -->
      <div id="tab-A1" class="evaluate-tab hash-tab">
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
                <div class="text-box-group">
                  <div
                    class="text-box"
                    v-for="(i, index) in evaluateData.A_1_1"
                    :key="index"
                  >
                    {{ i }}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question">
                <span class="table-num">A.1.2</span>评估基准日期
              </td>
              <td>
                <div class="text-box-group">
                  <div
                    class="text-box"
                    v-for="(i, index) in evaluateData.A1EvaluateYear"
                    :key="index + 'year'"
                  >
                    {{ i }}
                  </div>
                  <div class="text">年</div>
                  <div
                    class="text-box"
                    v-for="(i, index) in evaluateData.A1EvaluateMonth"
                    :key="index + 'month'"
                  >
                    {{ i }}
                  </div>
                  <div class="text">月</div>
                  <div
                    class="text-box"
                    v-for="(i, index) in evaluateData.A1EvaluateDay"
                    :key="index + 'day'"
                  >
                    {{ i }}
                  </div>
                  <div class="text">日</div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question">
                <span class="table-num">A.1.3</span> 评估原因
              </td>
              <td class="choices">
                <div
                  class="choice-text"
                  :class="{ active: evaluateData.A_1_3 === 1 }"
                >
                  1接受服务前初评
                </div>
                <div
                  class="choice-text"
                  :class="{ active: evaluateData.A_1_3 === 2 }"
                >
                  2接受服务后的常规评估
                </div>
                <div
                  class="choice-text"
                  :class="{ active: evaluateData.A_1_3 === 3 }"
                >
                  3状况发生变化后的即时评估
                </div>
                <div
                  class="choice-text"
                  :class="{ active: evaluateData.A_1_3 === 4 }"
                >
                  4因评估结果有疑问进行的复评
                </div>
                <div class="right text-box">{{ evaluateData.A_1_3 }}</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- A2 被评估者的基本信息表-->
      <div id="tab-A2" class="evaluate-tab hash-tab">
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
                <span>{{ evaluateData.A_2_1 }}</span>
              </td>
            </tr>
            <tr>
              <td class="question" colspan="2">
                <span class="table-num">A.2.2</span>性别
              </td>
              <td>
                <div class="choices">
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_1_3 === 1 }"
                  >
                    1男
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_1_3 === 2 }"
                  >
                    2女
                  </div>
                  <div class="right text-box">{{ evaluateData.A_1_3 }}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question" colspan="2">
                <span class="table-num">A.2.3</span> 出生日期
              </td>
              <td>
                <div class="text-box-group">
                  <div
                    class="text-box"
                    v-for="(i, index) in evaluateData.A1bornDateYear"
                    :key="index + 'year'"
                  >
                    {{ i }}
                  </div>
                  <div class="text">年</div>
                  <div
                    class="text-box"
                    v-for="(i, index) in evaluateData.A1bornDateMonth"
                    :key="index + 'month'"
                  >
                    {{ i }}
                  </div>
                  <div class="text">月</div>
                  <div
                    class="text-box"
                    v-for="(i, index) in evaluateData.A1bornDateDay"
                    :key="index + 'day'"
                  >
                    {{ i }}
                  </div>
                  <div class="text">日</div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question" colspan="2">
                <span class="table-num">A.2.4</span> 身份证号
              </td>
              <td>
                <div class="text-box-group">
                  <div
                    class="text-box"
                    v-for="(i, index) in evaluateData.A_2_4"
                    :key="index"
                  >
                    {{ i }}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question" colspan="2">
                <span class="table-num">A.2.5</span> 社保卡号
              </td>
              <td>
                <div class="text-box-group">
                  <div
                    class="text-box"
                    v-for="(i, index) in evaluateData.A_2_5"
                    :key="index"
                  >
                    {{ i }}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question" colspan="2">
                <span class="table-num">A.2.6</span> 民族
              </td>
              <td>
                <div class="choices">
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_6 && evaluateData.A_2_6.value === 1,
                    }"
                  >
                    1汉族
                  </div>
                  <div
                    class="choice-text"
                    style="padding-right: 0"
                    :class="{
                      active:
                        evaluateData.A_2_6 && evaluateData.A_2_6.value === 2,
                    }"
                  >
                    2少数民族
                  </div>
                  <div class="text-undeline">
                    {{ evaluateData.A_2_6 && evaluateData.A_2_6.text }}
                  </div>
                  <div class="right text-box">
                    {{ evaluateData.A_2_6 && evaluateData.A_2_6.value }}
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
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_7 === 1 }"
                  >
                    1文盲
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_7 === 2 }"
                  >
                    2小学
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_7 === 3 }"
                  >
                    3初中
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_7 === 4 }"
                  >
                    4高中/技校/中专
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_7 === 5 }"
                  >
                    5大学专科及以上
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_7 === 6 }"
                  >
                    6不详
                  </div>
                  <div class="right text-box">{{ evaluateData.A_2_7 }}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question" colspan="2">
                <span class="table-num">A.2.8</span> 宗教信仰
              </td>
              <td>
                <div class="choices">
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_8 && evaluateData.A_2_8.value === 0,
                    }"
                  >
                    0无
                  </div>
                  <div
                    class="choice-text"
                    style="padding-right: 0"
                    :class="{
                      active:
                        evaluateData.A_2_8 && evaluateData.A_2_8.value === 1,
                    }"
                  >
                    1有
                  </div>
                  <div class="text-undeline">
                    {{ evaluateData.A_2_8 && evaluateData.A_2_8.text }}
                  </div>
                  <div class="right text-box">
                    {{ evaluateData.A_2_8 && evaluateData.A_2_8.value }}
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
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_9 === 1 }"
                  >
                    1未婚
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_9 === 2 }"
                  >
                    2已婚
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_9 === 3 }"
                  >
                    3丧偶
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_9 === 4 }"
                  >
                    4离婚
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_9 === 5 }"
                  >
                    5未说明的婚姻状况
                  </div>
                  <div class="right text-box">{{ evaluateData.A_2_9 }}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question" colspan="2">
                <span class="table-num">A.2.10</span>居住情况
              </td>
              <td>
                <div class="choices">
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_10 === 1 }"
                  >
                    1独居
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_10 === 2 }"
                  >
                    2与配偶/伴侣居住
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_10 === 3 }"
                  >
                    3与子女居住
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_10 === 4 }"
                  >
                    4与父母居住
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_10 === 5 }"
                  >
                    5与兄弟姐妹居住
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_10 === 6 }"
                  >
                    6与其他亲属居住
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_10 === 7 }"
                  >
                    7与非亲属关系的人居住
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_10 === 8 }"
                  >
                    8养老机构
                  </div>
                  <div class="right text-box">{{ evaluateData.A_2_10 }}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question" colspan="2">
                <span class="table-num">A.2.11</span>医疗费用支付方式
              </td>
              <td>
                <div class="choices">
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_11 &&
                        evaluateData.A_2_11.value.indexOf(1) !== -1,
                    }"
                  >
                    1城镇职工基本医疗保险
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_11 &&
                        evaluateData.A_2_11.value.indexOf(2) !== -1,
                    }"
                  >
                    2城镇居民基本医疗保险
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_11 &&
                        evaluateData.A_2_11.value.indexOf(3) !== -1,
                    }"
                  >
                    3新型农村合作医疗
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_11 &&
                        evaluateData.A_2_11.value.indexOf(4) !== -1,
                    }"
                  >
                    4贫困求助
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_11 &&
                        evaluateData.A_2_11.value.indexOf(5) !== -1,
                    }"
                  >
                    5商业医疗保险
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_11 &&
                        evaluateData.A_2_11.value.indexOf(6) !== -1,
                    }"
                  >
                    6全公费
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_11 &&
                        evaluateData.A_2_11.value.indexOf(7) !== -1,
                    }"
                  >
                    7全自费
                  </div>
                  <div
                    class="choice-text"
                    style="text-align: right; padding-top: 10px"
                    :class="{
                      active:
                        evaluateData.A_2_11 &&
                        evaluateData.A_2_11.value.indexOf(8) !== -1,
                    }"
                  >
                    8其他
                  </div>
                  <div class="text-undeline">
                    {{ evaluateData.A_2_11 && evaluateData.A_2_11.text }}
                  </div>
                  <div style="text-align: right" v-if="evaluateData.A_2_11">
                    <div
                      class="right-group"
                      v-for="(i, index) in evaluateData.A_2_11.value"
                      :key="index"
                    >
                      <div class="text-box">{{ i }}</div>
                      <span
                        v-show="index !== evaluateData.A_2_11.value.length - 1"
                        >/</span
                      >
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
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_12 &&
                        evaluateData.A_2_12.value.indexOf(1) !== -1,
                    }"
                  >
                    1退休金/养老金
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_12 &&
                        evaluateData.A_2_12.value.indexOf(2) !== -1,
                    }"
                  >
                    2子女补贴
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_2_12 &&
                        evaluateData.A_2_12.value.indexOf(3) !== -1,
                    }"
                  >
                    3亲友资助
                  </div>
                  <div
                    class="choice-text"
                    style="padding-right: 0"
                    :class="{
                      active:
                        evaluateData.A_2_12 &&
                        evaluateData.A_2_12.value.indexOf(4) !== -1,
                    }"
                  >
                    4其他补贴
                  </div>
                  <div class="text-undeline">
                    {{ evaluateData.A_2_12 && evaluateData.A_2_12.text }}
                  </div>
                  <div
                    style="text-align: right; padding-top: 10px"
                    v-if="evaluateData.A_2_12"
                  >
                    <div
                      class="right-group"
                      v-for="(i, index) in evaluateData.A_2_12.value"
                      :key="index"
                    >
                      <div class="text-box">{{ i }}</div>
                      <span
                        v-show="index !== evaluateData.A_2_12.value.length - 1"
                        >/</span
                      >
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
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_1 === 0 }"
                  >
                    0无
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_1 === 1 }"
                  >
                    1轻度
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_1 === 2 }"
                  >
                    2中度
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_1 === 3 }"
                  >
                    3重度
                  </div>
                  <div class="right text-box">{{ evaluateData.A_2_13_1 }}</div>
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
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_2 === 0 }"
                  >
                    0无
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_2 === 1 }"
                  >
                    1精神分裂症
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_2 === 2 }"
                  >
                    2双相情感障碍
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_2 === 3 }"
                  >
                    3偏执性精神障碍
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_2 === 4 }"
                  >
                    4分裂情感性障碍
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_2 === 5 }"
                  >
                    5癫痫所致精神障碍
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_13_2 === 6 }"
                  >
                    6精神发育迟滞伴发精神障碍
                  </div>
                  <div class="right text-box">{{ evaluateData.A_2_13_2 }}</div>
                </div>
              </td>
            </tr>
            <!-- 慢性疾病 -->
            <tr>
              <td class="question1">
                <span class="table-num">A.2.13.3</span>慢性疾病
              </td>
              <td>{{ evaluateData.A_2_13_3 }}</td>
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
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_1 === 0 }"
                  >
                    0无
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_1 === 1 }"
                  >
                    1发生过1次
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_1 === 2 }"
                  >
                    2发生过2次
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_1 === 3 }"
                  >
                    3发生过3次及以上
                  </div>
                  <div class="right text-box">{{ evaluateData.A_2_14_1 }}</div>
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
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_2 === 0 }"
                  >
                    0无
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_2 === 1 }"
                  >
                    1发生过1次
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_2 === 2 }"
                  >
                    2发生过2次
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_2 === 3 }"
                  >
                    3发生过3次及以上
                  </div>
                  <div class="right text-box">{{ evaluateData.A_2_14_2 }}</div>
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
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_3 === 0 }"
                  >
                    0无
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_3 === 1 }"
                  >
                    1发生过1次
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_3 === 2 }"
                  >
                    2发生过2次
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_3 === 3 }"
                  >
                    3发生过3次及以上
                  </div>
                  <div class="right text-box">{{ evaluateData.A_2_14_3 }}</div>
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
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_4 === 0 }"
                  >
                    0无
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_4 === 1 }"
                  >
                    1发生过1次
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_4 === 2 }"
                  >
                    2发生过2次
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: evaluateData.A_2_14_4 === 3 }"
                  >
                    3发生过3次及以上
                  </div>
                  <div class="right text-box">{{ evaluateData.A_2_14_4 }}</div>
                </div>
              </td>
            </tr>
            <!-- 其他 -->
            <tr>
              <td class="question1">
                <span class="table-num">A.2.14.5</span>其他
              </td>
              <td>{{ evaluateData.A_2_14_5 }}</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- A3 信息提供者及联系人信息表 -->
      <div id="tab-A3" class="evaluate-tab hash-tab">
        <div class="table-wrap">
          <div class="table-title">
            <span class="table-num">A.3 </span>信息提供者及联系人信息表
          </div>
          <table class="evaluate-table">
            <tr>
              <td class="question">
                <span class="table-num">A.3.1</span>信息提供者的姓名
              </td>
              <td>{{ evaluateData.A_3_1 }}</td>
            </tr>
            <tr>
              <td class="question">
                <span class="table-num">A.3.2</span>信息提供者与老人的关系
              </td>
              <td>
                <div class="choices">
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_3_2 && evaluateData.A_3_2.value === 1,
                    }"
                  >
                    1配偶
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_3_2 && evaluateData.A_3_2.value === 2,
                    }"
                  >
                    2子女
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_3_2 && evaluateData.A_3_2.value === 3,
                    }"
                  >
                    3其他亲属
                  </div>
                  <div
                    class="choice-text"
                    :class="{
                      active:
                        evaluateData.A_3_2 && evaluateData.A_3_2.value === 4,
                    }"
                  >
                    4雇佣照顾者
                  </div>
                  <div
                    class="choice-text"
                    style="padding-right: 0"
                    :class="{
                      active:
                        evaluateData.A_3_2 && evaluateData.A_3_2.value === 5,
                    }"
                  >
                    5其他
                  </div>
                  <div class="text-undeline">{{evaluateData.A_3_2 && evaluateData.A_3_2.text}}</div>
                  <div class="right text-box">
                    {{ evaluateData.A_3_2 && evaluateData.A_3_2.value }}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="question">
                <span class="table-num">A.3.3</span>联系人姓名
              </td>
              <td>{{ evaluateData.A_3_3 }}</td>
            </tr>
            <tr>
              <td class="question">
                <span class="table-num">A.3.4</span>联系人电话
              </td>
              <td>{{ evaluateData.A_3_4 }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div id="tab-B1" class="evaluate-tab hash-tab">
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
                <div class="text-box">{{ evaluateData.B_1_1 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_1 === 10 }">
                  10 分，可独立进食（在合理的时间内独立进食准备好的食物）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_1 === 5 }">
                  5 分， 需部分帮助（进食过程中需要一定帮助，如协助把持餐具）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_1 === 0 }">
                  0 分， 需极大帮助或完全依赖他人，或有留置营养管
                </div>
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
                <div class="text-box">{{ evaluateData.B_1_2 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_2 === 5 }">
                  5 分， 准备好洗澡水后，可自己独立完成洗澡过程
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_2 === 0 }">
                  0 分， 在洗澡过程中需他人帮助
                </div>
              </td>
            </tr>
          </table>
          <!-- B1.3 -->
          <table class="evaluate-table no-bt">
            <tr>
              <td class="question" rowspan="2">
                <span class="table-num bold">B.1.3 修饰：</span>指洗脸、刷牙、
                梳头、刮脸等
              </td>
              <td class="question center" rowspan="2">
                <div class="text-box">{{ evaluateData.B_1_3 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_3 === 5 }">
                  5 分， 可自己独立完成
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_3 === 0 }">
                  0 分， 需他人帮助
                </div>
              </td>
            </tr>
          </table>
          <!-- B1.4 -->
          <table class="evaluate-table no-bt">
            <tr>
              <td class="question" rowspan="3">
                <span class="table-num bold">B.1.4 穿衣：</span>指穿脱衣服、系
                扣、拉拉链、穿 脱鞋袜、系鞋带
              </td>
              <td class="question center" rowspan="3">
                <div class="text-box">{{ evaluateData.B_1_4 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_4 === 10 }">
                  10 分，可独立完成
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_4 === 5 }">
                  5
                  分，需部分帮助（能自己穿脱，但需他人帮助整理衣物、系扣/鞋带、拉拉链）
                </div>
              </td>
            </tr>
            <tr>
              <td :class="{ active: evaluateData.B_1_4 === 0 }">
                <div>0 分， 需极大帮助或完全依赖他人</div>
              </td>
            </tr>
          </table>
          <!-- B1.5 -->
          <table class="evaluate-table no-bt">
            <tr>
              <td class="question" rowspan="3">
                <span class="table-num bold">B.1.5 大便控制</span>
              </td>
              <td class="question center" rowspan="3">
                <div class="text-box">{{ evaluateData.B_1_5 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_5 === 10 }">
                  10 分，可控制大便
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_5 === 5 }">
                  5 分， 偶尔失控（每周＜1 次），或需要他人提示
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_5 === 0 }">
                  0 分， 完全失控
                </div>
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
                <div class="text-box">{{ evaluateData.B_1_6 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_6 === 10 }">
                  10 分，可控制小便
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_6 === 5 }">
                  5 分， 偶尔失控（每天＜1 次，但每周＞1 次），或需要他人提示
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_6 === 0 }">
                  0 分， 完全失控，或留置导尿管
                </div>
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
                <div class="text-box">{{ evaluateData.B_1_7 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_7 === 10 }">
                  10 分，可独立完成
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_7 === 5 }">
                  5 分，
                  需部分帮助（需他人搀扶去厕所、需他人帮忙冲水或整理衣裤等）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_7 === 0 }">
                  0 分， 需极大帮助或完全依赖他人
                </div>
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
                <div class="text-box">{{ evaluateData.B_1_8 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_8 === 15 }">
                  15 分，可独立完成
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_8 === 10 }">
                  10 分，需部分帮助（需他人搀扶或使用拐杖）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_8 === 5 }">
                  5 分， 需极大帮助（较大程度上依赖他人搀扶和帮助）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_8 === 0 }">
                  0 分， 完全依赖他人
                </div>
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
                <div class="text-box">{{ evaluateData.B_1_9 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_9 === 15 }">
                  15 分，可独立在平地上行走 45m
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_9 === 10 }">
                  10
                  分，需部分帮助（因肢体残疾、平衡能力差、过度衰弱、视力等问题，在一定
                  程度上需他人地搀扶或使用拐杖、助行器等辅助用具）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_9 === 5 }">
                  5 分，
                  需极大帮助（因肢体残疾、平衡能力差、过度衰弱、视力等问题，在较大
                  程度上依赖他人搀扶，或坐在轮椅上自行移动）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_9 === 0 }">
                  0 分， 完全依赖他人
                </div>
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
                <div class="text-box">{{ evaluateData.B_1_10 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_1_10 === 10 }">
                  10 分，可独立上下楼梯（连续上下 10-15 个台阶）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_10 === 5 }">
                  5 分， 需部分帮助（需他人搀扶，或扶着楼梯、使用拐杖等）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_1_10 === 0 }">
                  0 分， 需极大帮助或完全依赖他人
                </div>
              </td>
            </tr>
          </table>
          <!-- B1.11 -->
          <table class="evaluate-table no-bt">
            <tr>
              <td class="question">
                <span class="table-num bold">B.1．11 日常生活 活动总分</span>
              </td>
              <td class="question center">
                <div class="text-box">{{ evaluateData.B_1_11 }}</div>
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
                <div class="text-box">{{ evaluateData.B_1 }}</div>
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
      <div id="tab-B2" class="evaluate-tab hash-tab">
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
                  (1)画钟测验：“请您在这儿画一个圆形的时钟，在时钟上标出 10 点
                  45 分”
                </div>
                <div>
                  <el-image
                  class="img-show"
                    v-if="evaluateData.B_2_1 && evaluateData.B_2_1.img"
                    style="width:100px;height:100px"
                    :src="evaluateData.B_2_1 && evaluateData.B_2_1.img"
                    :preview-src-list="[evaluateData.B_2_1.img]"
                  >
                  </el-image>
                  <img
                  class="img-export test-img"
                    :src="evaluateData.B_2_1.img"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="line22">
                  (2)回忆词语：“现在请您告诉我，刚才我要您记住的三样东西是什么？
                </div>
                <div v-if="evaluateData.B_2_1">
                  答：
                  <input
                    type="text"
                    class="input-text inline"
                    v-model="evaluateData.B_2_1.text1"
                  />、
                  <input
                    type="text"
                    class="input-text inline"
                    v-model="evaluateData.B_2_1.text2"
                  />、
                  <input
                    type="text"
                    class="input-text inline"
                    v-model="evaluateData.B_2_1.text3"
                  />（不必按顺序）
                </div>
              </td>
            </tr>
            <tr>
              <td class="question center" rowspan="3">
                评分
                <div class="text-box">
                  {{ evaluateData.B_2_1 && evaluateData.B_2_1.score }}
                </div>
                分
              </td>
              <td>
                <div
                  :class="{
                    active:
                      evaluateData.B_2_1 && evaluateData.B_2_1.score === 0,
                  }"
                >
                  0 分，画钟正确（画出一个闭锁圆，指针位置准确），且能回忆出 2-3
                  个词
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  :class="{
                    active:
                      evaluateData.B_2_1 && evaluateData.B_2_1.score === 1,
                  }"
                >
                  1 分，画钟错误（画的圆不闭锁，或指针位置不准确），或只回忆出
                  0-1 个词
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  :class="{
                    active:
                      evaluateData.B_2_1 && evaluateData.B_2_1.score === 2,
                  }"
                >
                  2 分，已确诊为认知障碍，如老年痴呆
                </div>
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
                <div class="text-box">{{ evaluateData.B_2_2 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_2_2 === 0 }">
                  0
                  分，无身体攻击行为（如打/踢/推/咬/抓/摔东西）和语言攻击行为（如骂人、
                  语言威胁、尖叫）
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_2_2 === 1 }">
                  1 分，每月有几次身体攻击行为，或每周有几次语言攻击行为
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_2_2 === 2 }">
                  2 分，每周有几次身体攻击行为，或每日有语言攻击行为
                </div>
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
                <div class="text-box">{{ evaluateData.B_2_3 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_2_3 === 0 }">
                  0 分，无
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_2_3 === 1 }">
                  1 分，情绪低落、不爱说话、不爱梳洗、不爱活动
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_2_3 === 2 }">
                  2 分，有自杀念头或自杀行为
                </div>
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
                <div class="text-box">{{ evaluateData.B_2_4 }}</div>
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
                <div class="text-box">{{ evaluateData.B_2 }}</div>
                级
              </td>
              <td>
                <div class="line22" :class="{ active: evaluateData.B_2 === 0 }">
                  0 能力完好：总分为 0 分
                </div>
                <div class="line22" :class="{ active: evaluateData.B_2 === 1 }">
                  1 轻度受损：总分为 1 分
                </div>
                <div class="line22" :class="{ active: evaluateData.B_2 === 2 }">
                  2 中度受损：总分 2-3 分
                </div>
                <div class="line22" :class="{ active: evaluateData.B_2 === 3 }">
                  3 重度受损：总分 4-6 分
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- B.3 感知觉与沟通评估表 -->
      <div id="tab-B3" class="evaluate-tab hash-tab">
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
                <div class="text-box">{{ evaluateData.B_3_1 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_3_1 === 0 }">
                  0 分，神志清醒，对周围环境警觉
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_1 === 1 }">
                  1
                  分，嗜睡，表现为睡眠状态过度延长。当呼唤或推动其肢体时可唤醒，并能进
                  行正确的交谈或执行指令，停止刺激后又继续入睡
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_1 === 2 }">
                  2
                  分，昏睡，一般的外界刺激不能使其觉醒，给予较强烈的刺激时可有短时的意
                  识清醒，醒后可简短回答提问，当刺激减弱后又很快进入睡眠状态
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_1 === 3 }">
                  3
                  分，昏迷，处于浅昏迷时对疼痛刺激有回避和痛苦表情；处于深昏迷时对刺激
                  无反应（若评定为昏迷，直接评定为重度失能，可不进行以下项目的评估）
                </div>
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
                <div class="text-box">{{ evaluateData.B_3_2 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_3_2 === 0 }">
                  0 分，能看清书报上的标准字体
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_2 === 1 }">
                  1 分，能看清楚大字体，但看不清书报上的标准字体
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_2 === 2 }">
                  2 分，视力有限，看不清报纸大标题，但能辨认物体
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_2 === 3 }">
                  3
                  分，辨认物体有困难，但眼睛能跟随物体移动，只能看到光、颜色和形状
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_2 === 4 }">
                  4 分，没有视力，眼睛不能跟随物体移动
                </div>
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
                <div class="text-box">{{ evaluateData.B_3_3 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_3_3 === 0 }">
                  0 分，可正常交谈，能听到电视、电话、门铃的声音
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_3 === 1 }">
                  1 分，在轻声说话或说话距离超过 2 米时听不清
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_3 === 2 }">
                  2 分，正常交流有些困难，需在安静的环静或大声说话才能听到
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_3 === 3 }">
                  3 分，讲话者大声说话或说话很慢，才能部分听见
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_3 === 4 }">
                  4 分，完全听不见
                </div>
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
                <div class="text-box">{{ evaluateData.B_3_4 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_3_4 === 0 }">
                  0 分，无困难，能与他人正常沟通和交流
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_4 === 1 }">
                  1
                  分，能够表达自己的需要及理解别人的话，但需要增加时间或给予帮助
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_4 === 2 }">
                  2 分，表达需要或理解有困难，需频繁重复或简化口头表达
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_3_4 === 3 }">
                  3 分，不能表达需要或理解他人的话
                </div>
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
                <div class="text-box">{{ evaluateData.B_3 }}</div>
                级
              </td>
              <td>
                <div class="line22" :class="{ active: evaluateData.B_3 === 0 }">
                  0 能力完好：意识清醒，且视力和听力评为 0 或 1，沟通评为 0
                </div>
                <div class="line22" :class="{ active: evaluateData.B_3 === 1 }">
                  1 轻度受损：意识清醒，但视力或听力中至少一项评为 2，或沟通评为
                  1
                </div>
                <div class="line22" :class="{ active: evaluateData.B_3 === 2 }">
                  2 中度受损：意识清醒，但视力或听力中至少一项评为 3，或沟通评为
                  2； 或嗜睡，视力或听力评定为 3 及以下，沟通评定为 2 及以下
                </div>
                <div class="line22" :class="{ active: evaluateData.B_3 === 3 }">
                  3 重度受损：意识清醒或嗜睡，但视力或听力中至少一项评为
                  4，或沟通评为 3； 或昏睡/昏迷
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- B.4 社会参与评估表 -->
      <div id="tab-B4" class="evaluate-tab brakpage hash-tab">
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
                <div class="text-box">{{ evaluateData.B_4_1 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_4_1 === 0 }">
                  0
                  分，除个人生活自理外（如饮食、洗漱、穿戴、二便），能料理家务（如做饭、
                  洗衣）或当家管理事务
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_1 === 1 }">
                  1 分，除个人生活自理外，能做家务，但欠好，家庭事务安排欠条
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_1 === 2 }">
                  2 分，个人生活能自理；只有在他人帮助下才能做些家务，但质量不好
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_1 === 3 }">
                  3 分，个人基本生活事务能自理（如饮食、二便），在督促下可洗漱
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_1 === 4 }">
                  4
                  分，个人基本生活事务（如饮食、二便）需要部分帮助或完全依赖他人帮助
                </div>
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
                <div class="text-box">{{ evaluateData.B_4_2 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_4_2 === 0 }">
                  0 分，原来熟练的脑力工作或体力技巧性工作可照常进行
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_2 === 1 }">
                  1 分，原来熟练的脑力工作或体力技巧性工作能力有所下降
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_2 === 2 }">
                  2 分，原来熟练的脑力工作或体力技巧性工作明显不如以往，部分遗忘
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_2 === 3 }">
                  3 分，对熟练工作只有一些片段保留，技能全部遗忘
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_2 === 4 }">
                  4 分，对以往的知识或技能全部磨灭
                </div>
              </td>
            </tr>
          </table>
          <!-- B4.3 -->
          <table class="evaluate-table no-bt">
            <tr>
              <td class="question" rowspan="5">
                <span class="table-num bold">B.4.3 时 间 / 空 间 定 向</span>
              </td>
              <td class="question center" rowspan="5">
                <div class="text-box">{{ evaluateData.B_4_3 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_4_3 === 0 }">
                  0
                  分，时间观念（年、月、日、时）清楚；可单独出远门，能很快掌握新环境的
                  方位
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_3 === 1 }">
                  1
                  分，时间观念有些下降，年、月、日清楚，但有时相差几天；可单独来往于近
                  街，知道现住地的名称和方位，但不知回家路线
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_3 === 2 }">
                  2
                  分，时间观念较差，年、月、日不清楚，可知上半年或下半年；只能单独在家
                  附近行动，对现住地只知名称，不知道方位
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_3 === 3 }">
                  3
                  分，时间观念很差，年、月、日不清楚，可知上午或下午；只能在左邻右舍间
                  串门，对现住地不知名称和方位
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_3 === 4 }">
                  4 分，无时间观念；不能单独外出
                </div>
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
                <div class="text-box">{{ evaluateData.B_4_4 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_4_4 === 0 }">
                  0
                  分，知道周围人们的关系，知道祖孙、叔伯、姑姨、侄子侄女等称谓的意义；
                  可分辨陌生人的大致年龄和身份，可用适当称呼
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_4 === 1 }">
                  1
                  分，只知家中亲密近亲的关系，不会分辨陌生人的大致年龄，不能称呼陌生人
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_4 === 2 }">
                  2 分，只能称呼家中人，或只能照样称呼，不知其关系，不辨辈分
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_4 === 3 }">
                  3 分，只认识常同住的亲人，可称呼子女或孙子女，可辨熟人和生人
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_4 === 4 }">
                  4 分，只认识保护人，不辨熟人和生人
                </div>
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
                <div class="text-box">{{ evaluateData.B_4_5 }}</div>
                分
              </td>
              <td>
                <div :class="{ active: evaluateData.B_4_5 === 0 }">
                  0 分，参与社会，在社会环境有一定的适应能力，待人接物恰当
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_5 === 1 }">
                  1
                  分，能适应单纯环境，主动接触人，初见面时难让人发现智力问题，不能理解
                  隐喻语
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_5 === 2 }">
                  2
                  分，脱离社会，可被动接触，不会主动待人，谈话中很多不适词句，容易上当
                  受骗
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_5 === 3 }">
                  3 分，勉强可与人交往，谈吐内容不清楚，表情不恰当
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div :class="{ active: evaluateData.B_4_5 === 4 }">
                  4 分，难以与人接触
                </div>
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
                <div class="text-box">{{ evaluateData.B_4_6 }}</div>
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
                <div class="text-box">{{ evaluateData.B_4 }}</div>
                级
              </td>
              <td>
                <div class="line22" :class="{ active: evaluateData.B_4 === 0 }">
                  0 能力完好：总分 0-2 分
                </div>
                <div class="line22" :class="{ active: evaluateData.B_4 === 1 }">
                  1 轻度受损：总分 3-7 分
                </div>
                <div class="line22" :class="{ active: evaluateData.B_4 === 2 }">
                  2 中度受损：总分 8-13 分
                </div>
                <div class="line22" :class="{ active: evaluateData.B_4 === 3 }">
                  3 重度受损：总分 14-20 分
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- C 老年人能力评估报告 -->
      <div id="sign-export" class="hash-tab">
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
                  <div class="text-box">{{ cInfoJson.C_1_1 }}</div>
                  级
                </div>
              </td>
              <td>
                <div class="c-td">
                  <span class="table-num bold">C.1.2 精神状态：</span>
                  <div class="text-box">{{ cInfoJson.C_1_2 }}</div>
                  级
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="c-td">
                  <span class="table-num bold">C.1.3 感知觉与沟通：</span>
                  <div class="text-box">{{ cInfoJson.C_1_3 }}</div>
                  级
                </div>
              </td>
              <td>
                <div>
                  <span class="table-num bold">C.1.4 社会参与：</span>
                  <div class="text-box">{{ cInfoJson.C_1_4 }}</div>
                  级
                </div>
              </td>
            </tr>
          </table>
          <table class="evaluate-table no-bt">
            <tr>
              <td class="question">
                <span class="table-num bold">C.2 老年人能 力初步等级</span>
              </td>
              <td>
                <div class="choices">
                  <div
                    class="choice-text"
                    :class="{ active: cInfoJson.C_2 === 0 }"
                  >
                    0 能力完好
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: cInfoJson.C_2 === 1 }"
                  >
                    1 轻度失能
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: cInfoJson.C_2 === 2 }"
                  >
                    2 中度失能
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: cInfoJson.C_2 === 3 }"
                  >
                    3 重度失能
                  </div>
                  <div class="right text-box">{{ cInfoJson.C_2 }}</div>
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
                <div
                  class="line22"
                  :class="{
                    active: cInfoJson.C_3 && cInfoJson.C_3.indexOf(1) !== -1,
                  }"
                >
                  1 有认知障碍/痴呆、精神疾病者，在原有能力级别上提高一个等级；
                </div>
                <div
                  class="line22"
                  :class="{
                    active: cInfoJson.C_3 && cInfoJson.C_3.indexOf(2) !== -1,
                  }"
                >
                  2 近 30 天内发生过 2
                  次及以上跌倒、噎食、自杀、走失者，在原有能力级别上提高一
                  个等级；
                </div>
                <div
                  class="line22"
                  :class="{
                    active: cInfoJson.C_3 && cInfoJson.C_3.indexOf(3) !== -1,
                  }"
                >
                  3 处于昏迷状态者，直接评定为重度失能；
                </div>
                <div
                  class="line22"
                  :class="{
                    active: cInfoJson.C_3 && cInfoJson.C_3.indexOf(4) !== -1,
                  }"
                >
                  4 若初步等级确定为“3 重度失能”，则不考虑上述 1-3
                  中各情况对最终等级的影响， 等级不再提高
                </div>
                <div style="text-align: right" class="pb-10">
                  <div
                    class="text-box"
                    v-for="(i, index) in cInfoJson.C_3"
                    :key="index"
                  >
                    <span>{{ i }}</span>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <table class="evaluate-table no-bt">
            <tr>
              <td class="question">
                <span class="table-num bold">C.4 老年人能 力最终等级</span>
              </td>
              <td>
                <div class="choices">
                  <div
                    class="choice-text"
                    :class="{ active: cInfoJson.C_4 === 0 }"
                  >
                    0能力完好
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: cInfoJson.C_4 === 1 }"
                  >
                    1轻度失能
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: cInfoJson.C_4 === 2 }"
                  >
                    2中度失能
                  </div>
                  <div
                    class="choice-text"
                    :class="{ active: cInfoJson.C_4 === 3 }"
                  >
                    3重度失能
                  </div>
                  <div class="right text-box">{{ cInfoJson.C_4 }}</div>
                </div>
              </td>
            </tr>
          </table>
          <table class="evaluate-table">
            <tr>
              <td>
                <div class="sign-box">
                  <div class="sign-input">
                    <div>
                      评估员签名:
                      <div class="text-undeline">
                        {{ cInfoJson.data && cInfoJson.data.sign1 }}
                      </div>
                      、
                      <div class="text-undeline">
                        {{ cInfoJson.data && cInfoJson.data.sign2 }}
                      </div>
                    </div>
                  </div>
                  <div class="sign-input">
                    <div>
                      日期:
                      <div class="text-undeline">
                        {{ cInfoJson.data && cInfoJson.data.year1 }}
                      </div>
                      年
                      <div class="text-undeline">
                        {{ cInfoJson.data && cInfoJson.data.month1 }}
                      </div>
                      月
                      <div class="text-undeline">
                        {{ cInfoJson.data && cInfoJson.data.day1 }}
                      </div>
                      日
                    </div>
                  </div>
                </div>
                <div class="sign-box">
                  <div class="sign-input">
                    <div>
                      信息提供者签名:
                      <div class="text-undeline">
                        {{ cInfoJson.data && cInfoJson.data.sign3 }}
                      </div>
                    </div>
                  </div>
                  <div class="sign-input">
                    <div>
                      日期:
                      <div class="text-undeline">
                        {{ cInfoJson.data && cInfoJson.data.year2 }}
                      </div>
                      年
                      <div class="text-undeline">
                        {{ cInfoJson.data && cInfoJson.data.month2 }}
                      </div>
                      月
                      <div class="text-undeline">
                        {{ cInfoJson.data && cInfoJson.data.day2 }}
                      </div>
                      日
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <div class="pl-40 pt-20 pb-20">
                  <span class="bold">注：</span>老年人能力初步等级划分标准:
                </div>
                <div class="bold pl-10 pb-20">0 能力完好：</div>
                <div class="pl-40 pb-20">
                  日常生活活动、精神状态、感知觉与沟通分级均为 0，社会参与分级为
                  0 或 1
                </div>
                <div class="bold pl-10 pb-20">1 轻度失能：</div>
                <div class="pl-40 pb-20">
                  <div class="pb-20">
                    日常生活活动、精神状态、感知觉与沟通分级均为
                    0，社会参与分级为 0 或 1
                  </div>
                  <div>
                    或日常生活活动分级为
                    1，精神状态、感知觉与沟通、社会参与中至少有一项的分级为 0 或
                    1
                  </div>
                </div>
                <div class="bold pl-10 pb-20">2 中度失能：</div>
                <div class="pl-40 pb-20">
                  <div class="pb-20">
                    日常生活活动分级为 1，但精神状态、感知觉与沟通、社会参与均为
                    2，或有一项为 3；
                  </div>
                  <div>
                    或日常生活活动分级为
                    2，且精神状态、感知觉与沟通、社会参与中有 1-2 项的分级为 1
                    或 2
                  </div>
                </div>
                <div class="bold pl-10 pb-20">3 重度失能：</div>
                <div class="pl-40 pb-20">
                  <div class="pb-20">日常生活活动的分级为 3；</div>
                  <div class="pb-20">
                    或日常生活活动、精神状态、感知觉与沟通、社会参与分级均为 2
                  </div>
                  <div class="pb-20">
                    或日常生活活动分级为
                    2，且精神状态、感知觉与沟通、社会参与中至少有一项分级为 3
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="sign-img">
        <el-image
         class="img-show"
          :src="cInfoJson.signUrl"
          :preview-src-list="[cInfoJson.signUrl]"
        >
        </el-image>
        <img  class="img-export sign-img" :src="cInfoJson.signUrl" >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
  border: 1px solid #e7e7e7;
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
  border: 1px solid #e7e7e7;
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
.sign-input {
  display: inline-block;
  width: 40%;
  text-align: left;
  margin-bottom: 5px;
}
.test-img{
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: red;
}
.img-export{
  display: none;
}
.sign-img{
  width: 100%;
}
.bold {
  font-weight: 600;
}
.pt-20 {
  padding-top: 10px;
}
.pb-20 {
  padding-bottom: 10px;
}
.pl-10 {
  padding-left: 10px;
}
.active {
  font-weight: bold;
  font-size: 16px;
}
</style>
<script>
export default {
  props: ['evaluateData', 'cInfoJson']
}
</script>
