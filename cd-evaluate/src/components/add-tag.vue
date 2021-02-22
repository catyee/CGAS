<template>
  <div>
    <el-button type="primary" @click="addNewTag">添加新标签</el-button>
  </div>
</template>
<script>
import { addTag } from '@/api/relation'
export default {
  methods: {
    // 显示标签名字弹框
    inputTagName (title) {
      return this.$prompt('请输入新标签名称', title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: function (value) {
          value = value.trim()
          if (!value.length) return '请输入新标签名称'
        }
      })
    },
    // 添加新标签
    addNewTag () {
      this.inputTagName('添加标签')
        .then(({ value }) => {
          const data = {
            tagName: value
          }
          addTag(data).then((res) => {
            if (res.code === 200) {
              this.msgSuccess('添加成功')
              this.$emit('addedTag', { tagId: res.data.tagId, tagName: res.data.tagName })
            } else {
              this.msgError('添加失败')
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
