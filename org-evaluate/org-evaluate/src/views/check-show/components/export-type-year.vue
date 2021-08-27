<template>
  <div class="">
    <table class="evaluate-table pb-30 year-table">
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
        <td width="3%">序号</td>
        <td width="25%">检查内容</td>
        <td width="20%">检查细则</td>
        <td width="10%">检查方式</td>
        <td width="10%">检查单位</td>
        <td width="15%">检查结果</td>
        <td width="12%">整改建议</td>
      </tr>
      <!-- 一、机构管理 -->
      <template>
        <tr class="part1 part-hash">
          <td rowspan="4" class="td-top">一、机构管理</td>
          <td>1</td>
          <td class="bold">食品经营许可证。</td>
          <td>有证，没过期为符合；无证或过期的为不符合</td>
          <td>查看证照</td>
          <td>市场监管局</td>
          <td class="text-center">
            {{ tableData.data_1.value }}
          </td>
          <td>
            {{ tableData.data_1.text }}
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td class="bold">财务状况。</td>
          <td>未达要求为不符合</td>
          <td>查看上一年度财务审计报告</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_2.value }}
          </td>
          <td>
            {{ tableData.data_2.text }}
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td class="bold">
            建立各种规章制度，有工作人员职业道德准则或行为规范并落实。
          </td>
          <td>查看工作人员职责、行政管理制度、安全管理制度、服务管理制度等</td>
          <td>现场查看相关制度资料</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_3.value }}
          </td>
          <td>
            {{ tableData.data_3.text }}
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td class="bold">制定本年度工作计划，年末有工作总结。</td>
          <td>有一项为部分符合；均没有的为不符合。</td>
          <td>查看资料</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_4.value }}
          </td>
          <td>
            {{ tableData.data_4.text }}
          </td>
        </tr>
      </template>
      <!-- 二、住宿环境 -->
      <template>
        <tr class="part2 part-hash">
          <td rowspan="4" class="td-top">二、住宿环境</td>
          <td>5</td>
          <td class="bold">
            卫生间环境整洁，设安全扶手，地板使用防滑材料或铺设防滑垫等，配有换气设备。服务对象接触到的各种设备无尖角凸出部分。
          </td>
          <td>2项以上不符合为不符合，1项不符合为部分符合</td>
          <td>现场查看</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_5.value }}
          </td>
          <td>
            {{ tableData.data_5.text }}
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td class="bold">居室自然通风，室内空气清新，无异味。</td>
          <td>不通风，有异味为不符合</td>
          <td>现场查看</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_6.value }}
          </td>
          <td>
            {{ tableData.data_6.text }}
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td class="bold">
            居室、卫生间、活动室、餐厅、浴室等安装有紧急呼叫设备或配备可移动呼叫设备。紧急呼叫信号应能传输至相应护理站或值班室。
          </td>
          <td>2项以上不符合为不符合，1项不符合为部分符合</td>
          <td>现场查看，适用设备</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_7.value }}
          </td>
          <td>
            {{ tableData.data_7.text }}
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td class="bold">老年人居室及活动空间窗户或阳台等有防坠落措施。</td>
          <td>1项不符合为不符合</td>
          <td>现场查看</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_8.value }}
          </td>
          <td>
            {{ tableData.data_8.text }}
          </td>
        </tr>
      </template>
      <!-- 三、膳食环境 -->
      <template>
        <tr class="part3 part-hash">
          <td rowspan="5" class="td-top">三、膳食环境</td>
          <td>9</td>
          <td class="bold">
            食堂安装灭蚊蝇灯、挡鼠板、纱窗、防盗网；无苍蝇、老鼠、蟑螂和其他害虫。
          </td>
          <td>
            未按要求安装设施，每缺一项为不符合；发现苍蝇、老鼠、蟑螂或其他害虫，2项以上为不符合
          </td>
          <td>现场查看</td>
          <td>市场监管局</td>
           <td class="text-center">
            {{ tableData.data_9.value }}
          </td>
          <td>
            {{ tableData.data_9.text }}
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td class="bold">
            厨房设有排污设施或隔油设备，保持清洁；有垃圾分类设施并保持其密闭;餐厨垃圾每日处理。
          </td>
          <td>有2项以上不达标的为不符合</td>
          <td>现场查看</td>
          <td>市场监管局</td>
          <td class="text-center">
            {{ tableData.data_10.value }}
          </td>
          <td>
            {{ tableData.data_10.text }}
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td class="bold">
            厨房和就餐区各种设备、炊具、用具整洁卫生;做好餐 （饮）具消毒。
          </td>
          <td>不卫生、不整洁、消毒不符合要求其中有1项不达标为不符合</td>
          <td>现场查看；查看消毒记录</td>
          <td>市场监管局</td>
          <td class="text-center">
            {{ tableData.data_11.value }}
          </td>
          <td>
            {{ tableData.data_11.text }}
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td class="bold">
            有冷冻冷藏和储藏设备;生熟食品分开存放;食品留样，有专用留样柜,留样量不少于125克，留样时间不少于48小时。
          </td>
          <td>
            无设备、食品未分类、无独立留样柜、未按要求留样其中有2项不达标为不符合
          </td>
          <td>现场查看；查看留样记录</td>
          <td>市场监管局</td>
           <td class="text-center">
            {{ tableData.data_12.value }}
          </td>
          <td>
            {{ tableData.data_12.text }}
          </td>
        </tr>
        <tr>
          <td>13</td>
          <td class="bold">
            搞好食品储存、运输、加工、制作的环节管理，做到：采购员不买腐烂变质的原料、库房保管员不收腐烂变质的原料、厨师不用腐烂变质的原料加工成品。不采购“三无”商品：无经营许可证、产品合格证、无卫生许可证，无厂名、厂址（店址）。
          </td>
          <td>1项不达标为不符合</td>
          <td>现场查看</td>
          <td>市场监管局</td>
           <td class="text-center">
            {{ tableData.data_13.value }}
          </td>
          <td>
            {{ tableData.data_13.text }}
          </td>
        </tr>
      </template>
      <!--四、医疗环境 -->
      <template>
        <tr class="part4 part-hash">
          <td rowspan="3" class="td-top">四、医疗环境</td>
          <td>14</td>
          <td class="bold">
            机构有专门的药品存放空间，储存设备;配备常用外伤包扎物品、消毒用品、体温表、血压计、非处方急救药品（如救心丸、云南白药、藿香正气水等）。
          </td>
          <td>每缺1项为基本不符合</td>
          <td>现场查看</td>
          <td>卫健局</td>
           <td class="text-center">
            {{ tableData.data_14.value }}
          </td>
          <td>
            {{ tableData.data_14.text }}
          </td>
        </tr>
        <tr>
          <td>15</td>
          <td class="bold">
            机构对老年人自带药必须进行统一管理，有独立的药品存放空间和储存设备。
          </td>
          <td>其中有1项不达标的为不符合</td>
          <td>现场查看</td>
          <td>卫健局</td>
          <td class="text-center">
            {{ tableData.data_15.value }}
          </td>
          <td>
            {{ tableData.data_15.text }}
          </td>
        </tr>
        <tr>
          <td>16</td>
          <td class="bold">
            设立院内医疗机构或与医疗机构建立协作关系，院内医疗机构管理服务符合卫生计生部门规定（证件、协议）。
          </td>
          <td>如有，且有相关协议或合同，即为符合</td>
          <td>查看合同文件、现场查看</td>
          <td>卫健局</td>
           <td class="text-center">
            {{ tableData.data_16.value }}
          </td>
          <td>
            {{ tableData.data_16.text }}
          </td>
        </tr>
      </template>
      <!--五、公共区域 -->
      <template>
        <tr class="part5 part-hash">
          <td rowspan="5" class="td-top">五、公共区域</td>
          <td>17</td>
          <td class="bold">
            设有老年人能力评估室，评估室按老年人生活能力评估规范要求配置，提供文字介绍。
          </td>
          <td>无评估室为不符合；有评估室但不达标的为部分符合</td>
          <td>现场查看</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_17.value }}
          </td>
          <td>
            {{ tableData.data_17.text }}
          </td>
        </tr>
        <tr>
          <td>18</td>
          <td class="bold">
            洗衣房布局合理，污净分开，地面采取防滑措施；有浸泡池消毒设施；有洗衣、消毒、叠衣、存放的空间。
          </td>
          <td>有1-2项不达标的为部分符合，3种及以上为不符合</td>
          <td>现场查看</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_18.value }}
          </td>
          <td>
            {{ tableData.data_18.text }}
          </td>
        </tr>
        <tr>
          <td>19</td>
          <td class="bold">及时维修更换居室、护理区域等设施、设备和物品。</td>
          <td>
            有1-2种不能正常使用的设施设备、物品为部分符合，3种及以上为不符合
          </td>
          <td>查看制度、现场查看老人居室、维修记录</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_19.value }}
          </td>
          <td>
            {{ tableData.data_19.text }}
          </td>
        </tr>
        <tr>
          <td>20</td>
          <td class="bold">进行适老化改造，实现无障碍环境。</td>
          <td>
            楼道扶手、洗手间扶手、无障碍坡道等老年人生活及活动区域有1处未实现无障碍，即为部分符合，有2项及以上为不符合
          </td>
          <td>现场查看</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_20.value }}
          </td>
          <td>
            {{ tableData.data_20.text }}
          </td>
        </tr>
        <tr>
          <td>21</td>
          <td class="bold">公共区域有明显的公共信息图形标志。</td>
          <td>
            标志标识不全、有破损超过40%为部分不符合；标志标识不全、有破损超过85%，为不符合
          </td>
          <td>现场查看</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_21.value }}
          </td>
          <td>
            {{ tableData.data_21.text }}
          </td>
        </tr>
      </template>
      <!--六、行政人事管理 -->
      <template>
        <tr class="part6 part-hash">
          <td rowspan="7" class="td-top">六、行政人事管理</td>
          <td>22</td>
          <td class="bold">
            护理人员与生活能力完好的服务对象，配备比例不低于
            １∶8；与轻度及中度失能的服务对象，配备比例不低于
            １∶５；与重度失能的服务对象，配备比例不低于１∶３
          </td>
          <td>
            护理人员配备三项要求，1项不达标的为部分符合，2项及以上不达标的为不符合
          </td>
          <td>查看入住老人和护理人员名单，计算比例</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_22.value }}
          </td>
          <td>
            {{ tableData.data_22.text }}
          </td>
        </tr>
        <tr>
          <td>23</td>
          <td class="bold">
            定期开展人员培训，1个季度至少进行1次（内容包括以人为本、爱老尊老、管理服务技能以及相关政策法规）；新入职人员必须进行上岗培训；办理健康合格证。
          </td>
          <td>
            培训、考核计划、具体实施记录、健康证其中有1项不达标的为部分符合，2项及以上为不符合
          </td>
          <td>查看计划、记录、证件</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_23.value }}
          </td>
          <td>
            {{ tableData.data_23.text }}
          </td>
        </tr>
        <tr>
          <td>24</td>
          <td class="bold">
            工作人员熟悉
            《养老机构服务质量基本规范》和工作流程，严格开展考评，至少每半年一次，并及时改进工作，有考评记录和改进措施；对服务对象做到“七知道”（姓名、照料重点、爱好、疾病、家庭、治疗、心理）。
          </td>
          <td>
            无考评记录、改进措施、抽查护理员准确率低于80%的其中1项为部分符合，2项及以上为不符合
          </td>
          <td>查看记录、抽查询问护理员</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_24.value }}
          </td>
          <td>
            {{ tableData.data_24.text }}
          </td>
        </tr>
        <tr>
          <td>25</td>
          <td class="bold">负责人每年参加相关培训，提升养老服务专业知识</td>
          <td>未达要求为不符合。</td>
          <td>查看相关资料</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_25.value }}
          </td>
          <td>
            {{ tableData.data_25.text }}
          </td>
        </tr>
        <tr>
          <td>26</td>
          <td class="bold">
            持有国家职业资格的养老护理员占养老护理员总数的比例不低于30%或所有养老护理员经过专业技能培训合格。
          </td>
          <td>两种情况满足其一为符合</td>
          <td>查看证件、相关记录</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_26.value }}
          </td>
          <td>
            {{ tableData.data_26.text }}
          </td>
        </tr>
        <tr>
          <td>27</td>
          <td class="bold">
            配备社会工作者、康复师、营养师、心理咨询师等专业人员；在养老院内开展服务的医生、护士、电工等依法需要持证上岗的专业技术人员应持有与其岗位相适应的专业资格证书或执业证书；厨师持有厨师职业证书，膳食及所有相关从业人员应有有效健康证明，每年体检1次。
          </td>
          <td>其中1项不达标为部分符合，2项及以上为不符合</td>
          <td>查看证件、相关记录</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_27.value }}
          </td>
          <td>
            {{ tableData.data_27.text }}
          </td>
        </tr>
        <tr>
          <td>28</td>
          <td class="bold">
            制定满意度测评制度，每半年测评１次，服务对象满意率不低于90%。
          </td>
          <td>无制度或服务满意度不符合； 未按要求开展测评为不符合。</td>
          <td>查看相关测评资料</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_28.value }}
          </td>
          <td>
            {{ tableData.data_28.text }}
          </td>
        </tr>
      </template>
      <!--七、业务管理 -->
      <template>
        <tr class="part7 part-hash">
          <td rowspan="1" class="td-top">七、业务管理</td>
          <td>29</td>
          <td class="bold">
            建立在院服务对象档案管理库，要有生活档案和健康档案，包括入院服务对象健康评估、能力评估
            （入住评估、常规评估、即时评估）、入住协议（其中包括不得侵犯老年人肖像权、不得泄露老年人隐私等）、监护人和服务对象身份证明、监护人联系方式、在院记录等相关资料，请假、出院或死亡７天内档案必须入库。
          </td>
          <td>未建立档案管理库不符合；档案资料每缺2项以上的为不符合。</td>
          <td>查看制度、文件</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_29.value }}
          </td>
          <td>
            {{ tableData.data_29.text }}
          </td>
        </tr>
      </template>
      <!--八、安全管理 -->
      <template>
        <tr class="part8 part-hash">
          <td rowspan="10" class="td-top">八、安全管理</td>
          <td>30</td>
          <td class="bold">
            机构内各区域要配备相应的消防器材，并保持完好；所有安全疏散通道、应急照明和出口均设消防安全指示标志，并保持安全出口、疏散通道、消防车通道畅通；走廊、房间醒目处有消防疏散示意图；有各类设施安全操作规范，简洁、明了、完整；工作人员会正确使用、检查消防设施设备。
          </td>
          <td>其中1项不达标为部分符合，2项及以上为不符合</td>
          <td>现场查看、现场抽查工作人员演示</td>
          <td>消防支队</td>
          <td class="text-center">
            {{ tableData.data_30.value }}
          </td>
          <td>
            {{ tableData.data_30.text }}
          </td>
        </tr>
        <tr>
          <td>31</td>
          <td class="bold">
            机构每年组织开展一次人、物、环境、管理等全面风险辨识；按照风险等级，逐一制定风险管控措施，明确管控重点、管控部门和管控人员；对较大及以上等级的风险，制定专门管控方案；主要负责人每月至少组织一次安全（防火）检查和风险管控措施及方案的落实情况；安全管理人员每周进行一次风险管控检查；护理人员每两小时进行一次防火巡查，每天对安全风险控制措施落实情况进行一次全面检查；制定消防演练、应急疏散和灭火预案；每半年至少组织一次消防演练和消防安全教育培训；每季度主要负责人要组织召开一次对消防和安全工作会议。
          </td>
          <td>其中1项不达标为部分符合，2项及以上为不符合</td>
          <td>现场查看、查看相关资料</td>
          <td>应急管理局</td>
          <td class="text-center">
            {{ tableData.data_31.value }}
          </td>
          <td>
            {{ tableData.data_31.text }}
          </td>
        </tr>
        <tr>
          <td>32</td>
          <td class="bold">
            配备至少１名持证上岗的兼职消防工作人员。有明确的消防责任人，对消防设施、特种设备进行日常维修保养，定期自检，指定有资质的机构对特种设备进行定期检验，有检查报告并备案。服务对象居室不能有火种、刀具、过期食品、药品等，每天检查
            １次。
          </td>
          <td>其中1项不达标为部分符合，有2项及以上不达标的为不符合</td>
          <td>查看职业资格证、相关资料，现场抽查</td>
          <td>消防支队</td>
          <td class="text-center">
            {{ tableData.data_32.value }}
          </td>
          <td>
            {{ tableData.data_32.text }}
          </td>
        </tr>
        <tr>
          <td>33</td>
          <td class="bold">
            设立吸烟室或吸烟处，有明显标志；人员住宿和公共场所禁止吸烟，有明显标志。
          </td>
          <td>有1项未做到的为部分符合，2项及以上不达标的为不符合</td>
          <td>现场查看</td>
          <td>消防支队</td>
         <td class="text-center">
            {{ tableData.data_33.value }}
          </td>
          <td>
            {{ tableData.data_33.text }}
          </td>
        </tr>
        <tr>
          <td>34</td>
          <td class="bold">
            各机构签订安全、消防责任书，明确安全、消防管理人员；全年无一般以上责任事故。
          </td>
          <td>有1项未做到的为不符合</td>
          <td>查看制度、查看安全责任书</td>
          <td>消防支队</td>
         <td class="text-center">
            {{ tableData.data_34.value }}
          </td>
          <td>
            {{ tableData.data_34.text }}
          </td>
        </tr>
        <tr>
          <td>35</td>
          <td class="bold">
            具备安全防护服务设施、设备；消防设施设备完好；各类电梯等特种设备每年聘请有资质的机构检测一次，运行良好。
          </td>
          <td>1项不达标为部分符合</td>
          <td>现场查看</td>
          <td>消防支队</td>
          <td class="text-center">
            {{ tableData.data_35.value }}
          </td>
          <td>
            {{ tableData.data_35.text }}
          </td>
        </tr>
        <tr>
          <td>36</td>
          <td class="bold">
            建立视频监控系统，对养老机构公共区域进行全方位监控或实行24小时巡查。
          </td>
          <td>建立视频监控系统或实行24小时巡查，均为符合</td>
          <td>现场查看、视频记录</td>
          <td>消防支队</td>
           <td class="text-center">
            {{ tableData.data_36.value }}
          </td>
          <td>
            {{ tableData.data_36.text }}
          </td>
        </tr>
        <tr>
          <td>37</td>
          <td class="bold">
            建立突发事件处理的应急预案，对自伤、伤人、跌倒、坠床、噎食、误吸、走失、烫伤、食物中毒等事件有明确应急处理流程和报告制度。
          </td>
          <td>有预案、有流程、报告制度，缺少1项为部分符合</td>
          <td>现场查看、流程、文件、记录</td>
          <td>应急局</td>
          <td class="text-center">
            {{ tableData.data_37.value }}
          </td>
          <td>
            {{ tableData.data_37.text }}
          </td>
        </tr>
        <tr>
          <td>38</td>
          <td class="bold">
            防止机构内感染。建立机构内感染预防和处理办法，有消毒和隔离制度，设隔离室，按要求配置相应物品，有传染病预防措施。
          </td>
          <td>当月内养老机构内群发感染性腹 泻、发热、疥疮为不符合</td>
          <td>现场查看相关制度资料</td>
          <td>卫健局</td>
           <td class="text-center">
            {{ tableData.data_38.value }}
          </td>
          <td>
            {{ tableData.data_38.text }}
          </td>
        </tr>
        <tr>
          <td>39</td>
          <td class="bold">为入住的每一位服务对象购买综合责任保险。</td>
          <td>漏保一人为不符合</td>
          <td>查看保险单据</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_39.value }}
          </td>
          <td>
            {{ tableData.data_39.text }}
          </td>
        </tr>
      </template>
      <!--九、生活护理服务 -->
      <template>
        <tr class="part9 part-hash">
          <td rowspan="7" class="td-top">九、生活护理服务</td>
          <td>40</td>
          <td class="bold">
            每天清洁居室卫生１次；室内物品摆放整齐有序，无障碍物；墙壁、门窗清洁无灰尘；桌面、地面无垃圾；每周进行1次卫生检查；每季度灭
            “四害”１次。
          </td>
          <td>
            不整洁或物品摆放无序、无卫生检查记录、无灭四害记录其中1项为部分符合，2项及以上为不符合
          </td>
          <td>现场查看，查看记录</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_40.value }}
          </td>
          <td>
            {{ tableData.data_40.text }}
          </td>
        </tr>
        <tr>
          <td>41</td>
          <td class="bold">
            服务对象干净整洁，保持衣着、皮肤、头发、口腔、手脚、会阴清洁，身上无异味；保持头发短、胡子短、指甲短。
          </td>
          <td>3名及以上未达要求的为不符合</td>
          <td>现场查看3名以上服务对象</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_41.value }}
          </td>
          <td>
            {{ tableData.data_41.text }}
          </td>
        </tr>
        <tr>
          <td>42</td>
          <td class="bold">
            床上用品 （床单、被套、枕套） 清洁无异味，服务对象离床立即折叠整齐。
          </td>
          <td>5张床及以上未达要求的为不符合</td>
          <td>现场查看</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_42.value }}
          </td>
          <td>
            {{ tableData.data_42.text }}
          </td>
        </tr>
        <tr>
          <td>43</td>
          <td class="bold">
            护理员着装整洁，佩戴岗位标识上岗，举止文明，微笑服务。
          </td>
          <td>2项及以上为不符合</td>
          <td>现场查看</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_43.value }}
          </td>
          <td>
            {{ tableData.data_43.text }}
          </td>
        </tr>
        <tr>
          <td>44</td>
          <td class="bold">
            护理人员24小时值班，并做好交接班记录；生活照料有记录，包括服务对象的饮食、排泄、睡眠、卫生、安全。协助服务对象按时服药，并做好记录。
          </td>
          <td>记录不完善的的为不符合</td>
          <td>查看老人相关生活护理记录及护理员交接班记录</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_44.value }}
          </td>
          <td>
            {{ tableData.data_44.text }}
          </td>
        </tr>
        <tr>
          <td>45</td>
          <td class="bold">
            护理人员能够协助服务对象穿脱衣、口腔清洁、身体清洁
            （床上擦浴）、预防压疮、轮椅转移、喂饭、鼻饲、喂水、睡眠照料、更换尿不湿、床上体位转移、更换床上用品。
          </td>
          <td>2项及以上不达标的为不符合</td>
          <td>现场随机抽查2名 以上护理员，不少于2项内容进行考核</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_45.value }}
          </td>
          <td>
            {{ tableData.data_45.text }}
          </td>
        </tr>
        <tr>
          <td>46</td>
          <td class="bold">每年至少为入住服务对象体检1次。</td>
          <td>做到老年人每年体检1次，即为符合</td>
          <td>查看体检记录</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_46.value }}
          </td>
          <td>
            {{ tableData.data_46.text }}
          </td>
        </tr>
      </template>
      <!--十、膳食服务 -->
      <template>
        <tr class="part10 part-hash">
          <td rowspan="2" class="td-top">十、膳食服务</td>
          <td>47</td>
          <td class="bold">
            根据老年人身体状况及需求、地域特点、民族、宗教习惯提供膳食；食谱每周至少更换一次并上墙，公布后并存档。
          </td>
          <td>
            未按要求提供膳食、、食谱不上墙、未按要求更换食谱，有其中1项为部分符合，2项及以上为不符合
          </td>
          <td>现场查看食谱、饭菜</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_47.value }}
          </td>
          <td>
            {{ tableData.data_47.text }}
          </td>
        </tr>
        <tr>
          <td>48</td>
          <td class="bold">
            膳食部门每月召开1次膳食管理会议听取服务对象及家属意见。
          </td>
          <td>
            未召开会议此项、未达要求会议次数、无整改措施和记录，有其中1项为部分符合，2项及以上为不符合
          </td>
          <td>查看会议记录、整改记录，现场询问3名老人</td>
          <td>民政局</td>
           <td class="text-center">
            {{ tableData.data_48.value }}
          </td>
          <td>
            {{ tableData.data_48.text }}
          </td>
        </tr>
      </template>
      <!--十一、社会工作及医疗服务 -->
      <template>
        <tr class="part11 part-hash">
          <td rowspan="2" class="td-top">十一、社会工作及医疗服务</td>
          <td>49</td>
          <td class="bold">
            制订月、季度、年度活动计划，组织和引导老年人开展小型文体娱乐活动，每周不少于
            １次，大型文体娱乐活动每季度不少于１次。
          </td>
          <td>
            未按要求开展活动、无活动图文记录、无老人反馈记录，有其中1项为部分符合，2项及以上为不符合
          </td>
          <td>查看活动图文、反馈记录、视频资料；现场询问3名以上老人</td>
          <td>民政局</td>
          <td class="text-center">
            {{ tableData.data_49.value }}
          </td>
          <td>
            {{ tableData.data_49.text }}
          </td>
        </tr>
        <tr>
          <td>50</td>
          <td class="bold">
            每月组织服务对象进行一次健康讲座；合作医疗机构每星期诊疗1次，根据服务对象病情变化实际情况及时转诊。
          </td>
          <td>未按要求组织学习、无诊疗记录的，有2项及以上为不符合</td>
          <td>查看活动图文、反馈记录、视频资料；现场询问3名以上老人</td>
          <td>卫健局</td>
           <td class="text-center">
            {{ tableData.data_50.value }}
          </td>
          <td>
            {{ tableData.data_50.text }}
          </td>
        </tr>
      </template>
    </table>
    <!-- 提示事项 -->
    <div class="tip brakpage tip-export">
      <span>注:</span>
      <div>1.标黑字体的指标属于基础指标，其余指标属于提升指标。</div>
      <div>
        2.检查结果为符合的，填写A；检查结果为部分符合的，填写B；检查结果为不符合的，填写C。
      </div>
    </div>
    <!-- 最终结果统计表 -->
    <table class="evaluate-table total-table">
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
    </table>
    <!-- 签字 -->
    <div class="sign-panel">
      <div class="clearfix">
        <div class="f-l">
          <span class="inline-t f16">负责专员签字：</span>
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
        </div>
        <div class="f-r">
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
          <span class="inline-t f16">专家组成员签字：</span>
          <div class="inline-t">
            <div v-for="(user, index) in signData.checkExpert" :key="index">
              <span class="text-border">{{ user.name }}</span>
              <span class="text-border">{{ user.sex == 0 ? "男" : "女" }}</span>
              <span class="text-border">{{ user.phone }}</span>
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
