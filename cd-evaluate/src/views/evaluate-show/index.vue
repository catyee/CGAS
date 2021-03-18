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
      <div class="wrap" @scroll="scrollEvent">
          <div class="center-wrap mt-16">
              <div  class="center">
                  <div  class="tabs">
                      <exportEvaluate></exportEvaluate>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'
import exportEvaluate from '@/components/export-evaluate.vue'
export default {
  components: {
    exportEvaluate
  },
  mounted () {
    if (!location.hash) return
    this.toHash(location.hash)
  },
  methods: {
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
