<template>
  <div>
    <!-- 中文输入法状态 input会同时触发两次 所以此处设置type=number可以避免这个问题 -->
    <input
    :disabled="disabled"
    :readonly="disabled"
      type="number"
      v-for="p in inputNums"
      :key="p"
      class="input"
      @keyup.delete="deleteFun($event, p)"
      @input.self="inputFun($event, p)"
      :value="code[p - 1]"
    />
  </div>
</template>
<style lang="scss" scoped>
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
  // 避免hover的时候出现位置移动
  &:hover{
    margin-right: 1px;
  }
  &:focus{
    margin-right: 1px;
  }
}
</style>
<script>
export default {
  data () {
    return {
      // 将传递过来的字符串变为数组
      code: this.value.split('')
    }
  },
  watch: {
    value (newVal) {
      this.code = newVal.split('')
    },
    code (newVal) {
      this.$emit('input', newVal.join(''))
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    // 输入框的个数
    inputNums: {
      type: Number,
      default: 6
    },
    // 输入框的字符串值
    value: {
      type: String,
      default: ''
    }
  },
  mounted () {

  },
  methods: {
    // 删除操作
    deleteFun (e, p) {
      const ele = e.target
      const siblingsNode = ele.parentNode.children
      if (!e.data) {
        this.$delete(this.code, p - 1)
        if (p <= 2) { // 边界值
          p = 2
        }
        siblingsNode[p - 2].focus()
        return false
      }
    },
    // 监听输入
    inputFun (e, p) {
      const ele = e.target
      const siblingsNode = ele.parentNode.children
      //   if (!e.data) {
      //     this.$delete(this.code, p - 1)
      //     if (p <= 2) { // 边界值
      //       p = 2
      //     }
      //     siblingsNode[p - 2].focus()
      //     return false
      //   }
      const value = e.target.value.replace(/\W/g, '').slice(-1)
      ele.value = value
      this.$set(this.code, p - 1, value)
      if (p >= siblingsNode.length - 1) { // 边界值
        p = siblingsNode.length - 1
      }
      if (value) { // 上一个元素获得焦点
        siblingsNode[p].focus()
      }
    }
  }
}
</script>
