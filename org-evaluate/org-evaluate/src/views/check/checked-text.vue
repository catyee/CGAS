<template>
  <div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2 }"
      v-model="inputValue"
      placeholder="请输入内容"
      @change="change"
    >
    </el-input>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'bindData',
    event: 'changeData'
  },
  watch: {
    bindData: {
      handler (v) {
        this.inputValue = v
      },
      immediate: true,
      deep: true
    }

  },
  props: {
    bindData: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      inputValue: this.bindData
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
/deep/.el-textarea__inner{
  font-size: 12PX;
}
</style>
