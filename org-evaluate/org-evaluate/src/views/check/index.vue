<template>
  <div class="evaluate pt-16 pl-27">
    <div class="left" id="left">
      <div class="flex pt-16">
        <div class="title-line"></div>
        <span class="pl-4 f14">评估</span>
      </div>
      <div class="hash-list">
        <el-menu default-active="1" :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">
              <span>基本要求</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <a href="#A1" class="hash-item">资质</a>
              </el-menu-item>
              <el-menu-item index="1-2">
                <a href="#A1" class="hash-item">合同签订</a>
              </el-menu-item>
              <el-menu-item index="1-3">
                <a href="#A1" class="hash-item">设备设施</a>
              </el-menu-item>
              <el-menu-item index="1-4">
                <a href="#A1" class="hash-item">人员资质</a>
              </el-menu-item>
              <el-menu-item index="1-5">
                <a href="#A1" class="hash-item">管理</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>基本服务内容</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">个人生活照料服务</el-menu-item>
              <el-menu-item index="1-2"> 老年护理服务</el-menu-item>
              <el-menu-item index="1-3">安全防护服务</el-menu-item>
              <el-menu-item index="1-4">医疗保健服务</el-menu-item>
              <el-menu-item index="1-5">居家生活照料服务</el-menu-item>
              <el-menu-item index="1-6">膳食服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>一般性服务内容</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"> 心理/精神支持服务</el-menu-item>
              <el-menu-item index="1-2"> 环境卫生服务</el-menu-item>
              <el-menu-item index="1-3">休闲娱乐服务</el-menu-item>
              <el-menu-item index="1-4">协助医疗服务</el-menu-item>
              <el-menu-item index="1-5">洗涤服务</el-menu-item>
              <el-menu-item index="1-6">物业管理维修服务</el-menu-item>
              <el-menu-item index="1-7">陪同就医服务</el-menu-item>
              <el-menu-item index="1-8">咨询服务</el-menu-item>
              <el-menu-item index="1-9">通讯服务</el-menu-item>
              <el-menu-item index="1-10">送餐服务</el-menu-item>
              <el-menu-item index="1-11">教育服务</el-menu-item>
              <el-menu-item index="1-12">购物服务</el-menu-item>
              <el-menu-item index="1-13">委托服务</el-menu-item>
              <el-menu-item index="1-14">交通服务</el-menu-item>
              <el-menu-item index="1-15">安宁服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <!-- <div class="hash-list">
        <a
          href="#A1"
          class="pt-30"
          >A.1评估基本信息表</a
        >
        <a
          href="#A2"
          >A.2被评估者的基本信息表</a
        >
        <a
          href="#A3"
          >A.3信息提供者及联系人信息表</a
        >
        <a
          href="#B1"
          >B.1日常生活活动评估表</a
        >
        <a
          href="#B2"
          >B.2 精神状态评估表</a
        >
        <a
          href="#B3"
          >B.3 感知觉与沟通评估表</a
        >
        <a
          href="#B4"
          >B.4 社会参与评估表</a
        >
        <a
          href="#C"
          >C 老年人能力评估报告</a
        >
      </div> -->
    </div>
    <div class="wrap">
      <div class="center-wrap mt-16">
        <div class="center" id="print">
          <div class="tabs" id="pdfDom">
            <div class="table-wrap">
              <table class="evaluate-table">
                <tr>
                  <td colspan="4">
                    <div class="input-line">
                      <span class="text-bold f16">机构名称：</span
                      ><el-input
                        type="textarea"
                        autosize
                        v-model="tableData.name"
                        placeholder="请输入内容"
                      >
                      </el-input>
                    </div>
                  </td>
                  <td colspan="4">
                    <div class="input-line text-bold f16">
                      <span>适用范围：</span>
                      <span>养老机构</span>
                    </div>
                  </td>
                </tr>
                <tr class="text-bold">
                  <td class="f16" width="8%">检查维度</td>
                  <td class="f16" width="8%">检查项目</td>
                  <td class="f16">序号</td>
                  <td class="f16">检查内容</td>
                  <td class="f16">检查细则</td>
                  <td class="f16">检查方式</td>
                  <td class="f16" width="12%">检查结果</td>
                  <td class="f16" width="20%">整改建议</td>
                </tr>
                <tr>
                  <td rowspan="2">1 基本要求</td>
                  <td rowspan="2">1-1资质</td>
                  <td>1</td>
                  <td class="bold">依法办理养老机构设立许可证</td>
                  <td>未取得许可证，为不符合。不符合的，请列明原因。</td>
                  <td>查看证照</td>
                  <td>
                   <CheckedGrade v-model="tableData.data_1.value"></CheckedGrade>
                  </td>
                  <td>
                     <CheckedText v-model="tableData.data_2.value"></CheckedText>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td class="bold">
                    提供餐饮服务的养老院，应当依法办理食品药品监督管理部门颁发的《食品经营许可证》
                  </td>
                  <td>
                    自主提供餐饮服务的，不具备许可证或许可证过期的为不符合；委托餐饮服务企业提供餐饮服务的，签订了协议，服务企业具备有效许可证，为符合。
                  </td>

                  <td>查看证照；委托服务的，查看协议和提供方有效许可证。</td>
                  <td>
                     <!-- <el-input
                        type="textarea"
                        :autosize="{ minRows: 2}"
                        v-model="tableData.data_1_1_2"
                        placeholder="请输入内容"
                      >
                      </el-input> -->
                  </td>
                  <td>
                     <!-- <el-input
                        type="textarea"
                        :autosize="{ minRows: 2}"
                        v-model="tableData.data_1_1_2"
                        placeholder="请输入内容"
                      >
                      </el-input> -->
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="save">
        <el-button type="primary" @click="save">暂存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'
