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
        <newTag @addedTag="handleQuery"></newTag>
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
            <span class="color-green pr-10 pointer" @click="addRelation(scope.row.tagId)"
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
    <addRelationPanel :showRelationPanel="showRelationPanel" :editTagId="currentTagId" :panelTitle="'添加关系'" @closeModal="showRelationPanel= false"></addRelationPanel>
  </div>
</template>
<script>
import './tag-list.scss'
import { getTagList, updateTag, deleteTag } from '@/api/relation'
import pagination from '@/components/pagination.vue'
import newTag from '@/components/add-tag.vue'
import addRelationPanel from '@/components/add-relation.vue'
export default {
  components: {
    pagination,
    newTag,
    addRelationPanel
  },
  data () {
    return {
      // 关系弹框
      showRelationPanel: false,
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
      // 标签列表
      tableData: [],
      // 当前正在编辑的标签id
      currentTagId: null
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
    addRelation (id) {
      // 给弹框组件所需值 赋值
      this.showRelationPanel = true
      this.currentTagId = id
    }
  }
}
</script>
