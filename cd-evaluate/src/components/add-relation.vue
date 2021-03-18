<template>
        <!-- 修改关系弹框 -->
    <div class="relation-panel">
      <el-dialog
        :visible.sync="showPanel"
        width="50%"
        :close-on-click-modal="false"
      >
        <div slot="title" class="title">{{ panelTitle }}</div>
        <div>
          <el-form
            label-position="top"
            :inline="true"
            :rules="rules"
            ref="ruleForm"
            class="form"
            :model="relationForm"
          >
            <el-form-item label="标签1" prop="tag1">
               <el-select v-model="relationForm.tag1" filterable placeholder="请选择">
                <el-option
                  v-for="item in tagList"
                  :key="item.tagId"
                  :label="item.tagName"
                  :value="item.tagId"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="关系名称"  prop="currentRelation">
              <el-select v-model="relationForm.currentRelation"  placeholder="请选择">
                <el-option
                  v-for="item in relations"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="标签2" prop="tag2">
                <el-select v-model="relationForm.tag2" filterable placeholder="请选择">
                <el-option
                  v-for="item in tagList"
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
          <el-button @click="closePanel">取 消</el-button>
          <el-button type="primary" @click.prevent="submitUser('ruleForm')"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
</template>
<script>
import { relations } from '@/libs/constant'
import { getTagList, addRelation } from '@/api/relation'
export default {
  props: {
    // 控制弹框的出现
    showPanel: Boolean,
    editTagId: Number
  },
  data () {
    return {
      // 表单校验规则
      rules: {
        tag1: [
          { required: true, message: '请选择标签1', trigger: 'change' }
        ],
        tag2: [
          { required: true, message: '请选择标签2', trigger: 'change' }
        ],
        currentRelation: [
          { required: true, message: '请选择关系', trigger: 'blur' }
        ]
      },
      // 标签列表
      tagList: [],
      // 关系类型
      relations: relations,
      // getList查询参数
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小 一页显示 不分页
        pageSize: 9999999
      },
      relationForm: {
        // 标签1
        tag1: null,
        // 标签2
        tag2: null,
        // 选中的关系
        currentRelation: '' // 当前关系
      }

    }
  },
  // mounted只会执行一次
  mounted () {
    this.getTagList()
  },
  // 监听父组件的tagId
  watch: {
    editTagId () {
      this.relationForm.tag1 = this.editTagId
    }
  },
  // beforeUpdate 数据更新时会调用 此时vue实例中的数据已经是最新的 但在页面上数据还是旧的 此视可以进一步更改状态 这不会触发附加的渲染过程
  // updated 数据更新并且DOM渲染完成之后 在此时组件DOM已经更新 可以执行依赖于DOM的操作 避免在此更改状态 可能会导致无限循环
  // beforeUpdate () {
  //   // 更改tag1的状态
  //   if (this.editTagId) {
  //     this.relationForm.tag1 = this.editTagId
  //   }
  // },
  methods: {
    // 获取全部标签
    getTagList () {
      getTagList(this.queryParams).then((res) => {
        this.tagList = res.rows
      })
    },
    // 关闭弹框
    closePanel () {
      this.$emit('closeModal')
    },
    // 提交关系
    submitUser () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const { tag1, tag2 } = this.relationForm
          // 标签1和标签2相同 不允许添加关系
          if (tag1 === tag2) {
            this.msgError('请对两个不同的标签添加关系')
            return false
          }
          addRelation(this.relationForm).then(res => {
            this.msgSuccess('添加成功')
            this.$emit('addedRelation')
            this.closePanel()
          })
        } else {
        //  console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
    .relation-panel{
    .title{
        text-align: center;
        color: #2B3940;
        font-weight: 600;
        font-size: 18px;

    }
    .el-dialog__header{
        padding: 32px 0;
    }
    .el-dialog__body{
        padding: 0 32px 32px 32px;
    }
    .form{
        display: flex;
    }
    .el-form-item{
        flex: 1;
    }
    .el-form-item__label{
        box-sizing: border-box;
        padding-left: 16px;
        color: #7E888A;
    }
}
</style>
