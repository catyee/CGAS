import { _debounce } from '@/utils/utils'
import { evaluateStatus } from '@/libs/constant'
import {
  addEvaluate,
  updateEvaluate,
  getEvaluate,
  reviewEvaluate
} from '@/api/check'
import { mapActions } from 'vuex'
export default function (count = 27) {
  return {
    data () {
      return {
        displayPriority: 3,
        orgName: '', // 机构名称
        assessStatus: null, // 0： 未开始 调新建接口 1：检查中 调修改接口和获取详情接口 2：已完成 调获取详情接口 3：不合格 调获取详情接口和新建接口
        projectId: null, // 项目id
        assessId: null, // 检查id
        // 当前正在编辑的专家组成员，如果没有属性都为空
        currentExpert: {
          name: '',
          sex: '',
          phone: ''
        },
        // 是否显示专家组弹框
        addExpertVisible: false,
        // 当前签名的对象
        currentSign: '',
        signData: {
          // 负责专家
          checkMajor: {
            name: '',
            sign: ''
          },
          // 被检查养老院负责人
          beCheckedMajor: {
            name: '',
            sign: ''
          },
          // 专家组成员
          checkExpert: [
            // {
            //   name: '111',
            //   sex: '',
            //   phone: '123',
            //   sign: ''
            // },
            // {
            //   name: '222',
            //   sex: '',
            //   phone: '',
            //   sign: ''
            // }
          ]
        },
        // 检查时间
        inspectTime: null,
        // 是否显示签字弹框
        signdialogVisible: false,
        // 当前激活的路由
        activeHash: '1',
        // 最终的统计信息
        sum: {
          A: {
            list: [], // 所有的A项目
            listStr: '',
            baseList: [], // 基础指标序号
            liftList: [],
            liftStr: '',
            baseStr: ''
          },
          B: {
            list: [], // 所有的B项目
            listStr: '',
            liftList: [],
            liftStr: '',
            baseStr: '',
            baseList: [] // 基础指标序号
          },
          C: {
            list: [], // 所有的C项目
            listStr: '',
            liftList: [],
            liftStr: '',
            baseStr: '',
            baseList: [] // 基础指标序号
          },
          // 最终结果 0整改/ 1提升
          // 检查结果中有任何1项基础指标属于C（不符合），则检查结果为整改；养老院基础指标全部符合，则检查结果为提升
          result: ''
        }
      }
    },
    mounted () {
      this.runDisplayPriority()
    },
    methods: {
      ...mapActions(['changeFullStatus']),
      // 控制表格依次显示
      runDisplayPriority () {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority++
            if (this.displayPriority < count) {
              step()
            }
          })
        }
        step()
      },

      defer (priority) {
        return this.displayPriority >= priority
      },
      // 监听滚动条
      scrollEvent (e) {
        const scrollItems = document.querySelectorAll('.part-hash')
        // const scrollTop = e.target.scrollTop - 4
        for (let i = scrollItems.length - 1; i >= 0; i--) {
        // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
          const judge =
          e.target.scrollTop >=
          scrollItems[i].offsetTop - scrollItems[0].offsetTop
          if (judge) {
            this.activeHash = i + 1
            this.activeHash = this.activeHash.toString()
            break
          }
        }
      //   document.getElementById('thead').style.transform =
      //  'translateY(' + scrollTop + 'px)'
      // document.getElementsByClassName('fixed')[1].style.transform =
      //   'translateY(' + e.target.scrollTop + 'px)'
      },
      // 点击hash
      selectHash (hash) {
        this.activeHash = hash
        // const showPart = 'part' + hash
        // this.show[showPart] = true
        const jump = document.querySelector('.part' + hash)
        if (!jump) return
        document.getElementsByClassName('table-wrap')[0].scrollTop = jump.offsetTop
      },
      // 保存签名 确定签名
      saveSign () {
        const img = this.$refs.sign.saveAsImg()
        if (!img) {
        }
        const sign = this.currentSign
        // 如果只传递了索引过来，说明是专家组成员 直接根据索引赋值
        if (typeof sign === 'number') {
          this.signData.checkExpert[sign].sign = img
        } else {
          this.signData[sign].sign = img
        }

        // 保存签名之后 清空画布 防止下次打开未清空
        this.canvasClear()
        this.signdialogVisible = false
      },
      // 去签字
      toSign (prop) {
        this.currentSign = prop
        this.signdialogVisible = true
      },
      // 清空画布
      canvasClear () {
        this.$refs.sign.canvasClear()
      },
      // 添加专家组成员
      addCheckExpert (v) {
        this.signData.checkExpert.push(v)
      },
      // 添加被检查养老院负责人
      addBeCheckedMajor () {
        this.$prompt('姓名', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValidator: function (value) {
            value = value && value.trim()
            if (!value || !value.length) return '姓名不能为空'
          }
        })
          .then(({ value }) => {
            this.signData.beCheckedMajor.name = value
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            })
          })
      },
      // 删除某个专家组成员
      removeExpert (index) {
        this.signData.checkExpert.splice(index, 1)
      },
      // 数据校验
      checkData () {
        const keys = Object.keys(this.tableData)
        const noValueList = keys.filter((item) => {
          return (
            this.tableData[item].value !== 'A' &&
          this.tableData[item].value !== 'B' &&
          this.tableData[item].value !== 'C'
          )
        })
        const firstIndex = noValueList[0] && noValueList[0].split('_')[1]
        if (noValueList.length) {
          this.msgError('请先选择第' + firstIndex + '项')
          return false
        }
        const signData = this.signData
        if (!signData.checkMajor.sign) {
          this.msgError('请负责专员签字')
          return false
        }
        if (!signData.beCheckedMajor.name) {
          this.msgError('请添加被检查养老院负责人并签字')
          return false
        }
        if (!signData.beCheckedMajor.sign) {
          this.msgError('请被检查养老院负责人签字')
          return false
        }
        if (!signData.checkExpert.length) {
          this.msgError('请添加专家组成员')
          return false
        }
        const noSignExpertList = signData.checkExpert.filter((item) => {
          return !item.sign
        })
        if (noSignExpertList.length) {
          this.msgError('请专家组成员' + noSignExpertList[0].name + '签字')
          return false
        }
        return true
      },
      // 提交
      submit () {
        const checked = this.checkData()
        // 校过 提交
        if (!checked) return
        // // 最终计算一次结果 避免不修改数据 直接提交
        // this.getSum()
        this.$confirm('您确定要提交吗？提交后将不可更改', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'success'
        })
          .then(() => {
          // 提交之前 根据最终结果 计算出状态
          // 如果最终结果为整改0 状态则为不合格   否则为已完成
          // 已完成
            if (this.sum.result) {
            // 已完成
              this.assessStatus = evaluateStatus[2].status
            } else {
            // 不合格
              this.assessStatus = evaluateStatus[3].status
            }
            const data = this.getSubmitData()
            updateEvaluate(data).then((res) => {
              this.msgSuccess('提交成功')
              this.$router.push('/project-list/')
            })
          })
          .catch(() => {})
      },
      // 复查
      reviewCheck () {
        reviewEvaluate({
          projectId: this.projectId
        }).then((res) => {
          const data = res.data
          this.getDataFromHttp(data)
          // 状态置为开始中
          this.assessStatus = evaluateStatus[1].status
          this.assessId = data.assessId
          // 存储assessId 避免刷新浏览器重复 复检
          localStorage.setItem('assessId', data.assessId)
          // 清空所有的签名
          this.signData.checkMajor.sign = ''
          this.signData.beCheckedMajor.sign = ''
          this.signData.checkExpert = this.signData.checkExpert.map((item) => {
            item.sign = ''
            return item
          })
          // 复查接口调用之后 修改数据  默认保存一次
          this.save()
          // 获取详情后监听页面变化
          this.watchDataChange()
        })
      },
      getDataFromHttp (data) {
        this.inspectTime = data.inspectTime
        this.assessStatus = data.assessStatus
        if (data.result) {
          const result = JSON.parse(data.result)
          if (result.tableData) {
            this.tableData = result.tableData
          }
          if (result.signData) {
            this.signData = result.signData
          }
          this.orgName = result.orgName
        }
        if (data.sum) {
          this.sum = JSON.parse(data.sum)
        }
      },
      // 获取检查详情
      getCheck () {
        getEvaluate(this.assessId).then((res) => {
          const data = res.data
          this.getDataFromHttp(data)
          // 获取详情后监听页面变化
          this.watchDataChange()
        })
      },
      // 生成最终的提交数据
      getSubmitData () {
      //  获取专家组列表
        const expertNames = []
        this.signData.checkExpert.forEach((item) => {
          expertNames.push(item.name)
        })
        const data = {
          projectId: this.projectId,
          assessId: this.assessId, // 检查id
          assessStatus: this.assessStatus, // 评估状态
          expertNames: expertNames.join(','), // 专家组
          inspectTime: this.inspectTime, // 检查日期
          result: JSON.stringify({
            tableData: this.tableData,
            signData: this.signData,
            orgName: this.orgName
          }),
          sum: JSON.stringify(this.sum)
        }
        if (!this.assessId) delete data.assessId
        return data
      },
      // 当tableData数据变化的时候 获取sum数据
      getSum () {
        const keys = Object.keys(this.tableData)
        const getList = (v) => {
          const listIndex = []
          const baseIndex = []
          const liftIndex = []
          keys.forEach((item) => {
            if (this.tableData[item].value === v) {
              const index = item.split('_')[1]
              listIndex.push(index)
              // 基础指标
              if (this.tableData[item].type === 0) {
                baseIndex.push(index)
              }
              // 提升指标
              if (this.tableData[item].type === 1) {
                liftIndex.push(index)
              }
            }
          })
          return {
            list: listIndex,
            listStr: listIndex.join(','),
            baseList: baseIndex, // 基础指标序号
            baseStr: baseIndex.join(','), // 基础指标序号
            liftList: liftIndex, // 基础指标序号
            liftStr: liftIndex.join(',') // 基础指标序号
          }
        }
        this.sum.A = getList('A')
        this.sum.B = getList('B')
        this.sum.C = getList('C')
        // 最终结果 0整改/ 1提升
        // 检查结果中有任何1项基础指标属于C（不符合），则检查结果为整改；养老院基础指标全部符合，则检查结果为提升
        if (this.sum.C.baseList.length) {
        // 整改
          this.sum.result = 0
        } else {
        // 提升
          this.sum.result = 1
        }
      },
      // 监听页面数据变化
      watchDataChange () {
        const save = this.autoSave()
        this.$watch(
          'tableData',
          function () {
          // tableData数据变化的同时 更新sum表格
            this.getSum()
            save()
          },
          {
            deep: true
          }
        )
        this.$watch(
          'signData',
          function () {
            save()
          },
          {
            deep: true
          }
        )
        this.$watch(
          'inspectTime',
          function () {
            save()
          },
          {
            deep: true
          }
        )
      },
      // 新建评估检查
      createCheck () {
        if (this.assessId) {
          return
        }
        const data = this.getSubmitData()
        // 保存的时候 检查状态置为 检查中
        data.assessStatus = evaluateStatus[1].status
        addEvaluate(data).then((res) => {
          if (res.data) {
            this.assessId = res.data
            // 进入该页面的时候是未开始状态 需要先创建一个check 拿到assessId 之后的操作开始修改操作
            // 因为未开始的状态 每次进入页面都拿不到 assessId 所以在这个页面刷新的时候 同样拿不到assessId 这样如果再次调用新建接口会多次创建 所以需要存储一下assessId 进入未开始的页面的时候 获取一下localstorage 如果获取到那么就直接采用 如果获取不到 那么就调新建接口获取
            localStorage.setItem('assessId', res.data)
            this.watchDataChange()
          } else {
            this.msgError('新建检查出错!')
          }
        })
      },
      // 自动保存
      autoSave () {
        const _this = this
        return _debounce(function () {
          _this.save()
        }, 1000)
      },
      // 点击保存按钮 调修改检查接口
      save () {
      // 保存的时候 如果状态是未创建 一定会先调取创建接口
      // if (!this.assessStatus === evaluateStatus[0].status) {
      //   this.createCheck()
      //   return
      // }
      // 保存的时候 检查状态置为 检查中
        this.assessStatus = evaluateStatus[1].status
        // 生成存储json
        const data = this.getSubmitData()
        updateEvaluate(data).then((res) => {
          this.msgSuccess('已为您保存')
        })
      }

    },
    created () {
      // 首先全屏
      this.changeFullStatus(true)
      // this.handleData()
      // 如果没有传递data  跳转回去 从项目列表过来必须传data
      let data = this.$route.query.data
      if (!data) {
        this.$router.go(-1)
      }
      this.assessId = this.$route.params.checkid
      data = JSON.parse(data)

      // 获取评估状态
      this.assessStatus = data.assessStatus
      // 默认取值检查时间
      this.inspectTime = data.inspectTime
      // 获取项目id
      this.projectId = data.projectId
      // 负责人
      this.signData.checkMajor.name = data.inspector
      // 默认取值机构名称
      this.orgName = data.name

      // 如果有id即为检查中过来的 如果没有id 先查看是否存储了id 如果存储了 给id赋值
      // 这样创建完检查之后 刷新页面 不会丢失id  可以获取详情了
      if (!this.assessId) {
        this.assessId = localStorage.getItem('assessId')
      }
      // id赋值完之后 再次校验是否存在id 只有存在id的情况下才会获取详情
      // 如果id还是不存在 说明确实还未创建 此时在保存的时候 状态一定是未开始 所以会调取 创建接口
      if (this.assessId) {
        // 获取详情
        this.getCheck()
      } else {
        // 检查状态为不合格 因此此处是复查 调取复查接口
        if (this.assessStatus === evaluateStatus[3].status) {
          this.reviewCheck()
        } else {
          this.createCheck()
        }
      }
    }
  }
}
