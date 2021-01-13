<template>
  <div class="tag-list">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">标签列表</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">标签名称:</div>
        <div>
          <el-input v-model="username" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="flex">
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-8 pr-16">
         <el-button type="primary">添加新标签</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
        <el-table-column prop="tagName" label="标签名称"> </el-table-column>
        <el-table-column prop="videoAccount" label="相关视频数" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template>
            <span class="color-green pr-10 pointer">修改名称</span>
            <span class="color-green pr-10 pointer">添加关系</span>
            <span class="color-red pointer">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import './tag-list.scss'
export default {
  data () {
    return {
      username: '', // 用户名
      tableData: [
        {
          tagName: '喂饭',
          videoAccount: '2'
        },
        {
          tagName: '喂饭',
          videoAccount: '2'
        }
      ]
    }
  },
  methods: {
    handleSelectionChange () {},
    changeStatus (status) {
      console.log(status, 21)
    }
  }
}
</script>
