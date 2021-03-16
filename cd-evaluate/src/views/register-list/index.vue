<template>
  <div class="register-list">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">登记列表</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f12 no-wrap">关键字:</div>
        <div>
          <el-input
            placeholder="姓名/身份证号/手机号"
            v-model="queryParams.searchValue"
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex">
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </div>
    </div>
    <div class="list-container pl-16">
      <div class="oper-container pb-8">
        <el-button type="primary"  @click="toRegister">新建登记</el-button>
      </div>
      <el-table
        class="table"
        :data="list"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column label="序号" width="70px">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="登记年份" prop="registerYear">
            <template slot-scope="scope">
              {{scope.row.registerYear.slice(0,4) }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="老人姓名"> </el-table-column>
        <el-table-column prop="idNumber" label="身份证号" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="age" label="年龄" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="childNumber" label="子女数" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="dependent"
          label="由谁抚养"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="minimumLiving" label="是否低保" show-overflow-tooltip>
          <template slot-scope="scope">
              {{scope.row.minimumLiving === 0 ? '否':'是'}}
          </template>
        </el-table-column>
        <el-table-column prop="cardNumber" label="银行卡"> </el-table-column>
        <el-table-column prop="contactName" label="联系人姓名"> </el-table-column>
        <el-table-column prop="relate" label="与老人关系"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span class="color-green" @click="edit(scope.row.registerId)">
              编辑
            </span>
            <span class="color-green" @click="removeRegister(scope.row.registerId)">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      :total="total"
      :queryParams="queryParams"
      @initList="initList"
    ></pagination>
  </div>
</template>
<script>
import './index.scss'
import pagination from '@/components/pagination.vue'
import { getRegisterList, removeRegister } from '@/api/register'
export default {
  components: {
    pagination
  },
  data () {
    return {
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 20,
        // 查询关键字
        searchValue: null
      },
      // 总条数
      total: 0,
      list: [
      ]
    }
  },
  mounted () {
    this.initList()
  },
  methods: {
    // 按关键字搜索
    handleQuery () {
      this.queryParams.pageNum = 1
      this.initList()
    },
    // 获取列表
    initList () {
      getRegisterList(this.queryParams).then(res => {
        this.list = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 删除登记
    removeRegister (id) {
      this.$confirm('此操作将永久删除该登记信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeRegister(id).then(res => {
          this.msgSuccess('删除成功')
          this.handleQuery()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 新建登记
    toRegister () {
      this.$router.push({ path: '/register/' })
    },
    // 编辑登记
    edit (id) {
      this.$router.push({ path: '/register/' + id })
    }
  }
}
</script>
