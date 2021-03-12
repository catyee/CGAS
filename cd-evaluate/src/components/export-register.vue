<template>
  <div class="print">
    <el-dialog title="打印预览" :visible.sync="dialogVisible">
      <div id="print-container" class="print-container">
        <div class="print-table-title">老人基本情况</div>
        <table>
          <tr>
            <td class="bg-deep">老人身份证号：</td>
            <td>12334555555555555555</td>
          </tr>
          <tr>
            <td class="bg-deep">姓名：</td>
            <td>张三</td>
          </tr>
          <tr>
            <td class="bg-deep">老人年龄：</td>
            <td>86</td>
          </tr>
          <tr>
            <td class="bg-deep">老人手机号：</td>
            <td>822222222222226</td>
          </tr>
          <tr>
            <td class="bg-deep">接收汇款银行卡号：</td>
            <td>867872133333</td>
          </tr>
        </table>
        <div class="print-table-title">联系人</div>
        <table>
          <tr>
            <td class="bg-deep">联系人姓名：</td>
            <td>12334555555555555555</td>
          </tr>
          <tr>
            <td class="bg-deep">联系人手机号：</td>
            <td>张三</td>
          </tr>
          <tr>
            <td class="bg-deep">与老人关系：</td>
            <td>86</td>
          </tr>
        </table>
        <div class="print-table-title">老人家庭情况</div>
        <table>
          <tr>
            <td class="bg-deep">子女数量：</td>
            <td>12334555555555555555</td>
          </tr>
          <tr>
            <td class="bg-deep">由谁抚养：</td>
            <td>张三</td>
          </tr>
          <tr>
            <td class="bg-deep">是否低保：</td>
            <td>86</td>
          </tr>
        </table>

        <div class="oper-show">
            <div class="print-table-title">选择预约机构：</div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="1">
              <div class="item">单位名称：承德市双滦区人民医院</div>
              <div class="item">
                地址：河北省承德市双滦区人民医院河北省承德市双滦区人民医院
              </div>
              <div class="item">联系电话：0314-7872871</div>
            </el-checkbox>
            <el-checkbox label="2">
              <div class="item">单位名称：承德市双滦区人民医院</div>
              <div class="item">地址：河北省承德市双滦区</div>
              <div class="item">联系电话：0314-7872871</div>
            </el-checkbox>
            <el-checkbox label="3">
              <div class="item">单位名称：承德市双滦区人民医院</div>
              <div class="item">地址：河北省承德市双滦区</div>
              <div class="item">联系电话：0314-7872871</div>
            </el-checkbox>
            <el-checkbox label="4">
              <div class="item">单位名称：承德市双滦区人民医院</div>
              <div class="item">地址：河北省承德市双滦区</div>
              <div class="item">联系电话：0314-7872871</div>
            </el-checkbox>
            <el-checkbox label="5">
              <div class="item">单位名称：承德市双滦区人民医院</div>
              <div class="item">地址：河北省承德市双滦区</div>
              <div class="item">联系电话：0314-7872871</div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="print-show">
            <div class="print-table-title">预约机构：</div>
          <div class="selected-oganize">
            <div class="item">单位名称：承德市双滦区人民医院</div>
            <div class="item">
              地址：河北省承德市双滦区人民医院河北省承德市双滦区人民医院
            </div>
            <div class="item">联系电话：0314-7872871</div>
          </div>
          <div class="selected-oganize">
            <div class="item">单位名称：承德市双滦区人民医院</div>
            <div class="item">
              地址：河北省承德市双滦区人民医院河北省承德市双滦区人民医院
            </div>
            <div class="item">联系电话：0314-7872871</div>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="closeModal">打印</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.selected-oganize{
  width: 50%;
  box-sizing: border-box;
  padding: 5px 10px;
  white-space: nowrap;
  display: inline-block;
}
.print-show{
    display: none;
}
/deep/.el-checkbox {
  width: 50%;
  box-sizing: border-box;
  padding: 5px 10px;
  white-space: nowrap;
  &:hover {
    margin-right: 0px;
    white-space: nowrap;
    padding: 5px 10px;
  }
}
.item {
  white-space: normal;
  line-height: 22px;
}
/deep/ .el-checkbox__label {
  vertical-align: text-top;
}
/deep/ .el-dialog__body {
  padding: 20px 70px;
}
/deep/ .el-dialog__header {
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: 600;
}
.print-table-title {
  text-align: left;
  color: #000;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 16px 8px 16px;
  line-height: 28px;
}
table {
  width: 100%;
}
.bg-deep {
  background-color: #efefef;
  width: 40%;
}
table tr td {
  border: 1px solid #cdcdcd;
  padding: 10px 12px;
  color: rgb(37, 35, 35);
}
</style>
<script>
export default {
  props: {
    dialogVisible: Boolean
  },
  data () {
    return {
      checkList: [1, 2, 3]
    }
  },
  methods: {
    // 关闭modal
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>
