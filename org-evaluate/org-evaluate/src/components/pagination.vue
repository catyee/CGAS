<template>
  <!-- 分页 -->
  <div class="pagination">
    <el-pagination
      background
      @size-change="initList"
      @current-change="initList"
      :page-sizes="[10,20]"
      :current-page.sync="queryParams.pageNum"
      :page-size.sync="queryParams.pageSize"
      layout="total,sizes, prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: ['total', 'queryParams'],
  methods: {
    initList () {
      this.$emit('initList')
    }
  }
}
</script>
<style lang="scss" scoped>
    .pagination{
        text-align: center;
        margin-bottom: 40px;
        padding-top: 50px;
        background-color: #fff;
        padding-bottom: 100px;
    }
</style>
