<template>
  <div>
    <checkTypeNormal v-if="assessType === 1"></checkTypeNormal>
    <checkTypeMonth v-if="assessType === 2"></checkTypeMonth>
    <checkTypeYear v-if="assessType === 3"></checkTypeYear>
  </div>
</template>
<script>
import checkTypeNormal from './check-type-normal.vue'
import checkTypeYear from './check-type-year.vue'
import checkTypeMonth from './check-type-month.vue'
export default {
  components: {
    checkTypeNormal, // 208项大检查组件
    checkTypeYear, // 年度检查
    checkTypeMonth // 月度检查
  },
  data () {
    return {
      assessType: null
    }
  },
  created () {
    // 如果没有传递data  跳转回去 从项目列表过来必须传data
    let data = this.$route.query.data
    if (!data) {
      this.$router.go(-1)
    }
    data = JSON.parse(data)
    // 获取到检查类型
    this.assessType = data.assessType
  }
}
</script>
