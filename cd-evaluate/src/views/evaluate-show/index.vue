<template>
  <div class="evaluate-show pt-16 pl-27">
    <div class="left" id="left">
      <div class="flex pt-16">
        <div class="title-line"></div>
        <span class="pl-4 f14">评估</span>
      </div>
      <div class="hash-list">
        <a
          href="#tab-A1"
          class="pt-30"
          :class="activeClass === 0 ? 'active' : ''"
          @click="getActiveClass(0)"
          >A.1评估基本信息表</a
        >
        <a
          href="#tab-A2"
          :class="activeClass === 1 ? 'active' : ''"
          @click="getActiveClass(1)"
          >A.2被评估者的基本信息表</a
        >
        <a
          href="#tab-A3"
          :class="activeClass === 2 ? 'active' : ''"
          @click="getActiveClass(2)"
          >A.3信息提供者及联系人信息表</a
        >
        <a
          href="#tab-B1"
          :class="activeClass === 3 ? 'active' : ''"
          @click="getActiveClass(3)"
          >B.1日常生活活动评估表</a
        >
        <a
          href="#tab-B2"
          :class="activeClass === 4 ? 'active' : ''"
          @click="getActiveClass(4)"
          >B.2 精神状态评估表</a
        >
        <a
          href="#tab-B3"
          :class="activeClass === 5 ? 'active' : ''"
          @click="getActiveClass(5)"
          >B.3 感知觉与沟通评估表</a
        >
        <a
          href="#tab-B4"
          :class="activeClass === 6 ? 'active' : ''"
          @click="getActiveClass(6)"
          >B.4 社会参与评估表</a
        >
        <a
          href="#sign-export"
          :class="activeClass === 7 ? 'active' : ''"
          @click="getActiveClass(7)"
          >C 老年人能力评估报告</a
        >
      </div>
    </div>
    <div class="wrap" @scroll="scrollEvent">
      <div class="center-wrap mt-16">
        <div class="center">
          <div class="tabs">
            <exportEvaluate
            id="evaluate"
              :cInfoJson="cInfoJson"
              :evaluateData="evaluateData"
            ></exportEvaluate>
          </div>
        </div>
      </div>
      <div class="save">
        <el-button type="primary" @click="download" v-loading.fullscreen.lock="fullscreenLoading">下载</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'
