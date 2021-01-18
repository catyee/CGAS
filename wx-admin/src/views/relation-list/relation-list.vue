<template>
  <div class="relation-list">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">关联关系</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">关键字:</div>
        <div>
          <el-input v-model="username" placeholder="请输入标签或关系名称"></el-input>
        </div>
      </div>
       <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">关系名称:</div>
        <div>
          <el-select v-model="relation" placeholder="请选择">
          <el-option
            v-for="item in relations"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        </div>
      </div>
      <div class="flex">
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-8">
        <el-button type="primary">添加新关系</el-button>
        <el-button type="primary">生成关系图谱</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
        <el-table-column prop="preTag" label="标签名称"> </el-table-column>
        <el-table-column prop="nextTag" label="标签名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="关系名称" show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-if="scope.row.relation ===1">隶属于</span>
            <span v-if="scope.row.relation ===2">相关</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template>
            <!-- <span class="color-green pr-10 pointer">修改关系</span> -->
            <span class="color-red pointer">删除关系</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import './relation-list.scss'
export default {
  data () {
    return {
      username: '', // 用户名
      relation: -1,
      relations: [
        { label: '全部', value: -1 },
        { label: '隶属于', value: 1 },
        { label: '相关', value: 2 }
      ],
      tableData: [
        {
          preTag: '自理老人',
          nextTag: '防护',
          relation: 1
        },
        {
          preTag: '防噎食',
          nextTag: '防护',
          relation: 1
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