import CheckedGrade from './checked-grade.vue'
import CheckedText from './checked-text.vue'
export default {
  components: {
    // 检查结果选择组件
    CheckedGrade,
    // 整改建议输入组件
    CheckedText
  },
  data () {
    return {
      tableData: {
        orgName: '',
        // 根据需求 标黑指标属于基本指标 此处置为0 其余指标属于提升指标 此处置为1

        // 1-1
        data_1: {
          type: 0,
          value: ''
        },
        data_2: {
          type: 0,
          value: ''
        },
        data_3: {
          type: 0,
          value: ''
        },
        data_4: {
          type: 1,
          value: ''
        },

        // 1-2
        data_5: {
          type: 0,
          value: ''
        },
        data_6: {
          type: 0,
          value: ''
        },
        data_7: {
          type: 1,
          value: ''
        },
        data_8: {
          type: 0,
          value: ''
        },
        data_9: {
          type: 1,
          value: ''
        },
        // 1-3
        data_10: {
          type: 0,
          value: ''
        },
        data_11: {
          type: 1,
          value: ''
        },
        data_12: {
          type: 0,
          value: ''
        },
        data_13: {
          type: 1,
          value: ''
        },
        data_14: {
          type: 1,
          value: ''
        },
        data_15: {
          type: 1,
          value: ''
        },
        data_16: {
          type: 0,
          value: ''
        },
        data_17: {
          type: 0,
          value: ''
        },
        data_18: {
          type: 0,
          value: ''
        },
        data_19: {
          type: 1,
          value: ''
        },
        data_20: {
          type: 1,
          value: ''
        },
        data_21: {
          type: 0,
          value: ''
        },
        data_22: {
          type: 1,
          value: ''
        },
        data_23: {
          type: 1,
          value: ''
        },
        data_24: {
          type: 1,
          value: ''
        },
        data_25: {
          type: 1,
          value: ''
        },
        data_26: {
          type: 1,
          value: ''
        },
        data_27: {
          type: 1,
          value: ''
        },
        data_28: {
          type: 1,
          value: ''
        },
        data_29: {
          type: 0,
          value: ''
        },
        data_30: {
          type: 1,
          value: ''
        },
        data_31: {
          type: 0,
          value: ''
        },
        data_32: {
          type: 1,
          value: ''
        },
        data_33: {
          type: 0,
          value: ''
        },
        // 1-4
        data_34: {
          type: 0,
          value: ''
        },
        data_35: {
          type: 1,
          value: ''
        },
        data_36: {
          type: 0,
          value: ''
        },
        data_37: {
          type: 1,
          value: ''
        },
        data_38: {
          type: 1,
          value: ''
        },
        data_39: {
          type: 1,
          value: ''
        },
        data_40: {
          type: 1,
          value: ''
        },
        data_41: {
          type: 0,
          value: ''
        },
        // 1-5
        data_42: {
          type: 0,
          value: ''
        },
        data_43: {
          type: 0,
          value: ''
        },
        data_44: {
          type: 0,
          value: ''
        },
        data_45: {
          type: 0,
          value: ''
        },
        data_46: {
          type: 0,
          value: ''
        },
        data_47: {
          type: 0,
          value: ''
        },
        data_48: {
          type: 1,
          value: ''
        },
        data_49: {
          type: 1,
          value: ''
        },
        data_50: {
          type: 1,
          value: ''
        },
        data_51: {
          type: 0,
          value: ''
        },
        data_52: {
          type: 0,
          value: ''
        },
        data_53: {
          type: 1,
          value: ''
        },
        data_54: {
          type: 1,
          value: ''
        },
        data_55: {
          type: 1,
          value: ''
        },
        data_56: {
          type: 1,
          value: ''
        },
        data_57: {
          type: 1,
          value: ''
        },
        data_58: {
          type: 1,
          value: ''
        },
        data_59: {
          type: 0,
          value: ''
        },
        data_60: {
          type: 0,
          value: ''
        },
        data_61: {
          type: 1,
          value: ''
        },
        // 2-1
        data_62: {
          type: 0,
          value: ''
        },
        data_63: {
          type: 0,
          value: ''
        },
        data_64: {
          type: 0,
          value: ''
        },
        data_65: {
          type: 0,
          value: ''
        },
        data_66: {
          type: 0,
          value: ''
        },
        data_67: {
          type: 0,
          value: ''
        },
        data_68: {
          type: 0,
          value: ''
        },
        data_69: {
          type: 0,
          value: ''
        },
        data_70: {
          type: 1,
          value: ''
        },
        data_71: {
          type: 1,
          value: ''
        },
        data_72: {
          type: 0,
          value: ''
        },
        data_73: {
          type: 0,
          value: ''
        },
        data_74: {
          type: 0,
          value: ''
        },
        // 2-2
        data_75: {
          type: 0,
          value: ''
        },
        data_76: {
          type: 0,
          value: ''
        },
        data_77: {
          type: 0,
          value: ''
        },
        data_78: {
          type: 0,
          value: ''
        },
        data_79: {
          type: 0,
          value: ''
        },
        data_80: {
          type: 1,
          value: ''
        },
        data_81: {
          type: 1,
          value: ''
        },
        data_82: {
          type: 1,
          value: ''
        },
        data_83: {
          type: 1,
          value: ''
        },
        data_84: {
          type: 1,
          value: ''
        },
        data_85: {
          type: 0,
          value: ''
        },
        data_86: {
          type: 1,
          value: ''
        },
        data_87: {
          type: 0,
          value: ''
        },
        // 2-3
        data_88: {
          type: 0,
          value: ''
        },
        data_89: {
          type: 0,
          value: ''
        },
        data_90: {
          type: 0,
          value: ''
        },
        data_91: {
          type: 0,
          value: ''
        },
        data_92: {
          type: 0,
          value: ''
        },
        data_93: {
          type: 0,
          value: ''
        },
        data_94: {
          type: 0,
          value: ''
        },
        data_95: {
          type: 0,
          value: ''
        },
        data_96: {
          type: 0,
          value: ''
        },
        data_97: {
          type: 1,
          value: ''
        },
        data_98: {
          type: 1,
          value: ''
        },
        data_99: {
          type: 1,
          value: ''
        },
        data_100: {
          type: 1,
          value: ''
        },
        data_101: {
          type: 1,
          value: ''
        },
        data_102: {
          type: 1,
          value: ''
        },
        data_103: {
          type: 1,
          value: ''
        },
        data_104: {
          type: 0,
          value: ''
        },
        data_105: {
          type: 1,
          value: ''
        },
        data_106: {
          type: 0,
          value: ''
        },
        data_107: {
          type: 1,
          value: ''
        },
        data_108: {
          type: 0,
          value: ''
        },
        data_109: {
          type: 1,
          value: ''
        },
        data_110: {
          type: 0,
          value: ''
        },
        data_111: {
          type: 0,
          value: ''
        },
        // 2-4
        data_112: {
          type: 0,
          value: ''
        },
        data_113: {
          type: 1,
          value: ''
        },
        data_114: {
          type: 0,
          value: ''
        },
        data_115: {
          type: 0,
          value: ''
        },
        data_116: {
          type: 0,
          value: ''
        },
        data_117: {
          type: 1,
          value: ''
        },
        data_118: {
          type: 0,
          value: ''
        },
        data_119: {
          type: 1,
          value: ''
        },
        data_120: {
          type: 1,
          value: ''
        },
        data_121: {
          type: 1,
          value: ''
        },
        data_122: {
          type: 0,
          value: ''
        },
        data_123: {
          type: 0,
          value: ''
        },
        // 2-5
        data_124: {
          type: 0,
          value: ''
        },
        data_125: {
          type: 1,
          value: ''
        },
        data_126: {
          type: 0,
          value: ''
        },
        data_127: {
          type: 0,
          value: ''
        },
        data_128: {
          type: 1,
          value: ''
        },
        data_129: {
          type: 0,
          value: ''
        },
        data_130: {
          type: 1,
          value: ''
        },
        data_131: {
          type: 0,
          value: ''
        },
        // 2-6
        data_132: {
          type: 0,
          value: ''
        },
        data_133: {
          type: 1,
          value: ''
        },
        data_134: {
          type: 1,
          value: ''
        },
        data_135: {
          type: 0,
          value: ''
        },
        data_136: {
          type: 0,
          value: ''
        },
        data_137: {
          type: 0,
          value: ''
        },
        data_138: {
          type: 0,
          value: ''
        },
        data_139: {
          type: 1,
          value: ''
        },
        data_140: {
          type: 1,
          value: ''
        },
        data_141: {
          type: 1,
          value: ''
        },
        data_142: {
          type: 1,
          value: ''
        },
        data_143: {
          type: 0,
          value: ''
        },
        // 3-1
        data_144: {
          type: 1,
          value: ''
        },
        data_145: {
          type: 1,
          value: ''
        },
        data_146: {
          type: 1,
          value: ''
        },
        data_147: {
          type: 0,
          value: ''
        },
        data_148: {
          type: 0,
          value: ''
        },
        data_149: {
          type: 1,
          value: ''
        },
        data_150: {
          type: 0,
          value: ''
        },
        // 3-2
        data_151: {
          type: 0,
          value: ''
        },
        data_152: {
          type: 1,
          value: ''
        },
        data_153: {
          type: 1,
          value: ''
        },
        data_154: {
          type: 1,
          value: ''
        },
        data_155: {
          type: 1,
          value: ''
        },
        data_156: {
          type: 0,
          value: ''
        },
        data_157: {
          type: 0,
          value: ''
        },
        data_158: {
          type: 0,
          value: ''
        },
        // 3-3
        data_159: {
          type: 0,
          value: ''
        },
        data_160: {
          type: 1,
          value: ''
        },
        data_161: {
          type: 1,
          value: ''
        },
        data_162: {
          type: 1,
          value: ''
        },
        data_163: {
          type: 1,
          value: ''
        },
        data_164: {
          type: 1,
          value: ''
        },
        data_165: {
          type: 0,
          value: ''
        },
        data_166: {
          type: 0,
          value: ''
        },
        // 3-4
        data_167: {
          type: 0,
          value: ''
        },
        data_168: {
          type: 0,
          value: ''
        },
        data_169: {
          type: 0,
          value: ''
        },
        data_170: {
          type: 1,
          value: ''
        },
        data_171: {
          type: 1,
          value: ''
        },
        data_172: {
          type: 1,
          value: ''
        },
        data_173: {
          type: 0,
          value: ''
        },
        // 3-5
        data_174: {
          type: 0,
          value: ''
        },
        data_175: {
          type: 1,
          value: ''
        },
        data_176: {
          type: 1,
          value: ''
        },
        data_177: {
          type: 0,
          value: ''
        },
        data_178: {
          type: 0,
          value: ''
        },
        // 3-6
        data_179: {
          type: 0,
          value: ''
        },
        data_180: {
          type: 1,
          value: ''
        },
        data_181: {
          type: 0,
          value: ''
        },
        // 3-7
        data_182: {
          type: 0,
          value: ''
        },
        // 3-8
        data_183: {
          type: 0,
          value: ''
        },
        data_184: {
          type: 0,
          value: ''
        },
        data_185: {
          type: 0,
          value: ''
        },
        // 3-9
        data_186: {
          type: 0,
          value: ''
        },
        data_187: {
          type: 0,
          value: ''
        },
        data_188: {
          type: 0,
          value: ''
        },
        // 3-10
        data_189: {
          type: 1,
          value: ''
        },
        data_190: {
          type: 0,
          value: ''
        },
        data_191: {
          type: 0,
          value: ''
        },
        // 3-11
        data_192: {
          type: 0,
          value: ''
        },
        data_193: {
          type: 1,
          value: ''
        }
      }
    }
  },
  methods: {
    save () {
      console.log(this.tableData, 'tttttttttttttttttt')
    }
  }
}
</script>
