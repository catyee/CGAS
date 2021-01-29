<template>
  <div class="relation-list">
    <div class="page-title">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">关联关系</span>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">关键字:</div>
        <div>
          <el-input
            v-model="queryParams.tagName"
            placeholder="请输入标签或关系名称"
             @change="handleQuery"
          ></el-input>
        </div>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">关系名称:</div>
        <div>
          <el-select
            v-model="relation"
            placeholder="请选择"
            clearable
            @clear="handleQuery"
            @change="handleQuery"
          >
            <el-option
              v-for="item in relations"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="flex">
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-8">
        <el-button type="primary" @click="showRelationPanel=true">添加新关系</el-button>
          <el-button type="primary" @click="getRelationChart">生成关系图谱</el-button>
      </div>
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
        <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
        <el-table-column prop="tagName1" label="标签名称"> </el-table-column>

        <el-table-column label="关系名称" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-select v-model="scope.row.relate"  placeholder="请选择" @change="updateRelation(scope.row)">
                <el-option
                  v-for="item in relations"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="tagName2" label="标签名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <!-- <span class="color-green pr-10 pointer">修改关系</span> -->
            <span class="color-red pointer" @click="removeRelation(scope.row)">删除关系</span>
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
    <!-- 添加关系 -->
     <addRelationPanel :showRelationPanel="showRelationPanel" @addedRelation="initList" :panelTitle="'添加关系'" @closeModal="showRelationPanel= false"></addRelationPanel>
  </div>
</template>
<script>
import './relation-list.scss'
import { getRelationList, updateRelation, removeRelation } from '@/api/relation'
import pagination from '@/components/pagination.vue'
import { relations } from '@/libs/constant'
import addRelationPanel from '@/components/add-relation.vue'
export default {
  components: {
    pagination,
    addRelationPanel
  },
  data () {
    return {
      relation: '',
      relations: relations,
      tableData: [
      ],
      showRelationPanel: false,
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
      total: 0
    }
  },
  mounted () {
    // 获取列表
    this.initList()
  },
  methods: {
    // 生成关系图谱
    getRelationChart () {
      this.$router.push('/relation/relation-chart')
    },
    // 按关键字搜索
    handleQuery () {
      if (this.relation === '相关') {
        this.queryParams.parentTags = false
        this.queryParams.relateTags = null
      } else if (this.relation === '隶属于') {
        this.queryParams.parentTags = null
        this.queryParams.relateTags = false
      } else {
        this.queryParams.parentTags = null
        this.queryParams.relateTags = null
      }
      this.queryParams.pageNum = 1
      this.initList()
    },
    // 获取关系列表
    initList () {
      getRelationList(this.queryParams).then((res) => {
        this.tableData = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 更新关系
    updateRelation (relation) {
      updateRelation(relation).then(res => {
        if (res.code === 200) {
          this.msgSuccess('修改成功')
        } else {
          this.msgError('修改失败')
        }
      })
    },
    // 删除关系
    removeRelation (relation) {
      this.$confirm('此操作将永久删除该关系, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'confirm-pannel'
      })
        .then(() => {
          removeRelation(relation).then((res) => {
            this.msgSuccess('删除成功')
            this.handleQuery()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>
