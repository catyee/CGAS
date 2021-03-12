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
        <el-table-column label="评估日期" prop="date"> </el-table-column>
        <el-table-column prop="name" label="老人姓名"> </el-table-column>
        <el-table-column prop="idCard" label="身份证号" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="age" label="年龄" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="child" label="子女数" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="dependents"
          label="由谁抚养"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="isPoor" label="是否低保" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="account" label="银行卡"> </el-table-column>
        <el-table-column prop="account" label="联系人姓名"> </el-table-column>
        <el-table-column prop="account" label="与老人关系"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="color-green" @click="edit(scope.row.id)">
              编辑
            </div>
            <div class="color-green">删除</div>
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
        pageSize: 20
      },
      // 总条数
      total: 0,
      list: [
        {
          id: 1,
          year: '2020',
          idCard: '11111111',
          name: '张三',
          age: 65,
          phone: '123',
          child: 2,
          dependents: '22',
          isPoor: 33,
          account: '123',
          lxr: '111',
          lxrPhone: '123',
          relation: '本人',
          status: '未评估'
        }
      ]
    }
  },
  methods: {
    // 按关键字搜索
    handleQuery () {
      this.queryParams.pageNum = 1
      this.initList()
    },
    // 获取列表
    initList () {
      //   getVideoList(this.queryParams).then(res => {
      //     this.tableData = res.rows
      //     this.total = parseInt(res.total)
      //   })
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
