<template>
  <div class="">
    <!-- 提示事项 -->
    <div class="tip tip-export">
      <span>填写说明:</span>
      <div>1.标黑字体的指标属于基础指标，其余指标属于提升指标。</div>
      <div>
        2.检查结果为符合的，填写A；检查结果为部分符合的，填写B；检查结果为不符合的，填写C；检查结果不适用的，填写D。
      </div>
    </div>
    <table class="evaluate-table pb-30 month-table brakpage">
      <tr class="table-header">
        <td colspan="4">
          <div class="input-line text-bold f16">
            <span class="">机构名称：</span>
            <span>{{ orgName }}</span>
          </div>
        </td>
        <td colspan="4">
          <div class="input-line text-bold f16">
            <span>适用范围：</span>
            <span>养老机构</span>
          </div>
        </td>
      </tr>
      <tr class="text-bold table-header">
        <td width="5%">检查项目</td>
        <td width="5%">序号</td>
        <td width="31%">检查内容</td>
        <td width="29%">检查细则</td>
        <td width="10%">检查方式</td>
        <td class="text-center" width="8%" style="text-align: center">
          检查结果
        </td>
        <td width="12%">整改建议</td>
      </tr>
      <!-- 一、住宿环境 -->
      <template>
        <tr class="part1 part-hash">
          <td rowspan="3" class="td-top">一、住宿环境</td>
          <td :class="{ 'warn-C': tableData.data_1.value === 'C' }">1</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_1.value === 'C' }"
          >
            卫生间环境整洁，设安全扶手，地板使用防滑材料或铺设防滑垫等，配有换气设备。服务对象接触到的各种设备无尖角凸出部分。
          </td>
          <td :class="{ 'warn-C': tableData.data_1.value === 'C' }">
            2项以上不符合为不符合，1项不符合为部分符合
          </td>
          <td :class="{ 'warn-C': tableData.data_1.value === 'C' }">
            现场查看
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_1.value === 'C' }"
          >
            {{ tableData.data_1.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_1.value === 'C' }">
            {{ tableData.data_1.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_2.value === 'C' }">
          <td>2</td>
          <td class="bold">居室自然通风，室内空气清新，无异味。</td>
          <td>不通风，有异味为不符合</td>
          <td>现场查看</td>
          <td class="text-center">
            {{ tableData.data_2.value }}
          </td>
          <td>
            {{ tableData.data_2.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_3.value === 'C' }">
          <td>3</td>
          <td class="bold">
            居室、卫生间、活动室、餐厅、浴室等安装有紧急呼叫设备或配备可移动呼叫设备。紧急呼叫信号应能传输至相应护理站或值班室。
          </td>
          <td>2项以上不符合为不符合，1项不符合为部分符合</td>
          <td>现场查看，适用设备</td>
          <td class="text-center">
            {{ tableData.data_3.value }}
          </td>
          <td>
            {{ tableData.data_3.text }}
          </td>
        </tr>
      </template>
      <!-- 二、膳食环境 -->
      <template>
        <tr class="part2 part-hash">
          <td rowspan="4" class="td-top">二、膳食环境</td>
          <td :class="{ 'warn-C': tableData.data_4.value === 'C' }">4</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_4.value === 'C' }"
          >
            食堂安装灭蚊蝇灯、挡鼠板、纱窗、防盗网；无苍蝇、老鼠、蟑螂和其它害虫。
          </td>
          <td :class="{ 'warn-C': tableData.data_4.value === 'C' }">
            未按要求安装设施，每缺一项为不符合；发现苍蝇、老鼠、蟑螂或其它害虫，2项以上为不符合
          </td>
          <td :class="{ 'warn-C': tableData.data_4.value === 'C' }">
            现场查看
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_4.value === 'C' }"
          >
            {{ tableData.data_4.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_4.value === 'C' }">
            {{ tableData.data_4.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_5.value === 'C' }">
          <td>5</td>
          <td class="bold">
            厨房设有排污设施或隔油设备，保持清洁；有垃圾分类设施并保持其密闭;餐厨垃圾每日处理。
          </td>
          <td>有2项以上不达标的为不符合</td>
          <td>现场查看</td>
          <td class="text-center">
            {{ tableData.data_5.value }}
          </td>
          <td>
            {{ tableData.data_5.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_6.value === 'C' }">
          <td>6</td>
          <td class="bold">
            厨房和就餐区各种设备、炊具、用具整洁卫生;做好餐 （饮）具消毒。
          </td>
          <td>不卫生、不整洁、消毒不符合要求其中有1项不达标为不符合</td>
          <td>现场查看；查看消毒记录</td>
          <td class="text-center">
            {{ tableData.data_6.value }}
          </td>
          <td>
            {{ tableData.data_6.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_7.value === 'C' }">
          <td>7</td>
          <td class="bold">
            有冷冻冷藏和储藏设备;生熟食品分开存放;食品留样，有专用留样柜,留样量不少于125克，留样时间不少于48小时。
          </td>
          <td>
            无设备、食品未分类、无独立留样柜、未按要求留样其中有2项不达标为不符合
          </td>
          <td>现场查看；查看留样记录</td>
          <td class="text-center">
            {{ tableData.data_7.value }}
          </td>
          <td>
            {{ tableData.data_7.text }}
          </td>
        </tr>
      </template>
      <!--三、医疗环境 -->
      <template>
        <tr class="part3 part-hash">
          <td rowspan="2" class="td-top">三、医疗环境</td>
          <td :class="{ 'warn-C': tableData.data_8.value === 'C' }">8</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_8.value === 'C' }"
          >
            机构有专门的药品存放空间，储存设备;配备常用外伤包扎物品、消毒用品、体温表、血压计、非处方急救药品（如救心丸、云南白药、藿香正气水等）。
          </td>
          <td :class="{ 'warn-C': tableData.data_8.value === 'C' }">
            每缺1项为基本不符合
          </td>
          <td :class="{ 'warn-C': tableData.data_8.value === 'C' }">
            现场查看
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_8.value === 'C' }"
          >
            {{ tableData.data_8.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_8.value === 'C' }">
            {{ tableData.data_8.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_9.value === 'C' }">
          <td>9</td>
          <td class="bold">
            机构对老年人自带药必须进行统一管理，有独立的药品存放空间和储存设备。
          </td>
          <td>其中有1项不达标的为不符合</td>
          <td>现场查看</td>
          <td class="text-center">
            {{ tableData.data_9.value }}
          </td>
          <td>
            {{ tableData.data_9.text }}
          </td>
        </tr>
      </template>
      <!--四、公共区域 -->
      <template>
        <tr class="part4 part-hash">
          <td rowspan="3" class="td-top">四、公共区域</td>
          <td :class="{ 'warn-C': tableData.data_10.value === 'C' }">10</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_10.value === 'C' }"
          >
            设有老年人能力评估室，评估室按老年人生活能力评估规范要求配置，提供文字介绍。
          </td>
          <td :class="{ 'warn-C': tableData.data_10.value === 'C' }">
            无评估室为不符合；有评估室但不达标的为部分符合
          </td>
          <td :class="{ 'warn-C': tableData.data_10.value === 'C' }">
            现场查看
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_10.value === 'C' }"
          >
            {{ tableData.data_10.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_10.value === 'C' }">
            {{ tableData.data_10.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_11.value === 'C' }">
          <td>11</td>
          <td class="bold">
            洗衣房布局合理，污净分开，地面采取防滑措施；有浸泡池消毒设施；有洗衣、消毒、叠衣、存放的空间。
          </td>
          <td>有1-2项不达标的为部分符合，3种及以上为不符合</td>
          <td>现场查看</td>
          <td class="text-center">
            {{ tableData.data_11.value }}
          </td>
          <td>
            {{ tableData.data_11.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_12.value === 'C' }">
          <td>12</td>
          <td class="bold">及时维修更换居室、护理区域等设施、设备和物品。</td>
          <td>
            有1-2种不能正常使用的设施设备、物品为部分符合，3种及以上为不符合
          </td>
          <td>查看制度、现场查看老人居室、维修记录</td>
          <td class="text-center">
            {{ tableData.data_12.value }}
          </td>
          <td>
            {{ tableData.data_12.text }}
          </td>
        </tr>
      </template>
      <!--五、行政人事管理 -->
      <template>
        <tr class="part5 part-hash">
          <td rowspan="4" class="td-top">五、行政人事管理</td>
          <td :class="{ 'warn-C': tableData.data_13.value === 'C' }">13</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_13.value === 'C' }"
          >
            护理人员与生活能力完好的服务对象，配备比例不低于1:8；与轻度及中度失能的服务对象，配备比例不低于1:5；与重度失能的服务对象，配备比例不低于1:3。
          </td>
          <td :class="{ 'warn-C': tableData.data_13.value === 'C' }">
            护理人员配备三项要求，1项不达标的为部分符合，2项及以上不达标的为不符合
          </td>
          <td :class="{ 'warn-C': tableData.data_13.value === 'C' }">
            查看入住老人和护理人员名单，计算比例
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_13.value === 'C' }"
          >
            {{ tableData.data_13.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_13.value === 'C' }">
            {{ tableData.data_13.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_14.value === 'C' }">
          <td>14</td>
          <td class="bold">
            定期开展人员培训，1个季度至少进行1次（内容包括以人为本、爱老尊老、管理服务技能以及相关政策法规）；新入职人员必须进行上岗培训；办理健康合格证。
          </td>
          <td>
            培训、考核计划、具体实施记录、健康证其中有1项不达标的为部分符合，2项及以上为不符合
          </td>
          <td>查看计划、记录、证件</td>
          <td class="text-center">
            {{ tableData.data_14.value }}
          </td>
          <td>
            {{ tableData.data_14.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_15.value === 'C' }">
          <td>15</td>
          <td class="bold">有工作人员职业道德准则或行为规范并落实。</td>
          <td>有一项不达标为不符合</td>
          <td>查看制度、抽查询问护理员</td>
          <td class="text-center">
            {{ tableData.data_15.value }}
          </td>
          <td>
            {{ tableData.data_15.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_16.value === 'C' }">
          <td>16</td>
          <td class="bold">
           工作人员熟悉《养老机构服务质量基本规范》和工作流程，严格开展考评，至少每半年一次，并及时改进工作，有考评记录和改进措施；对服务对象要做到“七知道”（姓名、照料重点、爱好、疾病、家庭、治疗、心理）。
          </td>
          <td>
            无考评记录、改进措施、抽查护理员准确率低于80%的其中1项为部分符合，2项及以上为不符合
          </td>
          <td>查看记录、抽查询问护理员</td>
          <td class="text-center">
            {{ tableData.data_16.value }}
          </td>
          <td>
            {{ tableData.data_16.text }}
          </td>
        </tr>
      </template>
      <!--六、业务管理 -->
      <template>
        <tr class="part6 part-hash">
          <td rowspan="1" class="td-top">六、业务管理</td>
          <td :class="{ 'warn-C': tableData.data_17.value === 'C' }">17</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_17.value === 'C' }"
          >
            建立在院服务对象档案管理库，要有生活档案和健康档案，包括入院服务对象健康评估、能力评估 （入住评估、常规评估、即时评估）、入住协议（其中包括不得侵犯老年人肖像权、不得泄露老年人隐私等）、监护人和服务对象身份证明、监护人联系方式、在院记录等相关资料，请假、出院或死亡7天内档案必须入库。
          </td>
          <td :class="{ 'warn-C': tableData.data_17.value === 'C' }">
            未建立档案管理库不符合；档案资料每缺2项以上的为不符合。
          </td>
          <td :class="{ 'warn-C': tableData.data_17.value === 'C' }">
            查看制度、文件
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_17.value === 'C' }"
          >
            {{ tableData.data_17.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_17.value === 'C' }">
            {{ tableData.data_17.text }}
          </td>
        </tr>
      </template>
      <!--七、安全管理 -->
      <template>
        <tr class="part7 part-hash">
          <td rowspan="4" class="td-top">七、安全管理</td>
          <td :class="{ 'warn-C': tableData.data_18.value === 'C' }">18</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_18.value === 'C' }"
          >
            机构内各区域要配备相应的消防器材，并保持完好；所有安全疏散通道、应急照明和出口均设消防安全指示标志，并保持安全出口、疏散通道、消防车通道畅通；走廊、房间醒目处有消防疏散示意图；有各类设施安全操作规范，简洁、明了、完整；工作人员会正确使用、检查消防设施设备。
          </td>
          <td :class="{ 'warn-C': tableData.data_18.value === 'C' }">
            其中1项不达标为部分符合，2项及以上为不符合
          </td>
          <td :class="{ 'warn-C': tableData.data_18.value === 'C' }">
            现场查看、现场抽查工作人员演示
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_18.value === 'C' }"
          >
            {{ tableData.data_18.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_18.value === 'C' }">
            {{ tableData.data_18.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_19.value === 'C' }">
          <td>19</td>
          <td class="bold">
            机构主要负责人每月至少组织一次安全（防火）检查和风险管控措施及方案的落实情况；安全管理人员每周进行一次风险管控检查；护理人员每两小时进行一次防火巡查，每天对安全风险控制措施落实情况进行一次全面检查；制定消防演练、应急疏散和灭火预案；每半年至少组织一次消防演练和消防安全教育培训；每季度主要负责人要组织召开一次对消防和安全工作会议。
          </td>
          <td>其中1项不达标为部分符合，2项及以上为不符合</td>
          <td>现场查看、查看相关资料</td>
          <td class="text-center">
            {{ tableData.data_19.value }}
          </td>
          <td>
            {{ tableData.data_19.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_20.value === 'C' }">
          <td>20</td>
          <td class="bold">对消防设施、特种设备进行日常维修保养，定期自检。</td>
          <td>无相应服务、记录为不符合</td>
          <td>查看相关资料</td>
          <td class="text-center">
            {{ tableData.data_20.value }}
          </td>
          <td>
            {{ tableData.data_20.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_21.value === 'C' }">
          <td>21</td>
          <td class="bold">
           服务对象居室不能有火种、刀具、剪指刀、过期食品、药品等，护理人员每天检查1次。
          </td>
          <td>其中有1项为部分符合，有2项及以上的为不符合</td>
          <td>查看相关记录，现场抽查</td>
          <td class="text-center">
            {{ tableData.data_21.value }}
          </td>
          <td>
            {{ tableData.data_21.text }}
          </td>
        </tr>
      </template>
      <!--八、生活护理服务 -->
      <template>
        <tr class="part8 part-hash">
          <td rowspan="6" class="td-top">八、生活护理服务</td>
          <td :class="{ 'warn-C': tableData.data_22.value === 'C' }">22</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_22.value === 'C' }"
          >
            每天清洁居室卫生1次；室内物品摆放整齐有序，无障碍物；墙壁、门窗清洁无灰尘；桌面、地面无垃圾；每周进行1次卫生检查；每季度灭 “四害”1次。
          </td>
          <td :class="{ 'warn-C': tableData.data_22.value === 'C' }">
            不整洁或物品摆放无序、无卫生检查记录、无灭四害记录其中1项为部分符合，2项及以上为不符合
          </td>
          <td :class="{ 'warn-C': tableData.data_22.value === 'C' }">
            现场查看，查看记录
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_22.value === 'C' }"
          >
            {{ tableData.data_22.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_22.value === 'C' }">
            {{ tableData.data_22.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_23.value === 'C' }">
          <td>23</td>
          <td class="bold">
            服务对象干净整洁，保持衣着、皮肤、头发、口腔、手脚、会阴清洁，身上无异味；保持头发短、胡子短、指甲短。
          </td>
          <td>3名及以上未达要求的为不符合</td>
          <td>现场查看3名以上服务对象</td>
          <td class="text-center">
            {{ tableData.data_23.value }}
          </td>
          <td>
            {{ tableData.data_23.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_24.value === 'C' }">
          <td>24</td>
          <td class="bold">
           床上用品（床单、被套、枕套）清洁无异味，服务对象离床立即折叠整齐。
          </td>
          <td>5张床及以上未达要求的为不符合</td>
          <td>现场查看</td>
          <td class="text-center">
            {{ tableData.data_24.value }}
          </td>
          <td>
            {{ tableData.data_24.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_25.value === 'C' }">
          <td>25</td>
          <td class="bold">
            护理员着装整洁，佩戴岗位标识上岗，举止文明，微笑服务。
          </td>
          <td>2项及以上为不符合</td>
          <td>现场查看</td>
          <td class="text-center">
            {{ tableData.data_25.value }}
          </td>
          <td>
            {{ tableData.data_25.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_26.value === 'C' }">
          <td>26</td>
          <td class="bold">
            护理人员24小时值班，并做好交接班；协助服务对象按时服药。
          </td>
          <td>记录不完善的的为不符合</td>
          <td>查看老人相关生活护理记录及护理员交接班记录</td>
          <td class="text-center">
            {{ tableData.data_26.value }}
          </td>
          <td>
            {{ tableData.data_26.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_27.value === 'C' }">
          <td>27</td>
          <td class="bold">
           护理人员能够协助服务对象穿脱衣、口腔清洁、身体清洁 （床上擦浴）、预防压疮、轮椅转移、喂饭、鼻饲、喂水、睡眠照料、更换尿不湿、床上体位转移、更换床上用品。
          </td>
          <td>2项及以上不达标的为不符合</td>
          <td>现场随机抽查2名 以上护理员，不少于2项内容进行考核</td>
          <td class="text-center">
            {{ tableData.data_27.value }}
          </td>
          <td>
            {{ tableData.data_27.text }}
          </td>
        </tr>
      </template>
      <!--九、膳食服务 -->
      <template>
        <tr class="part9 part-hash">
          <td rowspan="1" class="td-top">九、膳食服务</td>
          <td :class="{ 'warn-C': tableData.data_28.value === 'C' }">28</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_28.value === 'C' }"
          >
            食谱每周至少更换一次并上墙；膳食部门每月召开1次膳食管理会议听取服务对象及家属意见。
          </td>
          <td :class="{ 'warn-C': tableData.data_28.value === 'C' }">
            未更新食谱、未召开会议、无整改措施和记录，有其中1项为部分符合，2项及以上为不符合
          </td>
          <td :class="{ 'warn-C': tableData.data_28.value === 'C' }">
            查看每周食谱更新情况、会议记录、整改记录，现场询问3保老人
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_28.value === 'C' }"
          >
            {{ tableData.data_28.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_28.value === 'C' }">
            {{ tableData.data_28.text }}
          </td>
        </tr>
      </template>
      <!--十、社会工作及医疗服务 -->
      <template>
        <tr class="part10 part-hash">
          <td rowspan="2" class="td-top">十、社会工作及医疗服务</td>
          <td :class="{ 'warn-C': tableData.data_29.value === 'C' }">29</td>
          <td
            class="bold"
            :class="{ 'warn-C': tableData.data_29.value === 'C' }"
          >
           制定月度、季度、年度活动计划，组织和引导老年人开展小型文体娱乐活动，每周不少于1次，大型文体娱乐活动每季度不少于1次。
          </td>
          <td :class="{ 'warn-C': tableData.data_29.value === 'C' }">
            未按要求开展活动、无活动图文记录、无老人反馈记录，有其中1项为部分符合，2项及以上为不符合
          </td>
          <td :class="{ 'warn-C': tableData.data_29.value === 'C' }">
            查看活动图文、反馈记录、视频资料；现场询问3名以上老人
          </td>
          <td
            class="text-center"
            :class="{ 'warn-C': tableData.data_29.value === 'C' }"
          >
            {{ tableData.data_29.value }}
          </td>
          <td :class="{ 'warn-C': tableData.data_29.value === 'C' }">
            {{ tableData.data_29.text }}
          </td>
        </tr>
        <tr :class="{ 'warn-C': tableData.data_30.value === 'C' }">
          <td>30</td>
          <td class="bold">
          每月组织服务对象进行一次健康讲座；合作医疗机构每周诊疗1次，根据服务对象病情变化实际情况及时转诊。
          </td>
          <td>未按要求组织学习、无诊疗记录的，有2项及以上为不符合</td>
          <td>查看活动图文、反馈记录、视频资料；现场询问3名以上老人</td>
          <td class="text-center">
            {{ tableData.data_30.value }}
          </td>
          <td>
            {{ tableData.data_30.text }}
          </td>
        </tr>
      </template>
    </table>

    <!-- 最终结果统计表 -->
    <table class="total-table brakpage evaluate-table">
      <tr>
        <td>检查结果</td>
        <td class="text-left">
          检查结果
          <div>(项目指标清单)</div>
        </td>
        <td>其中基础指标(项)</td>
        <td>其中提升指标(项)</td>
        <td>合计(项)</td>
      </tr>
      <tr>
        <td>A</td>
        <td class="text-left">{{ sum.A.listStr }}</td>
        <td>{{ sum.A.baseList.length }}</td>
        <td>{{ sum.A.liftList.length }}</td>
        <td>{{ sum.A.list.length }}</td>
      </tr>
      <tr>
        <td>B</td>
        <td class="text-left">{{ sum.B.listStr }}</td>
        <td>{{ sum.B.baseList.length }}</td>
        <td>{{ sum.B.liftList.length }}</td>
        <td>{{ sum.B.list.length }}</td>
      </tr>
      <tr>
        <td>C</td>
        <td class="text-left">{{ sum.C.listStr }}</td>
        <td>{{ sum.C.baseList.length }}</td>
        <td>{{ sum.C.liftList.length }}</td>
        <td>{{ sum.C.list.length }}</td>
      </tr>
      <tr>
        <td>D</td>
        <td class="text-left">{{ sum.D.listStr }}</td>
        <td>{{ sum.D.baseList.length }}</td>
        <td>{{ sum.D.liftList.length }}</td>
        <td>{{ sum.D.list.length }}</td>
      </tr>
    </table>
    <!-- 签字 -->
    <div class="sign-panel">
      <div class="clearfix">
        <!-- <div class="f-l">
          <span class="inline-t f16">组长签字：</span>
          <div class="inline-t">
            <div class="inline-t">
              <span class="text-border inline">{{
                signData.checkMajor.name
              }}</span>
              <img
                class="view-image inline"
                :src="signData.checkMajor.sign"
                width="95.5"
                height="38"
              />
            </div>
          </div>
        </div> -->
        <div class="f-l">
          <span class="inline-t f16">被检查养老院负责人签字：</span>
          <div class="inline-t">
            <div v-if="signData.beCheckedMajor.name">
              <span class="text-border inline">{{
                signData.beCheckedMajor.name
              }}</span>
              <img
                class="view-image"
                :src="signData.beCheckedMajor.sign"
                width="95.5"
                height="38"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix pt-30">
        <div class="f-l">
          <span class="inline-t f16">检查人员签字：</span>
          <div class="inline-t">
            <div v-for="(user, index) in signData.checkExpert" :key="index">
              <span class="text-border">{{ user.name }}</span>
              <!-- <span class="text-border">{{ user.sex == 0 ? "男" : "女" }}</span> -->
              <!-- <span class="text-border">{{ user.phone }}</span> -->
              <img
                class="view-image"
                :src="user.sign"
                width="95.5"
                height="38"
              />
            </div>
          </div>
        </div>
        <div class="f-r">
          <span class="mr-10 inline f16">检查时间: </span>
          <div class="inline">
            {{ inspectTime | formatDate("YYYY-mm-dd") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import './index.scss'
import Defer from './checkMixin'
export default {
  props: ['tableData', 'sum', 'orgName', 'inspectTime', 'signData'],
  mixins: [Defer()]
}
</script>
