<template>
  <div class="tag-list">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">标签列表</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">标签名称:</div>
        <div>
          <el-input
            v-model="queryParams.tagName"
            placeholder="请输入内容"
            @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex">
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-8 pr-16">
        <el-button type="primary" @click="addNewTag">添加新标签</el-button>
      </div>
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="tagName" label="标签名称"> </el-table-column>
        <el-table-column
          prop="videoAccount"
          label="相关视频数"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <span
              class="color-green pr-10 pointer"
              @click="updateTag(scope.row.tagId)"
              >修改名称</span
            >
            <span class="color-green pr-10 pointer" @click="addRelation"
              >添加关系</span
            >
            <span class="color-red pointer" @click="deleteTag(scope.row.tagId)"
              >删除</span
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <pagination
      :total="total"
      :queryParams="queryParams"
      @initList="initList"
    ></pagination>

    <!-- 修改关系弹框 -->
    <div class="relation-panel">
      <el-dialog
        :visible.sync="showRelationPanel"
        width="50%"
        :close-on-click-modal="false"
      >
        <div slot="title" class="title">{{ panelTitle }}</div>
        <div>
          <el-form
            label-position="top"
            :inline="true"
            ref="ruleForm"
            class="form"
          >
            <el-form-item label="标签1">
               <el-select v-model="value" filterable placeholder="请选择">
                <el-option
                  v-for="item in allTagList"
                  :key="item.tagId"
                  :label="item.tagName"
                  :value="item.tagId"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="关系名称">
              <el-select v-model="value" filterable placeholder="请选择">
                <el-option
                  v-for="item in allTagList"
                  :key="item.tagId"
                  :label="item.tagName"
                  :value="item.tagId"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="标签2">
                <el-select v-model="value" filterable placeholder="请选择">
                <el-option
                  v-for="item in allTagList"
                  :key="item.tagId"
                  :label="item.tagName"
                  :value="item.tagId"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showRelationPanel = false">取 消</el-button>
          <el-button type="primary" @click.prevent="submitUser('ruleForm')"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import './tag-list.scss'
import { getTagList, addTag, updateTag, deleteTag } from '@/api/relation'
import pagination from '@/components/pagination.vue'
export default {
  components: {
    pagination
  },
  data () {
    return {
      // 关系弹框
      showRelationPanel: true,
      panelTitle: '添加关系', // 关系弹框 title
      allTagList: [], // 所有的标签
      // getList查询参数
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 20,
        // 查询参数
        tagName: ''
      },
      // 总条数
      total: 0,
      tableData: []
    }
  },
  mounted () {
    // 获取列表
    this.initList()
  },
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
            this.msgSuccess('添加成功')
            this.handleQuery()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    },
    // 按关键字搜索
    handleQuery () {
      this.queryParams.pageNum = 1
      this.initList()
    },
    // 获取用户列表
    initList () {
      getTagList(this.queryParams).then((res) => {
        this.tableData = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 修改标签名称
    updateTag (id) {
      this.inputTagName('修改标签')
        .then(({ value }) => {
          const data = {
            tagName: value,
            tagId: id
          }
          updateTag(data).then((res) => {
            this.msgSuccess('修改成功')
            this.handleQuery()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    },
    // 删除标签
    deleteTag (id) {
      this.$confirm('此操作将永久删除该标签, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'confirm-pannel'
      })
        .then(() => {
          deleteTag(id).then((res) => {
            this.msgSuccess('修改成功')
            this.handleQuery()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 添加关系
    addRelation () {
      //  this.$router.push({ path: '/user/deduce/' + id, query: { create: 1 } })
      // this.$route.push('/')
    }
  }
}
</script>
