<template>
  <el-dialog :title="title" :visible.sync="dialogTableVisible" :before-close="close">
    <el-table :data="gridData">
      <el-table-column label="序号" type="index" width="50"> </el-table-column>
      <el-table-column property="date" label="检查结果">
        <template>
          <span>不合格</span>
        </template>
      </el-table-column>
      <el-table-column
        property="inspectTime"
        label="检查时间"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="oper-btns">
            <span class="color-green pointer" @click="toDetail(scope.row)">查看报告</span>
            <span class="color-green pointer" @click="download(scope.row)"
              >下载</span
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
import { evaluateStatus } from '@/libs/constant'
export default {
  props: ['title', 'dialogTableVisible', 'gridData'],
  data () {
    return {
      evaluateStatus: evaluateStatus
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    // 下载
    download () {

    },
    // 查看
    toDetail () {

    }
  }
}
</script>
<style lang="scss" scoped>
.oper-btns {
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  span {
    padding-right: 10px;
  }
}
</style>
