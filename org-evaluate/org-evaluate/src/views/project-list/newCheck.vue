<template>
  <el-dialog title="新建检查" :visible.sync="newCheckVisible" width="50%">
    <el-dialog
      width="30%"
      title="内层 Dialog"
      :visible.sync="linkCheckVisible"
      append-to-body
    >
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="newCheckVisible = false">取 消</el-button>
      <el-button type="primary" @click="linkCheckVisible = true"
        >打开内层 Dialog</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    // 是否显示新建检查弹框
    newCheckVisible: Boolean
  },
  data () {
    return {
      // 是否显示关联检查弹框
      linkCheckVisible: false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
