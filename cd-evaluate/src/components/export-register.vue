<template>
  <div class="print">
    <el-dialog title="打印预览"  :close-on-click-modal= false
      :close-on-press-escape= false :visible="dialogVisible" @close="closeModal">
      <div id="print-container" class="print-container">
        <div class="print-table-title">老人基本情况</div>
        <table>
          <tr>
            <td class="bg-deep">老人身份证号：</td>
            <td>{{registerData.idNumber}}</td>
          </tr>
          <tr>
            <td class="bg-deep">姓名：</td>
            <td>{{registerData.name}}</td>
          </tr>
          <tr>
            <td class="bg-deep">老人年龄：</td>
            <td>{{registerData.age}}</td>
          </tr>
          <tr>
            <td class="bg-deep">老人手机号：</td>
            <td>{{registerData.phone}}</td>
          </tr>
          <tr>
            <td class="bg-deep">接收汇款银行卡号：</td>
            <td>{{registerData.cardNumber}}</td>
          </tr>
        </table>
        <div class="print-table-title">联系人</div>
        <table>
          <tr>
            <td class="bg-deep">联系人姓名：</td>
            <td>{{registerData.contactName}}</td>
          </tr>
          <tr>
            <td class="bg-deep">联系人手机号：</td>
            <td>{{registerData.contactPhone}}</td>
          </tr>
          <tr>
            <td class="bg-deep">与老人关系：</td>
            <td>{{registerData.relate}}</td>
          </tr>
        </table>
        <div class="print-table-title">老人家庭情况</div>
        <table>
          <tr>
            <td class="bg-deep">子女数量：</td>
            <td>{{registerData.childNumber}}</td>
          </tr>
          <tr>
            <td class="bg-deep">由谁抚养：</td>
            <td>{{registerData.dependent}}</td>
          </tr>
          <tr>
            <td class="bg-deep">是否低保：</td>
            <td>{{registerData.minimumLiving? '是': '否'}}</td>
          </tr>
        </table>

        <div class="oper-show">
            <div class="print-table-title">选择预约机构：</div>
          <el-checkbox-group v-model="checkList" @change="getSelectedOganization">
            <el-checkbox :label="oganization.userId" v-for=" oganization in oganizations" :key="oganization.userId">
              <div class="item">单位名称：{{oganization.nickName}}</div>
              <div class="item">
                地址：{{oganization.address}}
              </div>
              <div class="item">联系电话：{{oganization.phonenumber}}</div>
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="print-show">
          <div class="print-table-title">预约机构：</div>
          <div v-for="item in checkedOganizations" class="selected-oganize"  :key="item.userId">
            <div class="item">单位名称：{{item.nickName}}</div>
            <div class="item">
              地址：{{item.address}}
            </div>
            <div class="item">联系电话：{{item.phonenumber}}</div>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal" >取 消</el-button>
        <el-button type="primary" @click="confirmPrint">打印</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="showJumpTip"
      width="30%">
      <span>{{duration}}s之后将跳转到列表页</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showJumpTip = false">取 消</el-button>
        <el-button type="primary" @click="jump">跳 转</el-button>
      </span>
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
  // overflow: hidden;
  // .selected-oganize{float: left;}
   display: none;
}
.el-button + .el-button{
  margin-left: 10px;
  &:hover{
     margin-left: 10px;
  }
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
import {
  getUserList
} from '@/api/user'
import { exportTable } from '@/api/evaluate'
export default {
  props: {
    dialogVisible: Boolean,
    registerData: Object
  },
  data () {
    // http://101.201.211.8:8080/man/system/user/list?pageNum=1&pageSize=20&roleIds=3
    // http://101.201.211.8:8080/man/system/user/list?pageNum=1&pageSize=20&roleIds=3
    return {
      // 提示5s之后跳转
      duration: 5,
      // 跳转提示框
      showJumpTip: false,
      // 跳转定时器
      jumpTipTimer: null,
      oganizations: [], // 所有的评估机构
      // getList查询机构列表 查询参数
      queryParams: {
        // 页数
        pageNum: 1,
        // 查询参数
        nickName: '',
        // 每页的大小
        pageSize: 20,
        // 只显示机构
        roleIds: 3,
        status: '0' // 启动的
      },
      // 选择的评估机构id
      checkList: [],
      // 选择的评估机构
      checkedOganizations: []
    }
  },
  mounted () {
    // 获取机构列表
    this.initList()
  },
  beforeDestroy () {
    this.showJumpTip = false
    // 组件销毁之前清空定时器
    window.clearInterval(this.jumpTipTimer)
  },
  methods: {
    // 获取机构列表
    initList () {
      getUserList(this.queryParams).then((res) => {
        this.oganizations = res.rows
        this.total = parseInt(res.total)
      })
    },
    // 关闭modal
    closeModal () {
      this.$emit('closeModal')
    },
    getSelectedOganization () {
      this.checkedOganizations = []
      this.checkList.forEach(item => {
        const oganization = this.oganizations.filter(o => {
          return o.userId === item
        })
        this.checkedOganizations.push(oganization[0])
      })
    },
    confirmPrint () {
      this.$confirm('您确定要保存该登记信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // this.print()
          this.$emit('toSave')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    // 打印
    print () {
      const mainHtml = document.getElementById('print-container').innerHTML
      const html = `
        <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title></title>
              <style>
               * {
                padding: 0;
                margin: 0;
              }

              html,
              body {
                  font-size: 14px;
                  width: 100%;
                  box-sizing:border-box;
              }
              .print-container{
                width: 100%;
                box-sizing:border-box;
              }
              table {
                border-collapse: collapse;
                border-spacing: 0;
                width: 100%;
                vertical-align: middle;
               }
              .selected-oganize{
                width: 50%;
                box-sizing: border-box;
                padding: 5px 10px;
                white-space: nowrap;
                float: left;
              }
               .selected-oganize-block{
                width: 50%;
                box-sizing: border-box;
                padding: 5px 10px;
                white-space: nowrap;
                display: block;
              }
              .oper-show{
                  display: none;
              }
              .item {
                white-space: normal;
                line-height: 22px;
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
            .print-show{
                width: 100%;
                overflow:hidden;
                box-sizing:border-box;
            }
           </style>
          </head>
        <body>
          ${mainHtml}
        </body>
      </html>
      `
      exportTable(html).then((res) => {
        window.open(
          `${process.env.VUE_APP_BASE_API}/common/download?fileName=${res.msg}&delete=true`
        )
        this.notify()
      })
    },
    // 5s之后跳转到列表页
    notify () {
      this.showJumpTip = true
      // this.duration = 5
      const _this = this
      this.jumpTipTimer = window.setInterval(function () {
        _this.duration -= 1
        if (_this.duration === 0) {
          window.clearInterval(this.jumpTipTimer)
          this.showJumpTip = false
          _this.$router.push({ path: '/register-list' })
        }
      }, 1000)
    },
    jump () {
      this.$router.push({ path: '/register-list' })
    }

  }
}
</script>
