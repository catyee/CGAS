<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogTableVisible"
      width="80%"
      :before-close="close"
    >
      <el-table :data="gridData">
        <el-table-column label="序号" type="index" width="50">
        </el-table-column>
        <el-table-column property="date" label="检查结果">
          <template>
            <span>不合格</span>
          </template>
        </el-table-column>
        <el-table-column
          property="inspectTime"
          label="检查时间"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="oper-btns">
              <span class="color-green pointer" @click="toDetail(scope.row)"
                >查看报告</span
              >
              <span class="color-green pointer" @click="getCheck(scope.row)"
                >下载</span
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
   <div style="display:none">
     <!-- 208项检查 -->
        <ExportNormalCheck
        id="downloadDom1"
        v-if="assessType == 1"
        :tableData="tableData"
        :sum="sum" :orgName="orgName"
        :inspectTime="inspectTime"
        :signData="signData"/>
      <!-- 月度检查 -->
        <ExportMonthCheck
        id="downloadDom2"
         v-if="assessType == 2"
        :tableData="tableData"
        :sum="sum"
        :orgName="orgName"
        :inspectTime="inspectTime"
        :signData="signData"/>
        <!-- 年度检查 -->
        <ExportYearCheck
        id="downloadDom3"
         v-if="assessType == 3"
        :tableData="tableData"
        :sum="sum"
        :orgName="orgName"
        :inspectTime="inspectTime"
        :signData="signData"/>
   </div>
  </div>