import {
  exportTable,
  getEvaluate
} from '@/api/evaluate'
import { getHtml } from '@/views/evaluate/export-style'
import exportEvaluate from '@/components/export-evaluate.vue'
export default {
  components: {
    exportEvaluate
  },
  data () {
    return {
      fullscreenLoading: false,
      activeClass: 0,
      // 表格评估数据
      evaluateData: {
        A1EvaluateYear: null,
        // A1 评估基本信息表
        A_1_1: '', // 评估编号
        A_1_2: new Date(), // 评估基准日期 默认今天
        A_1_3: null, // 评估原因
        // A2被评估者的基本信息表
        A_2_1: null, // 姓名
        A_2_2: null, // 性别
        A_2_3: null, // 出生日期
        A_2_4: '', // 身份证号
        A_2_5: '', // 社保卡号
        // 民族
        A_2_6: {
          value: null,
          text: null
        },
        A_2_7: null, // 文化程度
        // 宗教信仰
        A_2_8: {
          value: null,
          text: null
        },
        A_2_9: null, // 婚姻状况
        A_2_10: null, // 居住情况
        // 医疗费用支付方式
        A_2_11: {
          value: [],
          text: null
        },
        // 经济来源
        A_2_12: {
          value: [],
          text: null
        },
        // 疾病诊断
        A_2_13_1: null, // 痴呆
        A_2_13_2: null, // 精神疾病
        A_2_13_3: null, // 慢性疾病
        // 近30天内意外事件
        A_2_14_1: null, // 跌倒
        A_2_14_2: null, // 走失
        A_2_14_3: null, // 噎食
        A_2_14_4: null, // 自杀
        A_2_14_5: null, // 其他
        // A3信息提供者及联系人信息表
        A_3_1: null, // 信息提供者的姓名
        A_3_2: {
          // 信息提供者与老人的关系
          value: null,
          text: null
        },
        A_3_3: null, // 联系人姓名
        A_3_4: null, // 联系人电话
        // B1日常生活活动评估表
        B_1_1: null, // 进食
        B_1_2: null, // 洗澡
        B_1_3: null, // 修饰
        B_1_4: null, // 穿衣
        B_1_5: null, // 大便控制
        B_1_6: null, // 小便控制
        B_1_7: null, // 如厕
        B_1_8: null, // 床椅转移
        B_1_9: null, // 平地行走
        B_1_10: null, // 上下楼梯
        B_1_11: null, // 日常生活 活动总分
        B_1: '', // 日常生活 活动分级
        // B2 精神状态评估表
        B_2_1: {
          // 认知功能测验
          img: '', // 测验图片
          text1: '',
          text2: '',
          text3: '',
          score: null
        },
        B_2_2: null, // 攻击行为
        B_2_3: null, // 抑郁症状
        B_2_4: null, // 精神状态总分
        B_2: '', // 精神状态分级

        // 感知觉与沟通评估表
        B_3_1: null, // 意识水平
        B_3_2: null, // 视力
        B_3_3: null, // 听力
        B_3_4: null, // 沟通交流
        B_3: '', // 感知觉与沟通分级
        // B4 社会参与评估表
        B_4_1: null, // 生活能力
        B_4_2: null, // 工作能力
        B_4_3: null, // 时间/空间定向
        B_4_4: null, // 人物定向
        B_4_5: null, // 社会交往能力
        B_4_6: null, // 社会参与总分
        B_4: null // 社会参与分级
      },
      // 与后台通信的附录c的数据
      cInfoJson: {
        C_1_1: null, // 日常生活活动等级
        C_1_2: null, // 精神状态
        C_1_3: null, // 感知觉与沟通
        C_1_4: null, // 社会参与
        C_2: null, // 老年人能力初步等级
        C_3: null, // 等级变更条款
        C_4: null, // 老年人能力最终等级
        signUrl: '', // 签名页图片地址
        data: {
          sign1: null, // 评估员签名1
          sign2: null, // 评估员签名2
          year1: null, // 签名年1
          month1: null, // 签名月1
          day1: null, // 签名日1
          sign3: null, // 信息提供者签名
          year2: null, // 签名年2
          month2: null, // 签名月2
          day2: null // 签名日2
        }
      }
    }
  },
  created () {
    // 获取assessId
    this.assessId = this.$route.params.id
    this.getEvaluate()
  },
  mounted () {
    if (!location.hash) return
    this.toHash(location.hash)
  },
  methods: {
    // 下载
    download () {
      this.fullscreenLoading = true
      const _this = this
      try {
        const evaluate = document.getElementById('evaluate').innerHTML
        const html = getHtml(evaluate)
        exportTable(html).then((res) => {
          window.open(
          `${process.env.VUE_APP_BASE_API}/common/download?fileName=${res.msg}&delete=true`
          )
          _this.fullscreenLoading = false
        }).catch(function (e) {
          _this.fullscreenLoading = false
          _this.msgError(e)
        })
      } catch (e) {
        _this.fullscreenLoading = false
        _this.msgError(e)
      }
    },
    // 获取评估信息 并且监听evaluateData变化
    getEvaluate () {
      getEvaluate(this.assessId).then((res) => {
        const data = res.data
        if (data.aInfoJson) {
          this.evaluateData = JSON.parse(data.aInfoJson)
        }
        if (data.cInfoJson) {
          this.cInfoJson = JSON.parse(data.cInfoJson)
        }
      })
    },
    // 跳转到指定hash
    toHash (hash) {
      document
        .querySelector(hash)
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
    // 监听滚动条
    scrollEvent (e) {
      const scrollItems = document.querySelectorAll('.hash-tab')
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
      const jump = document.querySelectorAll('.hash-tab')
      jump[index].scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>
