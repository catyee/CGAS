<template>
  <div>
    <el-radio-group v-model="radioValue" @change="change">
      <el-radio v-for="item in grades" :label="item" :key="item">{{
        item
      }}</el-radio>
    </el-radio-group>
  </div>
</template>
<script>
import { checkedGrade } from '@/libs/constant.js'
export default {
  model: {
    prop: 'bindValue',
    event: 'changeData'
  },
  watch: {
    // 必须监听prop的变化 否则当prop数据变化时 数据不同同步到这里
    bindValue: {
      handler (v) {
        this.radioValue = v
      },
      immediate: true,
      deep: true
    }
  },
  props: {
    bindValue: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      radioValue: this.bindValue,
      grades: checkedGrade
    }
  },
  methods: {
    change (v) {
      this.$emit('changeData', v)
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .el-radio {
  margin-right: 8px;
  &:hover {
    margin-right: 8px;
  }
  &:last-child {
    margin-right: 0;
  }
    &:last-child:hover {
    margin-right: 0;
  }
}
</style>