</template>
<script>
import { baseUrl } from '@/baseUrl'
import { getEvaluate, exportTable } from '@/api/check'
import { getHtml } from '@/views/check-show/export-style'
import { evaluateStatus } from '@/libs/constant'
import ExportNormalCheck from '@/views/check-show/components/export-type-normal.vue'
import ExportMonthCheck from '@/views/check-show/components/export-type-month.vue'
import ExportYearCheck from '@/views/check-show/components/export-type-year.vue'
export default {
  props: ['title', 'dialogTableVisible', 'gridData', 'assessType'],
  components: {
    // 208项检查
    ExportNormalCheck,
    // 月度检查
    ExportMonthCheck,
    // 年度检查
    ExportYearCheck
  },
  data () {
    return {
      evaluateStatus: evaluateStatus,
      orgName: '', // 机构名称
      // 检查时间
      inspectTime: null,
      assessId: null,
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
          //   name: '',
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
        ],
        signDate: new Date()
      },
      tableData: {
        orgName: '',
        // 根据需求 标黑指标属于基本指标 此处置为0 其余指标属于提升指标 此处置为1

        // 1-1
        data_1: {
          type: 0,
          value: '',
          text: ''
        },
        data_2: {
          type: 0,
          value: '',
          text: ''
        },
        data_3: {
          type: 0,
          value: '',
          text: ''
        },
        data_4: {
          type: 1,
          value: '',
          text: ''
        },

        // 1-2
        data_5: {
          type: 0,
          value: '',
          text: ''
        },
        data_6: {
          type: 0,
          value: '',
          text: ''
        },
        data_7: {
          type: 1,
          value: '',
          text: ''
        },
        data_8: {
          type: 0,
          value: '',
          text: ''
        },
        data_9: {
          type: 1,
          value: '',
          text: ''
        },
        // 1-3
        data_10: {
          type: 0,
          value: '',
          text: ''
        },
        data_11: {
          type: 1,
          value: '',
          text: ''
        },
        data_12: {
          type: 0,
          value: '',
          text: ''
        },
        data_13: {
          type: 1,
          value: '',
          text: ''
        },
        data_14: {
          type: 1,
          value: '',
          text: ''
        },
        data_15: {
          type: 1,
          value: '',
          text: ''
        },
        data_16: {
          type: 0,
          value: '',
          text: ''
        },
        data_17: {
          type: 0,
          value: '',
          text: ''
        },
        data_18: {
          type: 0,
          value: '',
          text: ''
        },
        data_19: {
          type: 1,
          value: '',
          text: ''
        },
        data_20: {
          type: 1,
          value: '',
          text: ''
        },
        data_21: {
          type: 0,
          value: '',
          text: ''
        },
        data_22: {
          type: 1,
          value: '',
          text: ''
        },
        data_23: {
          type: 1,
          value: '',
          text: ''
        },
        data_24: {
          type: 1,
          value: '',
          text: ''
        },
        data_25: {
          type: 1,
          value: '',
          text: ''
        },
        data_26: {
          type: 1,
          value: '',
          text: ''
        },
        data_27: {
          type: 1,
          value: '',
          text: ''
        },
        data_28: {
          type: 1,
          value: '',
          text: ''
        },
        data_29: {
          type: 0,
          value: '',
          text: ''
        },
        data_30: {
          type: 1,
          value: '',
          text: ''
        },
        data_31: {
          type: 0,
          value: '',
          text: ''
        },
        data_32: {
          type: 1,
          value: '',
          text: ''
        },
        data_33: {
          type: 0,
          value: '',
          text: ''
        },
        // 1-4
        data_34: {
          type: 0,
          value: '',
          text: ''
        },
        data_35: {
          type: 1,
          value: '',
          text: ''
        },
        data_36: {
          type: 0,
          value: '',
          text: ''
        },
        data_37: {
          type: 1,
          value: '',
          text: ''
        },
        data_38: {
          type: 1,
          value: '',
          text: ''
        },
        data_39: {
          type: 1,
          value: '',
          text: ''
        },
        data_40: {
          type: 1,
          value: '',
          text: ''
        },
        data_41: {
          type: 0,
          value: '',
          text: ''
        },
        // 1-5
        data_42: {
          type: 0,
          value: '',
          text: ''
        },
        data_43: {
          type: 0,
          value: '',
          text: ''
        },
        data_44: {
          type: 0,
          value: '',
          text: ''
        },
        data_45: {
          type: 0,
          value: '',
          text: ''
        },
        data_46: {
          type: 0,
          value: '',
          text: ''
        },
        data_47: {
          type: 0,
          value: '',
          text: ''
        },
        data_48: {
          type: 1,
          value: '',
          text: ''
        },
        data_49: {
          type: 1,
          value: '',
          text: ''
        },
        data_50: {
          type: 1,
          value: '',
          text: ''
        },
        data_51: {
          type: 0,
          value: '',
          text: ''
        },
        data_52: {
          type: 0,
          value: '',
          text: ''
        },
        data_53: {
          type: 1,
          value: '',
          text: ''
        },
        data_54: {
          type: 1,
          value: '',
          text: ''
        },
        data_55: {
          type: 1,
          value: '',
          text: ''
        },
        data_56: {
          type: 1,
          value: '',
          text: ''
        },
        data_57: {
          type: 1,
          value: '',
          text: ''
        },
        data_58: {
          type: 1,
          value: '',
          text: ''
        },
        data_59: {
          type: 0,
          value: '',
          text: ''
        },
        data_60: {
          type: 0,
          value: '',
          text: ''
        },
        data_61: {
          type: 1,
          value: '',
          text: ''
        },
        // 2-1
        data_62: {
          type: 0,
          value: '',
          text: ''
        },
        data_63: {
          type: 0,
          value: '',
          text: ''
        },
        data_64: {
          type: 0,
          value: '',
          text: ''
        },
        data_65: {
          type: 0,
          value: '',
          text: ''
        },
        data_66: {
          type: 0,
          value: '',
          text: ''
        },
        data_67: {
          type: 0,
          value: '',
          text: ''
        },
        data_68: {
          type: 0,
          value: '',
          text: ''
        },
        data_69: {
          type: 0,
          value: '',
          text: ''
        },
        data_70: {
          type: 1,
          value: '',
          text: ''
        },
        data_71: {
          type: 1,
          value: '',
          text: ''
        },
        data_72: {
          type: 0,
          value: '',
          text: ''
        },
        data_73: {
          type: 0,
          value: '',
          text: ''
        },
        data_74: {
          type: 0,
          value: '',
          text: ''
        },
        // 2-2
        data_75: {
          type: 0,
          value: '',
          text: ''
        },
        data_76: {
          type: 0,
          value: '',
          text: ''
        },
        data_77: {
          type: 0,
          value: '',
          text: ''
        },
        data_78: {
          type: 0,
          value: '',
          text: ''
        },
        data_79: {
          type: 0,
          value: '',
          text: ''
        },
        data_80: {
          type: 1,
          value: '',
          text: ''
        },
        data_81: {
          type: 1,
          value: '',
          text: ''
        },
        data_82: {
          type: 1,
          value: '',
          text: ''
        },
        data_83: {
          type: 1,
          value: '',
          text: ''
        },
        data_84: {
          type: 1,
          value: '',
          text: ''
        },
        data_85: {
          type: 0,
          value: '',
          text: ''
        },
        data_86: {
          type: 1,
          value: '',
          text: ''
        },
        data_87: {
          type: 0,
          value: '',
          text: ''
        },
        // 2-3
        data_88: {
          type: 0,
          value: '',
          text: ''
        },
        data_89: {
          type: 0,
          value: '',
          text: ''
        },
        data_90: {
          type: 0,
          value: '',
          text: ''
        },
        data_91: {
          type: 0,
          value: '',
          text: ''
        },
        data_92: {
          type: 0,
          value: '',
          text: ''
        },
        data_93: {
          type: 0,
          value: '',
          text: ''
        },
        data_94: {
          type: 0,
          value: '',
          text: ''
        },
        data_95: {
          type: 0,
          value: '',
          text: ''
        },
        data_96: {
          type: 0,
          value: '',
          text: ''
        },
        data_97: {
          type: 1,
          value: '',
          text: ''
        },
        data_98: {
          type: 1,
          value: '',
          text: ''
        },
        data_99: {
          type: 1,
          value: '',
          text: ''
        },
        data_100: {
          type: 1,
          value: '',
          text: ''
        },
        data_101: {
          type: 1,
          value: '',
          text: ''
        },
        data_102: {
          type: 1,
          value: '',
          text: ''
        },
        data_103: {
          type: 1,
          value: '',
          text: ''
        },
        data_104: {
          type: 0,
          value: '',
          text: ''
        },
        data_105: {
          type: 1,
          value: '',
          text: ''
        },
        data_106: {
          type: 0,
          value: '',
          text: ''
        },
        data_107: {
          type: 1,
          value: '',
          text: ''
        },
        data_108: {
          type: 0,
          value: '',
          text: ''
        },
        data_109: {
          type: 1,
          value: '',
          text: ''
        },
        data_110: {
          type: 0,
          value: '',
          text: ''
        },
        data_111: {
          type: 0,
          value: '',
          text: ''
        },
        // 2-4
        data_112: {
          type: 0,
          value: '',
          text: ''
        },
        data_113: {
          type: 1,
          value: '',
          text: ''
        },
        data_114: {
          type: 0,
          value: '',
          text: ''
        },
        data_115: {
          type: 0,
          value: '',
          text: ''
        },
        data_116: {
          type: 0,
          value: '',
          text: ''
        },
        data_117: {
          type: 1,
          value: '',
          text: ''
        },
        data_118: {
          type: 0,
          value: '',
          text: ''
        },
        data_119: {
          type: 1,
          value: '',
          text: ''
        },
        data_120: {
          type: 1,
          value: '',
          text: ''
        },
        data_121: {
          type: 1,
          value: '',
          text: ''
        },
        data_122: {
          type: 0,
          value: '',
          text: ''
        },
        data_123: {
          type: 0,
          value: '',
          text: ''
        },
        // 2-5
        data_124: {
          type: 0,
          value: '',
          text: ''
        },
        data_125: {
          type: 1,
          value: '',
          text: ''
        },
        data_126: {
          type: 0,
          value: '',
          text: ''
        },
        data_127: {
          type: 0,
          value: '',
          text: ''
        },
        data_128: {
          type: 1,
          value: '',
          text: ''
        },
        data_129: {
          type: 0,
          value: '',
          text: ''
        },
        data_130: {
          type: 1,
          value: '',
          text: ''
        },
        data_131: {
          type: 0,
          value: '',
          text: ''
        },
        // 2-6
        data_132: {
          type: 0,
          value: '',
          text: ''
        },
        data_133: {
          type: 1,
          value: '',
          text: ''
        },
        data_134: {
          type: 1,
          value: '',
          text: ''
        },
        data_135: {
          type: 0,
          value: '',
          text: ''
        },
        data_136: {
          type: 0,
          value: '',
          text: ''
        },
        data_137: {
          type: 0,
          value: '',
          text: ''
        },
        data_138: {
          type: 0,
          value: '',
          text: ''
        },
        data_139: {
          type: 1,
          value: '',
          text: ''
        },
        data_140: {
          type: 1,
          value: '',
          text: ''
        },
        data_141: {
          type: 1,
          value: '',
          text: ''
        },
        data_142: {
          type: 1,
          value: '',
          text: ''
        },
        data_143: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-1
        data_144: {
          type: 1,
          value: '',
          text: ''
        },
        data_145: {
          type: 1,
          value: '',
          text: ''
        },
        data_146: {
          type: 1,
          value: '',
          text: ''
        },
        data_147: {
          type: 0,
          value: '',
          text: ''
        },
        data_148: {
          type: 0,
          value: '',
          text: ''
        },
        data_149: {
          type: 1,
          value: '',
          text: ''
        },
        data_150: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-2
        data_151: {
          type: 0,
          value: '',
          text: ''
        },
        data_152: {
          type: 1,
          value: '',
          text: ''
        },
        data_153: {
          type: 1,
          value: '',
          text: ''
        },
        data_154: {
          type: 1,
          value: '',
          text: ''
        },
        data_155: {
          type: 1,
          value: '',
          text: ''
        },
        data_156: {
          type: 0,
          value: '',
          text: ''
        },
        data_157: {
          type: 0,
          value: '',
          text: ''
        },
        data_158: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-3
        data_159: {
          type: 0,
          value: '',
          text: ''
        },
        data_160: {
          type: 1,
          value: '',
          text: ''
        },
        data_161: {
          type: 1,
          value: '',
          text: ''
        },
        data_162: {
          type: 1,
          value: '',
          text: ''
        },
        data_163: {
          type: 1,
          value: '',
          text: ''
        },
        data_164: {
          type: 1,
          value: '',
          text: ''
        },
        data_165: {
          type: 0,
          value: '',
          text: ''
        },
        data_166: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-4
        data_167: {
          type: 0,
          value: '',
          text: ''
        },
        data_168: {
          type: 0,
          value: '',
          text: ''
        },
        data_169: {
          type: 0,
          value: '',
          text: ''
        },
        data_170: {
          type: 1,
          value: '',
          text: ''
        },
        data_171: {
          type: 1,
          value: '',
          text: ''
        },
        data_172: {
          type: 1,
          value: '',
          text: ''
        },
        data_173: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-5
        data_174: {
          type: 0,
          value: '',
          text: ''
        },
        data_175: {
          type: 1,
          value: '',
          text: ''
        },
        data_176: {
          type: 1,
          value: '',
          text: ''
        },
        data_177: {
          type: 0,
          value: '',
          text: ''
        },
        data_178: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-6
        data_179: {
          type: 0,
          value: '',
          text: ''
        },
        data_180: {
          type: 1,
          value: '',
          text: ''
        },
        data_181: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-7
        data_182: {
          type: 0,
          value: '',
          text: ''
        },
        data_183: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-8

        data_184: {
          type: 0,
          value: '',
          text: ''
        },
        data_185: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-9
        data_186: {
          type: 0,
          value: '',
          text: ''
        },
        data_187: {
          type: 0,
          value: '',
          text: ''
        },
        data_188: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-10
        data_189: {
          type: 1,
          value: '',
          text: ''
        },
        data_190: {
          type: 0,
          value: '',
          text: ''
        },
        data_191: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-11
        data_192: {
          type: 0,
          value: '',
          text: ''
        },
        data_193: {
          type: 1,
          value: '',
          text: ''
        },
        data_195: {
          type: 1,
          value: '',
          text: ''
        },
        data_197: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-12
        data_198: {
          type: 0,
          value: '',
          text: ''
        },
        data_199: {
          type: 1,
          value: '',
          text: ''
        },
        data_200: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-13
        data_201: {
          type: 0,
          value: '',
          text: ''
        },
        data_202: {
          type: 1,
          value: '',
          text: ''
        },
        data_203: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-14
        data_204: {
          type: 0,
          value: '',
          text: ''
        },
        data_205: {
          type: 0,
          value: '',
          text: ''
        },
        // 3-15
        data_206: {
          type: 0,
          value: '',
          text: ''
        },
        data_207: {
          type: 1,
          value: '',
          text: ''
        },
        data_208: {
          type: 1,
          value: '',
          text: ''
        },
        data_209: {
          type: 1,
          value: '',
          text: ''
        },
        data_210: {
          type: 0,
          value: '',
          text: ''
        }
      },
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
  methods: {
    close () {
      this.$emit('close')
    },
    // 下载
    download () {
      const loading = this.$loading({
        lock: true,
        text: '下载中，请稍后...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      try {
        const id = `downloadDom${this.assessType}`
        const evaluate = document.getElementById(id).innerHTML
        const html = getHtml(evaluate)
        exportTable(html).then(
          (res) => {
            window.location.href = `${baseUrl}/common/download?fileName=${res.msg}&delete=true`
            loading.close()
          },
          (e) => {
            loading.close()
          }
        )
      } catch (e) {
        this.msgError(e)
        loading.close()
      }
    },
    // 获取检查详情
    getCheck (data) {
      this.assessId = data.assessId
      getEvaluate(this.assessId).then((res) => {
        const data = res.data
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
        this.$nextTick(() => {
          this.download()
        })
      })
    },
    // 查看
    toDetail (data) {
      this.$router.push({
        path: '/check-show/' + data.assessId,
        query: { assessType: this.assessType }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.oper-btns {
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  span {
    padding-right: 10px;
  }
}
</style>
