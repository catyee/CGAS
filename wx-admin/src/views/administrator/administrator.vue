<template>
  <div class="administrator">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">管理员列表</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">用户名称:</div>
        <div>
          <el-input v-model="username" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="flex">
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-8">
        <div class="oper-left">
          <el-button type="primary" class="enable">批量启用</el-button>
          <el-button type="warning">批量禁用</el-button>
          <el-button type="primary">批量删除</el-button>
        </div>
        <div class="oper-right pr-16">
          <el-button type="primary">添加</el-button>
        </div>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="username" label="用户名" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="用户状态" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-switch
              @change="changeStatus"
              v-model="scope.row.status"
              active-color="#1677FF"
              inactive-color="#CCCCCC"
              :active-value="1"
              :inactive-value="0"
              :inactive-text="!scope.row.status? '禁用': '启用'"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="passwordStatus"
          label="密码状态"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template>
            <span class="color-green pr-10 pointer">重置密码</span>
            <span class="color-red pointer">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import './administrator.scss'
export default {
  data () {
    return {
      username: '', // 用户名
      tableData: [
        {
          name: '管理员',
          username: '15117992385',
          status: 1,
          passwordStatus: '正常'
        },
        {
          name: '管理员',
          username: '15117992385',
          status: 0,
          passwordStatus: '正常'
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
