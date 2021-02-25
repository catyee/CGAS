<template>
  <div class="input-wrap">
    <input
      type="text"
      class="input-text"
      :value="inputValue"
      @input="input($event.target.value)"
    />
  </div>
</template>
<style lang="scss" scoped>
.input-text {
  font-size: 14px;
  padding: 2px 5px;
  border: none;
  border-bottom: 1px solid #333;
}
.input-wrap {
  display: inline-block;
}
</style>
<script>
export default {
  // value: inputv-model绑定的值
  // radioValue：radio的当前值
  // type 需要显示input值的radio的值
  props: ['value', 'radioValue', 'type'],
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    radioValue (newVal) {
      // 如果radio的值不为input绑定的radio的值 将其值置为空
      if (newVal !== this.type) {
        this.inputValue = ''
      }
      this.$emit('input', this.inputValue)
    },
    value (newVal) {
      this.inputValue = newVal
    }
  },
  methods: {
    input (e) {
      this.$emit('input', e)
    }
  }
}
</script>
