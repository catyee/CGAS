<template>
  <div class="" >
    <table class="evaluate-table pb-30">
      <tr class="table-header">
        <td colspan="4">
          <div class="input-line">
            <span class="text-bold f16">机构名称：</span>
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
        <td class="f16" width="8%">检查维度</td>
        <td class="f16" width="8%">检查项目</td>
        <td class="f16">序号</td>
        <td class="f16">检查内容</td>
        <td class="f16">检查细则</td>
        <td class="f16">检查方式</td>
        <td class="f16 text-center" width="12%">检查结果</td>
        <td class="f16" width="20%">整改建议</td>
      </tr>
      <!-- 1基本要求 -->
      <!-- 1-1资质/1-2 初次默认渲染 提高渲染速度 -->
      <template>
        <template>
          <tr class="part1 part-hash">
            <td rowspan="61" class="td-top">1 基本要求</td>
            <td rowspan="4" class="td-top">1-1资质</td>
            <td>1</td>
            <td class="bold">依法办理养老机构设立许可证</td>
            <td>未取得许可证，为不符合。不符合的，请列明原因。</td>
            <td>查看证照</td>
            <td class="text-center">
              {{ tableData.data_1.value }}
            </td>
            <td>
              {{ tableData.data_1.text }}
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
            <td class="text-center">
              {{ tableData.data_2.value }}
            </td>
            <td>
              {{ tableData.data_2.text }}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td class="bold">如有内设医疗机构，应取得医疗机构执业许可证</td>
            <td>内设医疗机构的，不具备许可证或许可证过期的，为不符合。</td>

            <td>查看证照</td>
            <td class="text-center">
              {{ tableData.data_3.value }}
            </td>
            <td>
              {{ tableData.data_3.text }}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              委托第三方服务的第三方服务机构应资质齐备，提供的服务满足质量检查要求。
            </td>
            <td>如有，查看第三方资质证件。不齐备的为不符合。</td>

            <td>查看证照</td>
            <td class="text-center">
              {{ tableData.data_4.value }}
            </td>
            <td>
              {{ tableData.data_4.text }}
            </td>
          </tr>
        </template>
        <!-- 1-2 合同签订 -->
        <template>
          <tr class="part2 part-hash">
            <td rowspan="5" class="td-top">1-2 合同签订</td>
            <td>5</td>
            <td class="bold">老年人确认入住后签署入住合同</td>
            <td>
              养老机构100﹪签入住合同为符合；敬老院100﹪办理入院手续，为符合；未做到100%签合同或协议，为不符合。
            </td>
            <td>查看制度、合同和手续</td>
            <td class="text-center">
              {{ tableData.data_5.value }}
            </td>
            <td>
              {{ tableData.data_5.text }}
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td class="bold">
              与入住老人签订《肖像权使用协议》及《保密协议》未经老年人及监护人同意，不得泄露老年人及监护人个人信息
            </td>
            <td>发现此类问题投诉，为不符合。</td>
            <td>查看制度，相关记录；询问老年人</td>
            <td class="text-center">
              {{ tableData.data_6.value }}
            </td>
            <td>{{ tableData.data_6.text }}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>有合同管理制度或标准</td>
            <td>如无为不符合。</td>
            <td>查看制度</td>
            <td class="text-center">
              {{ tableData.data_7.value }}
            </td>
            <td>
              {{ tableData.data_7.text }}
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td class="bold">
              建立老年人生活和健康档案，包括入住合同、入住人员及其家属（监护人）或代理人（机构）基本信息、老年人身份证及户口本复印件等有关资料，并妥善保存
            </td>
            <td>
              建立档案，且档案中包含2项材料为部分符合，包含3项以上材料的为符合。
            </td>
            <td>查看制度、文件</td>
            <td class="text-center">
              {{ tableData.data_8.value }}
            </td>
            <td>
              {{ tableData.data_8.text }}
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              委托第三方服务的应签订外包合同，合同内容应包含外包服务项目和质量要求，对合同履行有日常监管措施。
            </td>
            <td>如有此类情况，签订外包合同，有则符合。</td>
            <td>查看合同</td>
            <td class="text-center">
              {{ tableData.data_9.value }}
            </td>
            <td>
              {{ tableData.data_9.text }}
            </td>
          </tr>
        </template>

        <template>
          <!-- 1-3设备设施 -->
          <template v-if="defer(3)">
            <tr class="part3 part-hash">
              <td rowspan="24" class="td-top">1-3设备设施</td>
              <td>10</td>
              <td class="bold">机构不设置在自然灾害易发、存在污染的地域</td>
              <td>有1项情况存在，即不符合。</td>
              <td>查看周边环境、相关文件</td>
              <td class="text-center">
                {{ tableData.data_10.value }}
              </td>
              <td>
                {{ tableData.data_10.text }}
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>
                建筑布局科学合理，结构安全、机电和其他设备设施完善，公共设施与机构功能相匹配，满足老年人需求
              </td>
              <td>如有1项情况不符合，即不符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_11.value }}
              </td>
              <td>
                {{ tableData.data_11.text }}
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td class="bold">进行适老化改造，实现无障碍环境</td>
              <td>
                楼道扶手、洗手间扶手、无障碍坡道等老年人生活及活动区域有1处未实现无障碍，即为部分符合，有
                2项及以上为不符合。
              </td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_12.value }}
              </td>
              <td>
                {{ tableData.data_12.text }}
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>
                公共区域有明显的公共信息图形标志，设置系统、连续、科学合理。符合
                GB/T10001.1、GB/T10001.2 和 DB11/T 1353 的规定。
              </td>
              <td>
                标志标识不全、有破损超过40%的，为部分符合；标志标识不全、有破损超过85%的，为不符合。
              </td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_13.value }}
              </td>
              <td>
                {{ tableData.data_13.text }}
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>
                设置公共浴室、公共卫生间、接待室、餐厅等共同活动区，并配备相应设施设备和物品
              </td>
              <td>满足3项为部分符合，4项及以上为符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_14.value }}
              </td>
              <td>
                {{ tableData.data_14.text }}
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>
                配备厨房、洗衣房、垃圾处理场所（存放点）等服务运营需要的后勤保障设施设备和物品
              </td>
              <td>满足2项为部分符合，3项及以上为符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_15.value }}
              </td>
              <td>
                {{ tableData.data_15.text }}
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td class="bold">老年人能接触到的各种设备无尖角凸出部分</td>
              <td>有2类物品有尖角凸出部分，为部分符合，3类以上则为不符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_16.value }}
              </td>
              <td>
                {{ tableData.data_16.text }}
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td class="bold">地面做防滑处理</td>
              <td>有1处不满足，为不符合。</td>
              <td>现场查看</td>
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
                每间居室应按不小于 6m2/床确定使用面积；单人间居室使用面积不小于
                10m2，双人间居室使用面积不小于
                16m2，护养型床位的多人间居室床位数不应大于 6
                床，非护养型床位的多人间居室床位数不应大于 4
                床；居室内留有轮椅回转空间，主要通道净宽不小于
                1.05m，床边留有护理、急救操作空间，相邻床位长边距不小于 0.8m
              </td>
              <td>
                居室面积符合标准、配备相应的设施设备和物品，二者满足其一为部分符合，二者全满足为符合。
              </td>
              <td>现场查看、测量</td>
              <td class="text-center">
                {{ tableData.data_18.value }}
              </td>
              <td>
                {{ tableData.data_18.text }}
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>
                老年人床头、使用的厕所安装呼叫装置或为老年人配备可穿戴紧急呼叫设备
              </td>
              <td>安装并可正常使用为符合；不能正常使用为不符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_19.value }}
              </td>
              <td>
                {{ tableData.data_19.text }}
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>
                老年人用房的门开启净宽不小于 0.8m，护养型床位居室的门不小于
                1.1m，建筑主要出入口的门不小于 1.1m，含有 2
                个或多个门扇的门，至少 1 个门扇的开启净宽不小于
                0.8m；向老年人公共活动区域开启的门不阻碍交通；老年人起居室等房门采用内外均可开启的锁具及方便老年人使用的把手，可设置应急观察装置
              </td>
              <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_20.value }}
              </td>
              <td>
                {{ tableData.data_20.text }}
              </td>
            </tr>
            <tr>
              <td>21</td>
              <td class="bold">老年人居室及活动空间窗户或阳台等有防坠落措施</td>
              <td>1处不符合为不符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_21.value }}
              </td>
              <td>
                {{ tableData.data_21.text }}
              </td>
            </tr>
            <tr>
              <td>22</td>
              <td>
                每个公共卫生间内应至少设1个供轮椅老年人使用的无障碍厕位，或设无障碍卫生间，厕位面积不小于
                1.2m×2m，公用卫生间内设 0.4m
                高的坐便器；地面防滑，不积水；设置安全扶手、废纸桶、盥洗盆、面镜、洗手液、紧急呼叫设备等
              </td>
              <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_22.value }}
              </td>
              <td>
                {{ tableData.data_22.text }}
              </td>
            </tr>
            <tr>
              <td>23</td>
              <td>
                居室或居室卫生间未设洗浴设施的，应设置公共浴室；浴位数量按所服务的老年人床位每
                8～12 床设 1 个浴位，轮椅老年人的专用浴位不少于 1 个；
                浴室应配备助浴设施，并留有助浴空间；地面防滑，不积水；有无障碍厕位、无障碍盥洗盆，并附更衣空间；配置放物台或更衣柜、挂衣钩、沐浴器、洗澡椅、防滑浴垫、换气扇。
              </td>
              <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_23.value }}
              </td>
              <td>
                {{ tableData.data_23.text }}
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>
                设置与食品供应方式和品种相适应的加工场所，与污染源保持25
                米以上距离；场所布局科学合理；地面、墙面采用无毒、无异味、不透水、不易积垢、耐腐蚀、防滑的材料，粗（初）加工、切配、餐用具清洗消毒和烹调等场所的地面易于清洗、防滑，并有排水系统；天花板采用无毒、无异味、不吸水、表面光洁、耐腐蚀、耐温材料涂覆或装修；食品暴露场所屋顶若为不平整的结构或有管道通过，加设平整、易于清洁的吊顶，吊顶间缝隙应严密封闭。
              </td>
              <td>如有，2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_24.value }}
              </td>
              <td>
                {{ tableData.data_24.text }}
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>
                厨房有通风、防腐、防尘、防蝇、防鼠、防虫等设施设备；有烟感报警器、自动喷淋器、燃气报警器、灭火器、石棉布等消防设施设备；厨房和餐厅之间有隔离、隔热、隔气味的有效措施；配备留样专用容器和冷藏设备。
              </td>
              <td>如有，2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_25.value }}
              </td>
              <td>
                {{ tableData.data_25.text }}
              </td>
            </tr>
            <tr>
              <td>26</td>
              <td>
                就餐空间干净整洁，保持空气流通，空间布置能满足餐车进出、送餐到位服务的需要，并为服务人员留有分餐、助餐空间；单人座椅可移动且牢固稳定，餐桌便于轮椅老年人使用；配有公告栏、洗漱池、防蝇等设备。
              </td>
              <td>如有，2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_26.value }}
              </td>
              <td>
                {{ tableData.data_26.text }}
              </td>
            </tr>
            <tr>
              <td>27</td>
              <td>
                洗涤空间布局合理，洁污分开，物流由污到洁，顺行通过；地面采用防滑材料，易于清洁、不渗漏；有满足洗衣、消毒、叠衣、存放的空间；有指定地点收集、清点污物，并有固定容器收集污物，传染病污染衣物封闭运输；有固定的晾晒场地。
              </td>
              <td>如有，2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_27.value }}
              </td>
              <td>
                {{ tableData.data_27.text }}
              </td>
            </tr>
            <tr>
              <td>28</td>
              <td>
                医疗空间满足开展基本医疗服务与救治需求，采光通风良好，医务室建筑面积不小于
                50平方米，设有诊室、治疗室、处置室，治疗室、处置室的使用面积均不少于
                10平方米；需要设置药房和观察室的机构，每室独立且符合卫生学布局及流程；医务室设施设备配置符合
                DB11/T 220 的相关要求。
              </td>
              <td>如有，2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_28.value }}
              </td>
              <td>
                {{ tableData.data_28.text }}
              </td>
            </tr>
            <tr>
              <td>29</td>
              <td class="bold">
                机构有自备药或对老年人进行自带药管理的有独立的药品存放空间和储存设备；医疗垃圾存放和处理符合相关法律法规要求。
              </td>
              <td>医疗垃圾处理可与专业机构签订合作协议。</td>
              <td>现场查看，查看合同</td>
              <td class="text-center">
                {{ tableData.data_29.value }}
              </td>
              <td>
                {{ tableData.data_29.text }}
              </td>
            </tr>
            <tr>
              <td>30</td>
              <td>
                老年人使用的走廊通行净宽不小于
                1.8m；老年人使用的楼梯梯段通行净宽不小于
                1.2m，各级踏步一致，踏步前缘不突出，踏面下方不透空；应采用防滑材料饰面，所有踏步上的防滑条、警示条附着物不突出踏面。
              </td>
              <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
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
                交通空间的主要位置两侧设连续扶手，单层扶手高度
                850～900mm，扶手内侧与墙面距离不小于
                40mm，扶手安装坚固，形状易于抓握（圆形扶手直径
                35～50mm，矩形扶手截面尺寸 35～50mm）。
              </td>
              <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_31.value }}
              </td>
              <td>
                {{ tableData.data_31.text }}
              </td>
            </tr>
            <tr>
              <td>32</td>
              <td>
                老年人居室、餐厅、卫生间、浴室、文娱与健身用房、康复与医疗用房设紧急呼叫装置，且老年人方便触及，或为老年人配备可穿戴紧急呼叫设备。紧急呼叫信号能传输至相应护理站或值班室。
              </td>
              <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
              <td>现场查看，试用设备</td>
              <td class="text-center">
                {{ tableData.data_32.value }}
              </td>
              <td>
                {{ tableData.data_32.text }}
              </td>
            </tr>
            <tr>
              <td>33</td>
              <td>及时维修或更换居室、护理区域设施、设备及物品</td>
              <td>
                有1-2种不能正常使用的设施设备、物品为部分符合，3种及以上为不符合。
              </td>
              <td>查看制度、现场查看老人居室、维修记录</td>
              <td class="text-center">
                {{ tableData.data_33.value }}
              </td>
              <td>
                {{ tableData.data_33.text }}
              </td>
            </tr>
          </template>

          <!-- 1-4人员资质  -->
          <template v-if="defer(4)">
            <tr class="part4 part-hash">
              <td rowspan="8" class="td-top">1-4人员资质</td>
              <td>34</td>
              <td class="bold">负责人应参加相关培训，具有养老服务专业知识</td>
              <td>
                参加养老服务专业培训为符合；参加其它培训为部分符合；没有参加相关培训，为不符合。
              </td>
              <td>查看证书</td>
              <td class="text-center">
                {{ tableData.data_34.value }}
              </td>
              <td>
                {{ tableData.data_34.text }}
              </td>
            </tr>
            <tr>
              <td>35</td>
              <td>
                养老护理员与老年人比例：重度失能老人照护比不低于
                1:3；中度失能老人照护比不低于 1:5；轻度失能老人照护比不低于1:7。
              </td>
              <td>
                查看入住老人评估等级信息和员工花名册。养老护理员数量除以老人数量为护理配比。所得数小于标准数为不符合。
              </td>
              <td>查看文件资料</td>
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
                持有国家职业资格的养老护理员占养老护理员总数的比例不低于30%或所有养老护理员经过专业技能培训合格
              </td>
              <td>
                养老院：两种情况满足其一的即为符合；持有国家职业资格的养老护理员占养老护理员总数的比例低于30%或60%养老护理员经过专业技能培训合格，为部分符合；敬老院：30%-60%养老护理员接受岗前培训的，为部分符合，61%-100%为符合。
              </td>
              <td>查看证书、相关记录</td>
              <td class="text-center">
                {{ tableData.data_36.value }}
              </td>
              <td>
                {{ tableData.data_36.text }}
              </td>
            </tr>
            <tr>
              <td>37</td>
              <td>
               餐饮服务人员必须经体检取得健康合格证后上岗并每年体检
              </td>
              <td>如有，100%持证上岗为符合</td>
              <td>查看证照，对照本人；如果由签约餐饮服务企业提供服务，则查看签约协议。</td>
              <td class="text-center">
                {{ tableData.data_37.value }}
              </td>
              <td>
                {{ tableData.data_37.text }}
              </td>
            </tr>
            <tr>
              <td>38</td>
              <td>
                在养老院内开展服务的医生、护士等依法需要持证上岗的专业技术人员应持有与其岗位相适应的专业资格证书或执业证书
              </td>
              <td>
                如有，100%持证上岗为符合。如委托第三方提供服务，检查第三方文件。
              </td>
              <td>
                查看证照，对照本人；如果由签约医疗机构提供服务，则查看签约协议。
              </td>
              <td class="text-center">
                {{ tableData.data_38.value }}
              </td>
              <td>
                {{ tableData.data_38.text }}
              </td>
            </tr>
            <tr>
              <td>39</td>
              <td>配备社会工作者、康复师、营养师、心理咨询师等专业人员</td>
              <td>
                如有，养老机构：配备两类人员（专兼职）即为符合；敬老院：鼓励利用社会资源，外聘志愿者提供相应服务，有则符合。
              </td>
              <td>
                查看证照或（聘书），对照本人；如果由签约服务机构提供服务，则查看签约协议。
              </td>
              <td class="text-center">
                {{ tableData.data_39.value }}
              </td>
              <td>
                {{ tableData.data_39.text }}
              </td>
            </tr>
            <tr>
              <td>40</td>
              <td>
                在养老院内开展物业维修服务的人员需要持证上岗的专业人员应持有与其岗位相适应的专业资格证书或执业证书。如电工、水暖工、电梯工、锅炉工等
              </td>
              <td>如有，100%持证上岗为符合。</td>
              <td>
                查看证照或（聘书），对照本人；如果由签约服务机构提供服务，则查看签约协议。
              </td>
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
                定期开展人员培训，培训内容包括以人为本、爱老尊老孝老服务理念、相关政策法规及管理服务技能
              </td>
              <td>
                3--6个月开展一次培训，为符合，6个月以上培训一次为部分符合。
              </td>
              <td>查看培训记录</td>
              <td class="text-center">
                {{ tableData.data_41.value }}
              </td>
              <td>
                {{ tableData.data_41.text }}
              </td>
            </tr>
          </template>

          <!-- 1-5管理  -->
          <template v-if="defer(5)">
            <tr class="part5 part-hash">
              <td rowspan="20" class="td-top">1-5管理</td>
              <td>42</td>
              <td class="bold">
                各类安全管理制度/标准健全，管理制度/标准应明确相关机构及人员的职责、权限、工作内容、流程及要求；各部门、各层级有签订安全责任书。全年无重大责任事故。
              </td>
              <td>
                如无管理制度或无安全责任书为不符合。如近一年内有重大安全责任事故为不符合。如内容不完善为部分符合。
              </td>
              <td>查看制度，查看安全责任书</td>
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
                有各类安全操作规范，规范应简洁、明了、完整，各环节接口明确、衔接紧密；各种安全记录完备，工作档案完整清楚，有安全检查档案，记录详细。
              </td>
              <td>如缺少其中一项为不符合，如内容不完善为部分符合。</td>
              <td>查看制度、文件、记录</td>
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
                每月组织一次综合检查，重大节日和重要时期、重大活动保障适时组织检查；各级、各部门做好定期检查，并提出持续改进方案；制定各类应急安全预案，包括紧急疏散、紧急救助等。内容完整，切实可行，适时组织演练
              </td>
              <td>如缺少其中一项为不符合，如内容不完善为部分符合。</td>
              <td>查看制度、文件、记录</td>
              <td class="text-center">
                {{ tableData.data_44.value }}
              </td>
              <td>
                {{ tableData.data_44.text }}
              </td>
            </tr>
            <tr>
              <td>45</td>
              <td class="bold">对入住老年人定期开展评估</td>
              <td>至少每半年开展1次评估为符合，6个月以上开展为部分符合。</td>
              <td>查看评估记录、制度文件</td>
              <td class="text-center">
                {{ tableData.data_45.value }}
              </td>
              <td>
                {{ tableData.data_45.text }}
              </td>
            </tr>
            <tr>
              <td>46</td>
              <td class="bold">
                定期对服务质量进行评估或考核，无虐老、欺老现象
              </td>
              <td>
                至少每年开展1次评估或考核为符合；如有欺老、虐老现象的，则不符合，必须整改。
              </td>
              <td>查看制度、记录；询问老年人</td>
              <td class="text-center">
                {{ tableData.data_46.value }}
              </td>
              <td>
                {{ tableData.data_46.text }}
              </td>
            </tr>
            <tr>
              <td>47</td>
              <td class="bold">至少每年开展一次服务质量满意度调查</td>
              <td>有则符合，无则不符合。</td>
              <td>查看制度、现场查看老人、照护记录</td>
              <td class="text-center">
                {{ tableData.data_47.value }}
              </td>
              <td>
                {{ tableData.data_47.text }}
              </td>
            </tr>
            <tr>
              <td>48</td>
              <td>
                对外公开养老院基本信息，包括地理位置、联系方式、服务时间等
              </td>
              <td>满足1-2项的为部分符合，满足3项及以上为符合。</td>
              <td>查看文件材料</td>
              <td class="text-center">
                {{ tableData.data_48.value }}
              </td>
              <td>
                {{ tableData.data_48.text }}
              </td>
            </tr>
            <tr>
              <td>49</td>
              <td>
                院内公布服务管理信息，包括服务管理部门、人员资质、相关证照、服务项目等
              </td>
              <td>满足2项的为部分符合，满足3项及以上为符合。</td>
              <td>现场查看</td>
              <td class="text-center">
                {{ tableData.data_49.value }}
              </td>
              <td>
                {{ tableData.data_49.text }}
              </td>
            </tr>
            <tr>
              <td>50</td>
              <td>
                养老院接受社会捐赠应统一登记，按捐赠方意愿和相关规定使用受赠物资
              </td>
              <td>
                如有此项内容，应有统一记录，为部分符合分，且使用合规，则为符合。
              </td>
              <td>查看记录</td>
              <td class="text-center">
                {{ tableData.data_50.value }}
              </td>
              <td>
                {{ tableData.data_50.text }}
              </td>
            </tr>
            <tr>
              <td>51</td>
              <td class="bold">
                建立老年人入院、出院制度，协助老年人及家属办理入出院手续
              </td>
              <td>有出入院制度为部分符合，并按制度执行为符合。</td>
              <td>查看制度</td>
              <td class="text-center">
                {{ tableData.data_51.value }}
              </td>
              <td>
                {{ tableData.data_51.text }}
              </td>
            </tr>
            <tr>
              <td>52</td>
              <td class="bold">
                养老院服务费原则上按月度收取，价格变动应提前告知老年人，不得强制收费
              </td>
              <td>
                按月收取或价格变动提前告知，二者满足其一的，为部分符合，均满足为符合；如有强制收费现象，则不符合。
              </td>
              <td>查看财务制度、收费价目表、收支情况</td>
              <td class="text-center">
                {{ tableData.data_52.value }}
              </td>
              <td>
                {{ tableData.data_52.text }}
              </td>
            </tr>
            <tr>
              <td>53</td>
              <td>
                应制定服务流程或操作程序、规章制度和部门职责人员岗位责任。所有服务项目均应制定服务
                流程或操作程序，流程应简洁、明了、完整，各环节接口明确、衔接紧密。制度应符合国家法律法规要求，形成体系，职责明确
              </td>
              <td>如无相应内容为不符合。如有缺项漏项为部分符合。</td>
              <td>查看制度、流程、文件、记录</td>
              <td class="text-center">
                {{ tableData.data_53.value }}
              </td>
              <td>
                {{ tableData.data_53.text }}
              </td>
            </tr>
            <tr>
              <td>54</td>
              <td>
                应制定服务技术操作规范，并按规范要求提供服务。规范应包括但不限于：操作步骤、关键控
                制点及要求、必要的设施设备、时限或频次、记录要求、安全保障措施要求
              </td>
              <td>如无相应内容为不符合。如有缺项漏项为部分符合。</td>
              <td>查看制度、流程、文件、记录</td>
              <td class="text-center">
                {{ tableData.data_54.value }}
              </td>
              <td>
                {{ tableData.data_54.text }}
              </td>
            </tr>
            <tr>
              <td>55</td>
              <td>
                应用文字或图表向老人及相关第三方公示或说明服务范围、内容、时间、地点、人员、收费标准、须知。说明应精练、清晰、准确
              </td>
              <td>如无相应内容为不符合。如有缺项漏项为部分符合。</td>
              <td>查看制度、流程、文件、记录</td>
              <td class="text-center">
                {{ tableData.data_55.value }}
              </td>
              <td>
                {{ tableData.data_55.text }}
              </td>
            </tr>
            <tr>
              <td>56</td>
              <td>
                应制定检查程序和要求。检查程序应包括但不限于：组织者、检查时间、依据、内容、方式、
                结果的表述与处理
              </td>
              <td>如无相应内容为不符合。如有缺项漏项为部分符合。</td>
              <td>查看制度、流程、文件、记录</td>
              <td class="text-center">
                {{ tableData.data_56.value }}
              </td>
              <td>
                {{ tableData.data_56.text }}
              </td>
            </tr>
            <tr>
              <td>57</td>
              <td>
                应保留提供服务文件和记录。记录应及时、准确、真实、完整，责任人签章应完整
              </td>
              <td>如无相应内容为不符合。如有缺项漏项为部分符合。</td>
              <td>查看制度、流程、文件、记录</td>
              <td class="text-center">
                {{ tableData.data_57.value }}
              </td>
              <td>
                {{ tableData.data_57.text }}
              </td>
            </tr>
            <tr>
              <td>58</td>
              <td>建立服务人员绩效考核、优秀员工奖等激励制度</td>
              <td>有1项制度为部分符合，2项及以上为符合。</td>
              <td>查看制度</td>
              <td class="text-center">
                {{ tableData.data_58.value }}
              </td>
              <td>
                {{ tableData.data_58.text }}
              </td>
            </tr>
            <tr>
              <td>59</td>
              <td class="bold">提供24小时当班、值班服务，并做好记录和交接班</td>
              <td>
                提供24小时服务,且有相关记录，为符合，无当班、值班记录为部分符合，二者皆无为不符合
              </td>
              <td>查看制度、照护记录、交接班记录</td>
              <td class="text-center">
                {{ tableData.data_59.value }}
              </td>
              <td>
                {{ tableData.data_59.text }}
              </td>
            </tr>
            <tr>
              <td>60</td>
              <td class="bold">
                按程序和要求定期开展各项服务效果评估与考核，至少每月一次，有记录。
              </td>
              <td>
                所有服务内容均应在评估考核范围内，如有缺失为部分符合，如无记录为不符合。
              </td>
              <td>查看制度、评估考核记录</td>
              <td class="text-center">
                {{ tableData.data_60.value }}
              </td>
              <td>
                {{ tableData.data_60.text }}
              </td>
            </tr>
            <tr>
              <td>61</td>
              <td>积极推进养老院标准化建设</td>
              <td>有机构内部服务管理标准、操作规范的，为符合。</td>
              <td>查看标准文本</td>
              <td class="text-center">
                {{ tableData.data_61.value }}
              </td>
              <td>
                {{ tableData.data_61.text }}
              </td>
            </tr>
          </template>
        </template>
      </template>
      <!-- 2 基本服务内容 -->
      <template class="table-container">
        <!--2-1个人生活照料服务 -->
        <template v-if="defer(6)">
          <tr class="part6 part-hash">
            <td rowspan="82" class="td-top">2基本服务内容</td>
            <td rowspan="13" class="td-top">2-1个人生活照料服务</td>
            <td>62</td>
            <td class="bold">
              建立老年人入住评估标准/制度，并开展定期或即时评估，根据老年人情况和评估结果制定或调整服务方案，按需提供服务并有服务计划。
            </td>
            <td>
              有入院评估制度且已开展评估工作为部分符合，并能据此提供相应养老服务的为符合。
            </td>
            <td>查看制度、评估记录、照护记录</td>
            <td class="text-center">
              {{ tableData.data_62.value }}
            </td>
            <td>
              {{ tableData.data_62.text }}
            </td>
          </tr>
          <tr>
            <td>63</td>
            <td class="bold">
              养老护理员对老年人做到“五关心”（饮食、卫生、安全、睡眠、排泄）；养老护理员对老年人做到“七知道”（姓名、照料重点、爱好、疾病、家庭、治疗、心理）。
            </td>
            <td>
              需有明确记录和资料，现场抽查护理员与资料内容进行核对。抽查护理员如准确率低于40%为不符合，准确率40%-80%为部分符合。准确率为80%以上为符合。
            </td>
            <td>抽查询问护理员</td>
            <td class="text-center">
              {{ tableData.data_63.value }}
            </td>
            <td>
              {{ tableData.data_63.text }}
            </td>
          </tr>
          <tr>
            <td>64</td>
            <td class="bold">室内清洁、空气新鲜、无异味，每日清扫房间一次。</td>
            <td>有1项未做到，即为不符合。</td>
            <td>查看制度、现场查看</td>
            <td class="text-center">
              {{ tableData.data_64.value }}
            </td>
            <td>
              {{ tableData.data_64.text }}
            </td>
          </tr>
          <tr>
            <td>65</td>
            <td class="bold">
              床单整洁，平整干燥，晨晚间扫床，定期更换床单、被罩、枕巾；卧床老年人有失禁的防护措施。
            </td>
            <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
            <td>现场查看，查看记录</td>
            <td class="text-center">
              {{ tableData.data_65.value }}
            </td>
            <td>
              {{ tableData.data_65.text }}
            </td>
          </tr>
          <tr>
            <td>66</td>
            <td class="bold">
              衣服穿着舒适，起床协助穿衣，睡前脱衣；服装干净，得体，冬春秋季每周换洗
              1 次，夏季及时换洗。
            </td>
            <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
            <td>现场查看，查看记录</td>
            <td class="text-center">
              {{ tableData.data_66.value }}
            </td>
            <td>
              {{ tableData.data_66.text }}
            </td>
          </tr>
          <tr>
            <td>67</td>
            <td class="bold">
              面部清洁，无污垢。口唇、口角清洁不干燥，无食物残渣，按需要清洁口腔;活动义齿，每餐后取下清洗，每晚清水浸泡。
            </td>
            <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
            <td>现场查看，查看记录</td>
            <td class="text-center">
              {{ tableData.data_67.value }}
            </td>
            <td>
              {{ tableData.data_67.text }}
            </td>
          </tr>
          <tr>
            <td>68</td>
            <td class="bold">
              按需送饭到居室，喂水、喂饭;
              鼻饲管喂食，温度、速度适宜，喂毕清水冲管，纱布包裹。
            </td>
            <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
            <td>现场查看，查看记录</td>
            <td class="text-center">
              {{ tableData.data_68.value }}
            </td>
            <td>
              {{ tableData.data_68.text }}
            </td>
          </tr>
          <tr>
            <td>69</td>
            <td class="bold">
              指（趾）甲、胡须短，定期修剪指（趾）甲。手、足清洁，甲下无污垢。
            </td>
            <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
            <td>现场查看，查看记录</td>
            <td class="text-center">
              {{ tableData.data_69.value }}
            </td>
            <td>
              {{ tableData.data_69.text }}
            </td>
          </tr>
          <tr>
            <td>70</td>
            <td>皮肤无压痕，每 2 小时翻身、拍背、按摩受压部位一次。</td>
            <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
            <td>现场查看，查看记录</td>
            <td class="text-center">
              {{ tableData.data_70.value }}
            </td>
            <td>
              {{ tableData.data_70.text }}
            </td>
          </tr>
          <tr>
            <td>71</td>
            <td>
              定时提醒如厕，帮助老年人排便，即时清洗;
              便盆、便壶用后冲洗，定期消毒。如有留置尿管，需固定合理，每日更换尿袋，清洁尿道口分泌物。
            </td>
            <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
            <td>现场查看，查看记录</td>
            <td class="text-center">
              {{ tableData.data_71.value }}
            </td>
            <td>
              {{ tableData.data_71.text }}
            </td>
          </tr>
          <tr>
            <td>72</td>
            <td class="bold">
              有连续性提供服务记录，记录完善；按程序和要求定期检查个人生活照料服务，每日自查，每周重点查，每月进行效果评估与考核，有记录
            </td>
            <td>有每日房间巡查，但无巡查记录，为部分符合，二者均有则符合。</td>
            <td>查看制度、流程，现场查看老人、照护记录</td>
            <td class="text-center">
              {{ tableData.data_72.value }}
            </td>
            <td>
              {{ tableData.data_72.text }}
            </td>
          </tr>
          <tr>
            <td>73</td>
            <td class="bold">
              查看服务记录。对老人承诺服务完成率低于100%为不符合。现场发放《满意度调查问卷》抽查老人满意度。抽查人数不低于10人，或抽查比例不低于20%。如分数低于80%为不符合。
            </td>
            <td>有每日房间巡查，但无巡查记录，为部分符合，二者均有则符合。</td>
            <td>查看记录、询问老人、现场抽查</td>
            <td class="text-center">
              {{ tableData.data_73.value }}
            </td>
            <td>
              {{ tableData.data_73.text }}
            </td>
          </tr>
          <tr>
            <td>74</td>
            <td class="bold">
              无压疮、无坠床、无烫伤、无跌伤、无自残、无互伤、无噎食、无触电、无走失、无火
            </td>
            <td>在院期间发生任何1例为不符合。</td>
            <td>查看记录、询问老人</td>
            <td class="text-center">
              {{ tableData.data_74.value }}
            </td>
            <td>
              {{ tableData.data_74.text }}
            </td>
          </tr>
        </template>

        <!-- 2-2老年护理服务  -->
        <template v-if="defer(7)">
          <tr class="part7 part-hash">
            <td class="td-top" rowspan="13">2-2老年护理服务</td>
            <td>75</td>
            <td class="bold">
              开展综合评估，明确护理目标，制定护理计划；护理计划切实可行，并有效实施
            </td>
            <td>
              有入院评估制度且已开展评估工作为部分符合，并能据此提供相应养老服务的为符合。
            </td>
            <td>查看制度、评估记录、照护记录</td>
            <td class="text-center">
              {{ tableData.data_75.value }}
            </td>
            <td>
              {{ tableData.data_75.text }}
            </td>
          </tr>
          <tr>
            <td>76</td>
            <td class="bold">
              根据需求配置护理老人必要的设备设施，痴呆老年人备有监控设备，满足安全护理服务；贵重仪器、急救箱专人管理，定期检查，有记录；医疗用物做到四定（定人保管、定时核对消毒、定点放置、定量供应）有记录
            </td>
            <td>
              如存在设备设施缺失为不符合，如有设备但管理记录不完善为部分符合。
            </td>
            <td>现场查看设备、记录</td>
            <td class="text-center">
              {{ tableData.data_76.value }}
            </td>
            <td>
              {{ tableData.data_76.text }}
            </td>
          </tr>
          <tr>
            <td>77</td>
            <td class="bold">
              医护人员对老人异常生命体征、病情变化、特殊心理变化、重要的社会家庭变化、服务范围调整的记录应根据服务对象特点，客观如实记录。记录时间应当具体到分钟。
            </td>
            <td>
              记录负责人为具备专业资质的医护人员。记录内容和时间应具体清晰。如有1项不符合为不符合
            </td>
            <td>查看记录</td>
            <td class="text-center">
              {{ tableData.data_77.value }}
            </td>
            <td>
              {{ tableData.data_77.text }}
            </td>
          </tr>
          <tr>
            <td>78</td>
            <td class="bold">
              正确执行医嘱，对各种治疗严格执行查对制度和无菌技术要求
            </td>
            <td>核对医嘱、记录和设备是否对应，设备是否齐备。如有1项不符合，为不符合。</td>
            <td>查看医嘱、记录、现场设备</td>
            <td class="text-center">
              {{ tableData.data_78.value }}
            </td>
            <td>
              {{ tableData.data_78.text }}
            </td>
          </tr>
          <tr>
            <td>79</td>
            <td class="bold">
              按相关要求做好自备药管理；根据协议及老年人生活能力提供自带药管理，收取药品进行核对交接，记录应签字确认，提供发药监督服药；药品分类放置，标签清楚，账、物相符，定时清点，有登记。
            </td>
            <td>2项以上不符合为不符合，1项不符合为部分符合。</td>
            <td>现场查看，查看记录</td>
            <td class="text-center">
              {{ tableData.data_79.value }}
            </td>
            <td>
              {{ tableData.data_79.text }}
            </td>
          </tr>
          <tr>
            <td>80</td>
            <td>
              开展多种形式老年人自我防护、慢性病防治等健康咨询和指导活动，包括：
              观察老年人症状变化、定期检测、生活方式干预、有落实护理措施、详细记录。
            </td>
            <td>开展2项服务即为部分符合，3项及以上为符合。</td>
            <td>查看制度、现场查看老人、照护记录</td>
            <td class="text-center">
              {{ tableData.data_80.value }}
            </td>
            <td>
              {{ tableData.data_80.text }}
            </td>
          </tr>
          <tr>
            <td>81</td>
            <td>
              医护人员应对养老护理员有定期工作检查和指导、每周检查并记录。有培训计划，有落实
            </td>
            <td>如无，为不符合。如指导周期长于每周为部分符合。</td>
            <td>查看记录</td>
            <td class="text-center">
              {{ tableData.data_81.value }}
            </td>
            <td>
              {{ tableData.data_81.text }}
            </td>
          </tr>
          <tr>
            <td>82</td>
            <td>
              各项预防措施落实，能及时发现老年人的异常变化，进行专科疾病护理及技术操作
            </td>
            <td>具备2项预防措施即为部分符合，3项及以上为符合。</td>
            <td>查看制度、记录</td>
            <td class="text-center">
              {{ tableData.data_82.value }}
            </td>
            <td>
              {{ tableData.data_82.text }}
            </td>
          </tr>
          <tr>
            <td>83</td>
            <td>
              院内感染的预防工作应符合GB15982-1995和《消毒技术规范》的规定。建立机构内感染预防和处理办法，有消毒和隔离制度
            </td>
            <td>应有制度、工作流程，有1项做不到，即为不符合。</td>
            <td>查看制度、现场查看、照护记录</td>
            <td class="text-center">
              {{ tableData.data_83.value }}
            </td>
            <td>
              {{ tableData.data_83.text }}
            </td>
          </tr>
          <tr>
            <td>84</td>
            <td>
              有养老院内个人卫生的规定，包含洗手操作标准、配置手套口罩等必要防护性物品的规定
            </td>
            <td>做到1项得部分符合；2项及以上为符合。</td>
            <td>查看制度、现场查看</td>
            <td class="text-center">
              {{ tableData.data_84.value }}
            </td>
            <td>
              {{ tableData.data_84.text }}
            </td>
          </tr>
          <tr>
            <td>85</td>
            <td class="bold">
              控制院内感染，开展培训，采取预防性措施，专人定期监测有记录。
            </td>
            <td>
              有专人负责且有完整记录，即为符合；满足二者之一，即为部分符合。
            </td>
            <td>查看制度、现场查看、照护记录</td>
            <td class="text-center">
              {{ tableData.data_85.value }}
            </td>
            <td>
              {{ tableData.data_85.text }}
            </td>
          </tr>
          <tr>
            <td>86</td>
            <td>对失智老年人进行非药物干预益智康复训练</td>
            <td>
              如接收此类老人，且有1-2项该类服务，即为部分符合，3项及以上为符合。
            </td>
            <td>查看制度、现场查看老人、照护记录</td>
            <td class="text-center">
              {{ tableData.data_86.value }}
            </td>
            <td>
              {{ tableData.data_86.text }}
            </td>
          </tr>
          <tr>
            <td>87</td>
            <td class="bold">
              应达到8项护理服务基础质量目标：落实护理措施100%、基础护理合格率≥90%、服务满意率≥80%。II度压疮发生率0、院内感染发生率≤15％、常规物品消毒合格率100%、记录合格率≥90%、护士技术操作合格率≥90%、严重护理缺陷0。
            </td>
            <td>
              全部目标达成为符合。有1项未达成为不符合。现场发放《满意度调查问卷》抽查老人满意度。如低于80%为不符合。
            </td>
            <td>查看记录</td>
            <td class="text-center">
              {{ tableData.data_87.value }}
            </td>
            <td>
              {{ tableData.data_87.text }}
            </td>
          </tr>
        </template>

        <!-- 2-3安全防护服务 -->
        <template v-if="defer(8)">
          <tr class="part8 part-hash">
            <td class="td-top" rowspan="24">2-3安全防护服务</td>
            <td>88</td>
            <td class="bold">
              具备安全防护服务设施、设备。消防设施设备完整有效；各类电梯、锅炉等特种设备运行良好。如使用燃气设置可燃气体报警装置
            </td>
            <td>
              如缺少消防设施设备为不符合。其他设备如有但不符合规定为部分符合。
            </td>
            <td>现场查看，试用设备</td>
            <td class="text-center">
              {{ tableData.data_88.value }}
            </td>
            <td>
              {{ tableData.data_88.text }}
            </td>
          </tr>
          <tr>
            <td>89</td>
            <td class="bold">
              制定消防安全、特种设备设施安全、突发事件等相关管理制度、预警机制及应急预案
            </td>
            <td>
              有1项未做到即为不符合；如果没有特种设备，则不对特种设备管理做要求。
            </td>
            <td>查看制度</td>
            <td class="text-center">
              {{ tableData.data_89.value }}
            </td>
            <td>
              {{ tableData.data_89.text }}
            </td>
          </tr>
          <tr>
            <td>90</td>
            <td class="bold">
              配备有资质的专（兼）职消防管理人员、按规定建立微型消防站、并达到“三知四会一联通，处置要在三分钟”要求
            </td>
            <td>各项中有任何1点达不到，则该项不符合。</td>
            <td>查看证书，询问</td>
            <td class="text-center">
              {{ tableData.data_90.value }}
            </td>
            <td>
              {{ tableData.data_90.text }}
            </td>
          </tr>
          <tr>
            <td>91</td>
            <td class="bold">
              人员住宿和主要活动场所严禁使用易燃可燃装饰装修材料，严禁采用夹芯材料燃烧性能低于A级的彩钢板搭建有人居住或者活动的建筑
            </td>
            <td>有1项未做到就不符合。</td>
            <td>现场查看，询问</td>
            <td class="text-center">
              {{ tableData.data_91.value }}
            </td>
            <td>
              {{ tableData.data_91.text }}
            </td>
          </tr>
          <tr>
            <td>92</td>
            <td class="bold">
              对不需要设置自动消防系统的建筑，应当加强物防、技防措施，在人员住宿和主要活动场所安装独立式感烟火灾探测报警器和简易喷淋装置，配备应急照明和灭火器材
            </td>
            <td>
              各项中有任何1点达不到，则该项不符合；设置自动消防系统的养老院则查看是否在相关场所对应设置相应设备。
            </td>
            <td>现场查看，人员操作、询问</td>
            <td class="text-center">
              {{ tableData.data_92.value }}
            </td>
            <td>
              {{ tableData.data_92.text }}
            </td>
          </tr>
          <tr>
            <td>93</td>
            <td class="bold">
              每月至少组织一次防火检查，每日防火巡查，夜间防火巡查不少于两次，并做好记录
            </td>
            <td>有1项未做到就不符合。</td>
            <td>查看制度、现场查看记录、人员操作、询问</td>
            <td class="text-center">
              {{ tableData.data_93.value }}
            </td>
            <td>
              {{ tableData.data_93.text }}
            </td>
          </tr>
          <tr>
            <td>94</td>
            <td class="bold">
              加强消防设施设备运行和维护保养，每年至少全面检查一次，参加区域联防组织，实行联防联治联控
            </td>
            <td>各项中有任何1点达不到，则不符合。</td>
            <td>现场查看，查看制度、记录</td>
            <td class="text-center">
              {{ tableData.data_94.value }}
            </td>
            <td>
              {{ tableData.data_94.text }}
            </td>
          </tr>
          <tr>
            <td>95</td>
            <td class="bold">
              保持安全出口、疏散通道、消防车通道畅通，应急照明、安全疏散指示标志完好。保证常闭式防火门处于关闭状态
            </td>
            <td>有1项未做到就不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_95.value }}
            </td>
            <td>
              {{ tableData.data_95.text }}
            </td>
          </tr>
          <tr>
            <td>96</td>
            <td class="bold">
              制定消防演练、应急疏散和灭火预案，每半年至少演练一次。每半年至少开展一次消防安全教育培训活动
            </td>
            <td>有1项未做到就不符合。</td>
            <td>查看记录、资料，人员操作、询问</td>
            <td class="text-center">
              {{ tableData.data_96.value }}
            </td>
            <td>
              {{ tableData.data_96.text }}
            </td>
          </tr>
          <tr>
            <td>97</td>
            <td>设立吸烟室或吸烟处，人员住宿和公共场所禁止吸烟</td>
            <td>有1项未做到就不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_97.value }}
            </td>
            <td>
              {{ tableData.data_97.text }}
            </td>
          </tr>
          <tr>
            <td>98</td>
            <td>
              定期组织对电器产品及其线路、管路进行维护保养和检测，及时整改电气火灾隐患
            </td>
            <td>有1项未做到就不符合。</td>
            <td>现场查看，查看维护记录</td>
            <td class="text-center">
              {{ tableData.data_98.value }}
            </td>
            <td>
              {{ tableData.data_98.text }}
            </td>
          </tr>
          <tr>
            <td>99</td>
            <td>
              燃气设施符合国家规定，使用正确，无私自拆、移、改动燃气装置，无私自使用燃气热水器、取暖器和其他燃气器具等
            </td>
            <td>如有，有1项未做到就不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_99.value }}
            </td>
            <td>
              {{ tableData.data_99.text }}
            </td>
          </tr>
          <tr>
            <td>100</td>
            <td>燃气设施清洁干净卫生，周围无可燃物品和其他杂物堆放</td>
            <td>如有，有1项未做到就不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_100.value }}
            </td>
            <td>
              {{ tableData.data_100.text }}
            </td>
          </tr>
          <tr>
            <td>101</td>
            <td>
              购置、使用和更换电梯、锅炉、压力容器（含气瓶）、压力管道等特种设备，应符合安全监督管理部门的相关规定
            </td>
            <td>如有，有1项未做到就不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_101.value }}
            </td>
            <td>
              {{ tableData.data_101.text }}
            </td>
          </tr>
          <tr>
            <td>102</td>
            <td>
              对特种设备进行经常性日常维修保养，定期自检，有记录，指定（有资质）机构对特种设备进行定期检验，有检查报告并备案
            </td>
            <td>如有，缺少1项即为部分符合。</td>
            <td>查看维护、交接班记录</td>
            <td class="text-center">
              {{ tableData.data_102.value }}
            </td>
            <td>
              {{ tableData.data_102.text }}
            </td>
          </tr>
          <tr>
            <td>103</td>
            <td>烟道应定期检查、清洗，符合相关规定。</td>
            <td>如有，缺少1项即为部分符合。</td>
            <td>查看年检或检验报告</td>
            <td class="text-center">
              {{ tableData.data_103.value }}
            </td>
            <td>
              {{ tableData.data_103.text }}
            </td>
          </tr>
          <tr>
            <td>104</td>
            <td class="bold">建立出入、探视、请销假等制度，防止老年人走失</td>
            <td>有1项未做到就不符合。</td>
            <td>查看制度、记录</td>
            <td class="text-center">
              {{ tableData.data_104.value }}
            </td>
            <td>
              {{ tableData.data_104.text }}
            </td>
          </tr>
          <tr>
            <td>105</td>
            <td>
              建立视频监控系统，对养老院公共区域进行全方位监控或实行24小时巡查
            </td>
            <td>建立视频监控系统或实行24小时巡查，均为符合。</td>
            <td>现场查看、视频记录</td>
            <td class="text-center">
              {{ tableData.data_105.value }}
            </td>
            <td>
              {{ tableData.data_105.text }}
            </td>
          </tr>
          <tr>
            <td>106</td>
            <td class="bold">
              建立突发事件处理的应急预案，对自伤、伤人、跌倒、坠床、噎食、误吸、走失、烫伤、食物中毒等事件有明确应急处理流程和报告制度
            </td>
            <td>有应急预案、应急处置流程、报告制度，缺少1项即为部分符合。</td>
            <td>查看制度、流程、文件、记录</td>
            <td class="text-center">
              {{ tableData.data_106.value }}
            </td>
            <td>
              {{ tableData.data_106.text }}
            </td>
          </tr>
          <tr>
            <td>107</td>
            <td>
              根据 DB11/T 3002
              或其他专业评估工具，定期或即时开展老年人安全评估，
              识别老年人安全风险；告知老年人及相关第三方评估结果及存在的风险，
              应提供书面评估结果签字确认、签署知情同意书。
            </td>
            <td>如未组织评估为不符合，如未履行告知为部分符合。</td>
            <td>查看记录、询问老人</td>
            <td class="text-center">
              {{ tableData.data_107.value }}
            </td>
            <td>
              {{ tableData.data_107.text }}
            </td>
          </tr>
          <tr>
            <td>108</td>
            <td class="bold">
              有服务技术操作规范，符合 DB11/T 3002
              和其他相关操作要求，有意外灾害、常见意外的预防方案，并对服务提供人员定期进行培训。员工掌握消防知识技能：“四懂四会”率达100%
            </td>
            <td>
              预案完整，培训记录完整，员工抽查合格为完全符合。去缺少部分内容为部分符合。如无为不符合。
            </td>
            <td>查看制度、培训记录、抽查员工</td>
            <td class="text-center">
              {{ tableData.data_108.value }}
            </td>
            <td>
              {{ tableData.data_108.text }}
            </td>
          </tr>
          <tr>
            <td>109</td>
            <td>
              应防止老人自伤、伤害他人、跌倒、坠床、白行除去尿袋或鼻饲管、尿布、衣服等以及其他危险因素时使用约束物品。使用约束物品前应得到医师、护士和相关第三方的书面认可
            </td>
            <td>如有，有1项未做到就不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_109.value }}
            </td>
            <td>
              {{ tableData.data_109.text }}
            </td>
          </tr>
          <tr>
            <td>110</td>
            <td class="bold">
              应依据JGJ
              122的规定，有安全保护服务设施设备（压疮预防辅助器具、生活自理及防护辅助器具、制动物品、个人移动辅助器具、安全扶手、紧急呼救系统等），能正常使用。
            </td>
            <td>如无安全保护服务设施设备或无法正常使用为不符合。</td>
            <td>现场查看、试用</td>
            <td class="text-center">
              {{ tableData.data_110.value }}
            </td>
            <td>
              {{ tableData.data_110.text }}
            </td>
          </tr>
          <tr>
            <td>111</td>
            <td class="bold">
              服务提供完成率
              100％，服务满意率≥80%，技术操作合格率≥90%，医源性损伤0
            </td>
            <td>如有1项不符合为不符合</td>
            <td>查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_111.value }}
            </td>
            <td>
              {{ tableData.data_111.text }}
            </td>
          </tr>
        </template>

        <!--2-4医疗保健服务  -->
        <template v-if="defer(9)">
          <tr class="part9 part-hash">
            <td rowspan="12" class="td-top">2-4医疗保健服务</td>
            <td>112</td>
            <td class="bold">
              设立院内医疗机构或与医疗机构建立协作关系，院内医疗机构管理服务符合卫生计生部门规定
            </td>
            <td>如有，且有相关协议或合同，即为符合。</td>
            <td>查看合同文件、现场查看</td>
            <td class="text-center">
              {{ tableData.data_112.value }}
            </td>
            <td>
              {{ tableData.data_112.text }}
            </td>
          </tr>
          <tr>
            <td>113</td>
            <td>
              参考 DB11/T 220
              相关要求，制定医疗服务标准/制度，有医疗技术规范、诊疗常规，操作符合要求；按照医疗机构核准登记的诊疗科目开展诊疗活动
            </td>
            <td>有2项及以上不满足，为不符合。</td>
            <td>查看制度、现场查看</td>
            <td class="text-center">
              {{ tableData.data_113.value }}
            </td>
            <td>
              {{ tableData.data_113.text }}
            </td>
          </tr>
          <tr>
            <td>114</td>
            <td class="bold">
              提供服务的人员持有医师执业资格证，活动范围和地点符合要求
            </td>
            <td>如有1项不符合为不符合</td>
            <td>查看资质证件</td>
            <td class="text-center">
              {{ tableData.data_114.value }}
            </td>
            <td>
              {{ tableData.data_114.text }}
            </td>
          </tr>
          <tr>
            <td>115</td>
            <td class="bold">药品管理应符合监督管理部门规定</td>
            <td>有2项及以上不满足，为不符合。</td>
            <td>查看制度、现场查看</td>
            <td class="text-center">
              {{ tableData.data_115.value }}
            </td>
            <td>
              {{ tableData.data_115.text }}
            </td>
          </tr>
          <tr>
            <td>116</td>
            <td class="bold">
              及时完成本机构内老人慢性病、常见病的治疗管理和院前抢救
            </td>
            <td>
              有3项服务为符合，提供2项服务为部分符合，提供1项及以下服务为不符合
            </td>
            <td>查看制度、记录</td>
            <td class="text-center">
              {{ tableData.data_116.value }}
            </td>
            <td>
              {{ tableData.data_116.text }}
            </td>
          </tr>
          <tr>
            <td>117</td>
            <td>每年至少为入住老人体检1次并有记录</td>
            <td>做到老年人每年体检1次，即为符合。</td>
            <td>查看制度、照护记录</td>
            <td class="text-center">
              {{ tableData.data_117.value }}
            </td>
            <td>
              {{ tableData.data_117.text }}
            </td>
          </tr>
          <tr>
            <td>118</td>
            <td class="bold">
              应在老人入住后48小时内为其建立健康档案，并定期记录，老人患病院内治疗需建立病历。
              记录应及时准确，签章完整，合格率≥80%
            </td>
            <td>100﹪老年人有健康档案，即为符合。</td>
            <td>现场查看档案</td>
            <td class="text-center">
              {{ tableData.data_118.value }}
            </td>
            <td>
              {{ tableData.data_118.text }}
            </td>
          </tr>
          <tr>
            <td>119</td>
            <td>
              按规定进行巡诊，查房巡诊有记录，发现老年人出现病情变化，及时做好问诊、体格检查及辅助检查，根据病史、临床表现及辅助检查明确疾病诊断，给予合理治疗；院前急救工作和转院工作及时有效；落实率≥90%
            </td>
            <td>
              如服务完善且检查记录完整为符合，如内容不完善为部分符合，如无服务为不符合。
            </td>
            <td>查看制度、记录</td>
            <td class="text-center">
              {{ tableData.data_119.value }}
            </td>
            <td>
              {{ tableData.data_119.text }}
            </td>
          </tr>
          <tr>
            <td>120</td>
            <td>药品的安全使用、验收、储存等管理工作由药剂师或医师负责</td>
            <td>
              如有，查看人员资质证件。可委托第三方提供服务，需提供合同协议。
            </td>
            <td>查看记录、证件、合同</td>
            <td class="text-center">
              {{ tableData.data_120.value }}
            </td>
            <td>
              {{ tableData.data_120.text }}
            </td>
          </tr>
          <tr>
            <td>121</td>
            <td>
              医疗用物定人保管、定时核对消毒、定点放置、定量供应。毒麻药品贵重仪器专人管理，定期检查；药品做到内用药和外用药分类放置、标签清楚、账物相符、定时清点登记，处方合格率≥90％
            </td>
            <td>如有，无记录为不符合，3项以上不符合为部分符合。</td>
            <td>查看制度、记录</td>
            <td class="text-center">
              {{ tableData.data_121.value }}
            </td>
            <td>
              {{ tableData.data_121.text }}
            </td>
          </tr>
          <tr>
            <td>122</td>
            <td class="bold">健康档案保留30年，处方保留15年。</td>
            <td>1项不符为不符合。</td>
            <td>查看档案、处方</td>
            <td class="text-center">
              {{ tableData.data_122.value }}
            </td>
            <td>
              {{ tableData.data_122.text }}
            </td>
          </tr>
          <tr>
            <td>123</td>
            <td class="bold">
              服务提供完成率 100％。老年人每年体检率
              100％。服务满意率≥80%。医疗事故发生率 0
            </td>
            <td>1项不符为不符合。</td>
            <td>查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_123.value }}
            </td>
            <td>
              {{ tableData.data_123.text }}
            </td>
          </tr>
        </template>

        <!-- 2-5居家生活照料服务 -->
        <template v-if="defer(10)">
          <tr class="part10 part-hash">
            <td rowspan="8" class="td-top">2-5居家生活照料服务</td>
            <td>124</td>
            <td class="bold">
              开展服务需求评估，根据老人居家服务需求，制订服务计划，按计划提供服务
            </td>
            <td>如有居家服务，有居家老人评估文件及服务计划即为符合。</td>
            <td>查看记录</td>
            <td class="text-center">
              {{ tableData.data_124.value }}
            </td>
            <td>
              {{ tableData.data_124.text }}
            </td>
          </tr>
          <tr>
            <td>125</td>
            <td>
              由社会工作者、医务人员、养老护理员、心理咨询师等服务人员提供，专业技术人员持有相关资格证书
            </td>
            <td>如有居家服务，有1项不符合即为不符合。</td>
            <td>查看记录、证件</td>
            <td class="text-center">
              {{ tableData.data_125.value }}
            </td>
            <td>
              {{ tableData.data_125.text }}
            </td>
          </tr>
          <tr>
            <td>126</td>
            <td class="bold">
              居家服务提供人员应参加相关培训，掌握本岗位相关知识技能，熟练掌握本岗位设施设备的使用、操作要求，掌握本岗位的应急预案
            </td>
            <td>如有居家服务，有1项不符合即为不符合。</td>
            <td>查看培训记录、证件</td>
            <td class="text-center">
              {{ tableData.data_126.value }}
            </td>
            <td>
              {{ tableData.data_126.text }}
            </td>
          </tr>
          <tr>
            <td>127</td>
            <td class="bold">
              居家服务需要的设施设备，包括提供服务的空间、生活照料操作设施设备、餐饮/送餐设施设备、康复辅具等
            </td>
            <td>
              如有居家服务，无设施设备为不符合，提供设施设备不完善为部分符合。
            </td>
            <td>查看记录、证件</td>
            <td class="text-center">
              {{ tableData.data_127.value }}
            </td>
            <td>
              {{ tableData.data_127.text }}
            </td>
          </tr>
          <tr>
            <td>128</td>
            <td>
              提供居家服务应事前与服务对象签订书面服务合同，合同中应明确服务组织和服务对象的基本情况、服务方式、范围、时间、地址、服务质量、服务费用、支付方式、双方权利义务等内容
            </td>
            <td>如有居家服务，100%签订合同且合同内容符合要求为符合。</td>
            <td>查看合同、服务记录</td>
            <td class="text-center">
              {{ tableData.data_128.value }}
            </td>
            <td>
              {{ tableData.data_128.text }}
            </td>
          </tr>
          <tr>
            <td>129</td>
            <td class="bold">
              为居家的独居和高龄老年人提供助餐服务、生活照料服务、家政服务、心理/精神支持、生活陪伴、咨询等服务，服务符合要求，并有服务记录
            </td>
            <td>如有居家服务，开展3项以上且有服务记录即为符合。</td>
            <td>查看服务记录。</td>
            <td class="text-center">
              {{ tableData.data_129.value }}
            </td>
            <td>
              {{ tableData.data_129.text }}
            </td>
          </tr>
          <tr>
            <td>130</td>
            <td>
              应采集居家老年人的基础信息、健康信息、需求信息等相关信息，应及时收集服务组织持有的居家老年人的服务信息；建立居家老年人档案，档案应包括但不限于服务对象信息和服务信息
            </td>
            <td>如有居家服务，居家服务老人100%建档为符合。</td>
            <td>查看档案、服务记录</td>
            <td class="text-center">
              {{ tableData.data_130.value }}
            </td>
            <td>
              {{ tableData.data_130.text }}
            </td>
          </tr>
          <tr>
            <td>131</td>
            <td class="bold">
              应采集居家老年人的基础信息、健康信息、需求信息等相关信息，应及时收集服务组织持有的居家老年人的服务信息；建立居家老年人档案，档案应包括但不限于服务对象信息和服务信息
            </td>
            <td>如有居家服务，居家服务老人100%建档为符合。</td>
            <td>查看档案、服务记录</td>
            <td class="text-center">
              {{ tableData.data_131.value }}
            </td>
            <td>
              {{ tableData.data_131.text }}
            </td>
          </tr>
        </template>
        <!-- 2-6膳食服务 -->
        <template v-if="defer(11)">
          <tr class="part11 part-hash">
            <td rowspan="12" class="td-top">2-6膳食服务</td>
            <td>132</td>
            <td class="bold">
              厨师持有厨师职业证书，膳食及相关从业人员应有有效健康证明，每年体检1次，有记录，传染病人不应从事膳食工作。按GB14934-1994中7.6个人卫生与健康要求的规
              ，注意个人卫生
            </td>
            <td>如有餐饮服务，1项不符为不符合。</td>
            <td>查看证书、体检记录和结果</td>
            <td class="text-center">
              {{ tableData.data_132.value }}
            </td>
            <td>
              {{ tableData.data_132.text }}
            </td>
          </tr>
          <tr>
            <td>133</td>
            <td>根据老年人身体状况及需求、地域特点、民族、宗教习惯提供膳食</td>
            <td>如有餐饮服务，做到2项即为部分符合，3项及以上为符合。</td>
            <td>查看制度、现场查看、询问、查看膳食记录</td>
            <td class="text-center">
              {{ tableData.data_133.value }}
            </td>
            <td>
              {{ tableData.data_133.text }}
            </td>
          </tr>
          <tr>
            <td>134</td>
            <td>食谱每周至少更换一次，向老年人公布并存档</td>
            <td>
              如有餐饮服务，每周更换食谱且向老年人公布并存档，为符合，满足2项为部分符合。
            </td>
            <td>查看制度、膳食记录</td>
            <td class="text-center">
              {{ tableData.data_134.value }}
            </td>
            <td>
              {{ tableData.data_134.text }}
            </td>
          </tr>
          <tr>
            <td>135</td>
            <td class="bold">
              设备数量应满足老人基本生活需求（冰箱、冰柜、保温设备、消毒设备、必要的炊事用具和餐桌椅）
            </td>
            <td>
              如有餐饮服务，设施设备完全满足服务需求为符合。设施设备缺失为部分符合。
            </td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_135.value }}
            </td>
            <td>
              {{ tableData.data_135.text }}
            </td>
          </tr>
          <tr>
            <td>136</td>
            <td class="bold">
              应搞好食品储存、运输、加工、制作的环节管理，做到：
              采购员不买腐烂变质的原料、库房保管员不收腐烂变质的原料、厨师不用腐烂变质
              的原料加工成品。不采购“三无”商品：无经营许可证、产品合格证，无卫生许可证，无厂名、厂址（店
              址）
            </td>
            <td>如有餐饮服务，1项不符为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_136.value }}
            </td>
            <td>
              {{ tableData.data_136.text }}
            </td>
          </tr>
          <tr>
            <td>137</td>
            <td class="bold">
              严格执行食品卫生法和院内感染控制规范，从原料到成品实行“三不”制度（腐烂变质的原料采购员不买，保管员不收，炊事员不用）；成品（食品）存放实行“四隔离”，严防食物污染（生与熟、成品与半成品、食品与杂物、药品、食品与天然冰）；餐具实行“四过关”（一洗、二刷、三冲、四消毒）；进行食品留样，有专用留样柜、留样量≥125g、留样时间≥48h。
            </td>
            <td>如有餐饮服务，1项不符为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_137.value }}
            </td>
            <td>
              {{ tableData.data_137.text }}
            </td>
          </tr>
          <tr>
            <td>138</td>
            <td class="bold">
              提供的食品应做到无毒、无致病菌、无寄生虫、无腐败变质、无杂质
            </td>
            <td>如有餐饮服务，1项不符为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_138.value }}
            </td>
            <td>
              {{ tableData.data_138.text }}
            </td>
          </tr>
          <tr>
            <td>139</td>
            <td>
              保持食堂内外环境卫生整洁，做到：定人、定物、定时间、定质量，划片分工包干，
              消灭苍蝇、老鼠、蟑螂和其他害虫及孳生条件
            </td>
            <td>如有餐饮服务，1项不符为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_139.value }}
            </td>
            <td>
              {{ tableData.data_139.text }}
            </td>
          </tr>
          <tr>
            <td>140</td>
            <td>
              保持食堂内外环境卫生整洁，做到：定人、定物、定时间、定质量，划片分工包干，
              消灭苍蝇、老鼠、蟑螂和其他害虫及孳生条件
            </td>
            <td>如有餐饮服务，1项不符为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_140.value }}
            </td>
            <td>
              {{ tableData.data_140.text }}
            </td>
          </tr>
          <tr>
            <td>141</td>
            <td>
              每周至少检查1次老年人房间有无过期食品，提醒老年人处理过期腐烂的食品
            </td>
            <td>
              每周至少检查1次老年人房间有无过期食品且提醒老年人处理过期腐烂的食品，为符合，二者满足一项为部分符合。
            </td>
            <td>查看制度、现场查看、照护记录</td>
            <td class="text-center">
              {{ tableData.data_141.value }}
            </td>
            <td>
              {{ tableData.data_141.text }}
            </td>
          </tr>
          <tr>
            <td>142</td>
            <td>
              建立老年人伙食（膳食）委员会，监督膳食质量，定期了解老年人膳食需求
            </td>
            <td>
              如有餐饮服务，建立老年人伙食（膳食）委员会且发挥作用，为符合，二者满足一项为部分符合。
            </td>
            <td>查看制度、相关记录</td>
            <td class="text-center">
              {{ tableData.data_142.value }}
            </td>
            <td>
              {{ tableData.data_142.text }}
            </td>
          </tr>
          <tr>
            <td>143</td>
            <td class="bold">
              食物中毒率0，服务提供完成率
              100%，老人满意率≥80%，设施设备完好率≥90%，餐具消毒率 100%，
            </td>
            <td>如有餐饮服务，1项不符为不符合。</td>
            <td>现场查看、查看制度文件、现场调查</td>
            <td class="text-center">
              {{ tableData.data_143.value }}
            </td>
            <td>
              {{ tableData.data_143.text }}
            </td>
          </tr>
        </template>
      </template>
      <!-- 3 一般性服务内容 -->
      <template class="table-container">
        <!-- 3-1心理/精神支持服务 -->
        <template v-if="defer(12)">
          <tr class="part12 part-hash">
            <td rowspan="65" class="td-top">3一般性服务内容</td>
            <td rowspan="7" class="td-top">3-1心理/精神支持服务</td>
            <td>144</td>
            <td>有提供心理／精神支持服务的场地和设备</td>
            <td>如有，场地和设备符合需求即为符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_144.value }}
            </td>
            <td>
              {{ tableData.data_144.text }}
            </td>
          </tr>
          <tr>
            <td>145</td>
            <td>
              应对需要心理／精神支持服务的老人定期进行评估，有记录，有防范措施
            </td>
            <td>如有，有评估记录和防范方案，措施记录即为符合。</td>
            <td>查看制度、记录</td>
            <td class="text-center">
              {{ tableData.data_145.value }}
            </td>
            <td>
              {{ tableData.data_144.text }}
            </td>
          </tr>
          <tr>
            <td>146</td>
            <td>提供服务的人员持有心理咨询师资格证书或社会工作者资格证书</td>
            <td>
              如有，有一种资质证件即为符合。可委托第三方提供服务，需查看合同协议和证件。
            </td>
            <td>查看证件、合同</td>
            <td class="text-center">
              {{ tableData.data_146.value }}
            </td>
            <td>
              {{ tableData.data_146.text }}
            </td>
          </tr>
          <tr>
            <td>147</td>
            <td class="bold">
              按照老年人需求，定期为老年人开展个案、小组等多种形式活动，有记录。定期组织老年人进行情感交流和社会交往，有记录。
            </td>
            <td>如有，每月1次以上活动记录为符合。</td>
            <td>查看记录</td>
            <td class="text-center">
              {{ tableData.data_147.value }}
            </td>
            <td>
              {{ tableData.data_147.text }}
            </td>
          </tr>
          <tr>
            <td>148</td>
            <td class="bold">
              定期与老年人交谈，有评估，对重点老年人有防范措施。应制定心理／精神支持服务危机处理程序，通过评估，及时发现心理问题，有处理措施并有记录
            </td>
            <td>做到2项即为部分符合；3项及以上为符合。</td>
            <td>查看制度、照护记录</td>
            <td class="text-center">
              {{ tableData.data_148.value }}
            </td>
            <td>
              {{ tableData.data_148.text }}
            </td>
          </tr>
          <tr>
            <td>149</td>
            <td>应注意保护老人的隐私权</td>
            <td>有保护隐私权相关制度和执行记录即为符合。</td>
            <td>查看制度、记录</td>
            <td class="text-center">
              {{ tableData.data_149.value }}
            </td>
            <td>
              {{ tableData.data_149.text }}
            </td>
          </tr>
          <tr>
            <td>150</td>
            <td class="bold">服务提供完成率 100％，服务满意率≥80%</td>
            <td>如有，1项不符为不符合。</td>
            <td>查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_150.value }}
            </td>
            <td>
              {{ tableData.data_150.text }}
            </td>
          </tr>
        </template>

        <!-- 3-2环境卫生服务 -->
        <template v-if="defer(13)">
          <tr class="part13 part-hash">
            <td rowspan="8" class="td-top">3-2环境卫生服务</td>
            <td>151</td>
            <td class="bold">提供环境卫生服务的设备</td>
            <td>设备设施符合提供服务的需求即为符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_151.value }}
            </td>
            <td>
              {{ tableData.data_151.text }}
            </td>
          </tr>
          <tr>
            <td>152</td>
            <td>每日视情况定时开窗通风，保持室内空气新鲜。</td>
            <td>室内空气有异味为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_152.value }}
            </td>
            <td>
              {{ tableData.data_152.text }}
            </td>
          </tr>
          <tr>
            <td>153</td>
            <td>
              定期为老年人居室内电器、家具、玻璃、床上用品及窗帘、门帘等物品进行清洁，定期清理居室内和冰箱内过期食物并除霜。居室内用物整洁、摆放有序；床、床头桌、脸盆固定放置；窗台、床档不放任何杂物；老年人用各种擦巾按人分类摆放，便于区分。
            </td>
            <td>3项以上不符合为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_153.value }}
            </td>
            <td>
              {{ tableData.data_153.text }}
            </td>
          </tr>
          <tr>
            <td>154</td>
            <td>
              环境和物体表面清洁切实有效，清洁无盲区（点）。床具、桌、椅、家具光洁度好，无污渍、灰尘
            </td>
            <td>3项以上不符合为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_154.value }}
            </td>
            <td>
              {{ tableData.data_154.text }}
            </td>
          </tr>
          <tr>
            <td>155</td>
            <td>
              地面、墙面、天花板，无污染、灰尘、杂物、蜘蛛网。门窗、玻璃明亮，无污染，灰尘。灯具洁净、无灰尘、完好。
            </td>
            <td>3项以上不符合为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_155.value }}
            </td>
            <td>
              {{ tableData.data_155.text }}
            </td>
          </tr>
          <tr>
            <td>156</td>
            <td class="bold">
              公共区域畅通，无杂物、水迹、污渍；生活环境清洁，无积存垃圾，无卫生死角；生活垃圾分类存放，每日清除，按规定处理。
            </td>
            <td>3项以上不符合为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_156.value }}
            </td>
            <td>
              {{ tableData.data_156.text }}
            </td>
          </tr>
          <tr>
            <td>157</td>
            <td class="bold">
              应配备专用清洁设施设备及用具，对不同区域设施设备及用具用不同标识进行区分，做到先清洁、再消毒，并悬挂晾晒，清洁卫生频度不低于每日
              1 次。
            </td>
            <td>3项以上不符合为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_157.value }}
            </td>
            <td>
              {{ tableData.data_157.text }}
            </td>
          </tr>
          <tr>
            <td>158</td>
            <td class="bold">
              服务提供完成率 100％。服务满意率≥80%。常规物品消毒率 90％。 1 次。
            </td>
            <td>1项不符合为不符合。</td>
            <td>查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_158.value }}
            </td>
            <td>
              {{ tableData.data_158.text }}
            </td>
          </tr>
        </template>

        <!--  3-3休闲娱乐服务-->
        <template v-if="defer(14)">
          <tr class="part14 part-hash">
            <td rowspan="8" class="td-top">3-3休闲娱乐服务</td>
            <td>159</td>
            <td class="bold">有提供休闲娱乐服务必要的设施设备和场地</td>
            <td>设备设施符合提供服务的需求即为符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_159.value }}
            </td>
            <td>
              {{ tableData.data_159.text }}
            </td>
          </tr>
          <tr>
            <td>160</td>
            <td>
              开展适合老年人身心特点的歌舞、书画、手工、棋牌等文化娱乐活动和康乐活动，培养老年人兴趣爱好
            </td>
            <td>开展3项活动为部分符合，4项及以上为符合。</td>
            <td>查看制度、现场查看老人、照护记录</td>
            <td class="text-center">
              {{ tableData.data_160.value }}
            </td>
            <td>
              {{ tableData.data_160.text }}
            </td>
          </tr>
          <tr>
            <td>161</td>
            <td>开展节日、特殊纪念日活动</td>
            <td>开展3项活动为部分符合，4项及以上为符合。</td>
            <td>查看制度、现场查看老人、照护记录</td>
            <td class="text-center">
              {{ tableData.data_161.value }}
            </td>
            <td>
              {{ tableData.data_161.text }}
            </td>
          </tr>
          <tr>
            <td>162</td>
            <td>为失能（失智）老年人提供有助于感知觉恢复的文化娱乐活动</td>
            <td>如收住这类老年人，提供2项活动即为部分符合,3项以上为符合。</td>
            <td>现场查看老人、照护记录</td>
            <td class="text-center">
              {{ tableData.data_162.value }}
            </td>
            <td>
              {{ tableData.data_162.text }}
            </td>
          </tr>
          <tr>
            <td>163</td>
            <td>为卧床老年人提供电视、广播、阅读等文化娱乐项目</td>
            <td>
              如收住这类老年人，提供2项活动为部分符合，3项及以上即为符合。
            </td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_163.value }}
            </td>
            <td>
              {{ tableData.data_163.text }}
            </td>
          </tr>
          <tr>
            <td>164</td>
            <td>
              组织志愿者为老年人提供服务；倡导老年人参与力所能及的志愿服务
            </td>
            <td>
              组织志愿者为老年人提供服务且倡导老年人参与力所能及的志愿服务，为符合；满足二者之一的，为部分符合。
            </td>
            <td>查看制度、现场询问老人、查看活动记录</td>
            <td class="text-center">
              {{ tableData.data_164.value }}
            </td>
            <td>
              {{ tableData.data_164.text }}
            </td>
          </tr>
          <tr>
            <td>165</td>
            <td class="bold">每日至少组织一次活动，有提供服务的文件或记录。</td>
            <td>无服务记录为不符合，低于每日1次为部分符合。</td>
            <td>查看文件、记录</td>
            <td class="text-center">
              {{ tableData.data_165.value }}
            </td>
            <td>
              {{ tableData.data_165.text }}
            </td>
          </tr>
          <tr>
            <td>166</td>
            <td class="bold">提供服务完成率100%，老人满意率≥80%</td>
            <td>1项不符合为不符合。</td>
            <td>查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_166.value }}
            </td>
            <td>
              {{ tableData.data_166.text }}
            </td>
          </tr>
        </template>

        <!-- 3-4协助医疗服务 -->
        <template v-if="defer(15)">
          <tr class="part15 part-hash">
            <td rowspan="7" class="td-top">3-4协助医疗服务</td>
            <td>167</td>
            <td class="bold">
              配备服务设备，如助行器、轮椅、平车、位移板、大小便器及老年人使用的辅助器具，能正常使用；协助老年人合理安全使用各种辅助用具进行移动或转移，无跌倒、摔伤。
            </td>
            <td>
              如有，设备设施需满足提供服务的需求且有效。如有跌倒摔伤为不符合。
            </td>
            <td>现场查看，查看记录</td>
            <td class="text-center">
              {{ tableData.data_167.value }}
            </td>
            <td>
              {{ tableData.data_167.text }}
            </td>
          </tr>
          <tr>
            <td>168</td>
            <td class="bold">
              提供服务的人员为受过培训的养老护理员或机构指定人员，具备提供服务能力。
            </td>
            <td>如有，需具备人员资质或培训记录。</td>
            <td>查看证件、培训记录</td>
            <td class="text-center">
              {{ tableData.data_168.value }}
            </td>
            <td>
              {{ tableData.data_168.text }}
            </td>
          </tr>
          <tr>
            <td>169</td>
            <td class="bold">
              协助老人服药应注意药品正确、剂量准确、给药时间准确、给药途径正确，不应擅自给老人
              服用任何药品
            </td>
            <td>如有，需记录准确，缺项为不符合。</td>
            <td>查看记录</td>
            <td class="text-center">
              {{ tableData.data_169.value }}
            </td>
            <td>
              {{ tableData.data_169.text }}
            </td>
          </tr>
          <tr>
            <td>170</td>
            <td>
              协助老年人完成医疗护理辅助工作的活动应提供集尿袋更换、翻身叩背促进排痰；为生活不能自理的老年人安置肢体功能位和肢体活动，体位舒适；
              并有记录。
            </td>
            <td>如有，提供3项以上服务为符合。</td>
            <td>查看记录，查看老人情况</td>
            <td class="text-center">
              {{ tableData.data_170.value }}
            </td>
            <td>
              {{ tableData.data_170.text }}
            </td>
          </tr>
          <tr>
            <td>171</td>
            <td>常规检验标本（尿、便）按时采集、留取和送检。</td>
            <td>如有，需记录准确，缺项为不符合。</td>
            <td>查看记录</td>
            <td class="text-center">
              {{ tableData.data_171.value }}
            </td>
            <td>
              {{ tableData.data_171.text }}
            </td>
          </tr>
          <tr>
            <td>172</td>
            <td>
              与老年人或第三方签署授权书；及时掌握老年人的病情，有相应应急预案；
              及时陪同老年人到指定的医院就医。
            </td>
            <td>如有，无记录文件为不符合，文件不完善为部分符合。</td>
            <td>查看制度、文件</td>
            <td class="text-center">
              {{ tableData.data_172.value }}
            </td>
            <td>
              {{ tableData.data_172.text }}
            </td>
          </tr>
          <tr>
            <td>173</td>
            <td class="bold">
              应做到及时，准确，技术操作合格率≥85%，提供服务完成率100%，老人满意率≥80%
            </td>
            <td>1项不符合为不符合。</td>
            <td>查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_173.value }}
            </td>
            <td>
              {{ tableData.data_173.text }}
            </td>
          </tr>
        </template>

        <!-- 3-5洗涤服务 -->
        <template v-if="defer(16)">
          <tr class="part16 part-hash">
            <td rowspan="5" class="td-top">3-5洗涤服务</td>
            <td>174</td>
            <td class="bold">
              配备必要的设施设备（洗衣机等）和场地。定时进行消毒，环境整洁，标识清晰。
            </td>
            <td>
              设备设施需符合服务需求，如委托第三方提供服务，需有合同协议，第三方符合相应要求。
            </td>
            <td>现场查看、查看合同协议</td>
            <td class="text-center">
              {{ tableData.data_174.value }}
            </td>
            <td>
              {{ tableData.data_174.text }}
            </td>
          </tr>
          <tr>
            <td>175</td>
            <td>提供服务的人员为经过培训的洗衣员或养老护理员。</td>
            <td>需有人员培训记录</td>
            <td>查看人员信息、培训记录</td>
            <td class="text-center">
              {{ tableData.data_175.value }}
            </td>
            <td>
              {{ tableData.data_175.text }}
            </td>
          </tr>
          <tr>
            <td>176</td>
            <td>
              衣物的分类、清洗、消毒、洗涤、运输过程应符合《消毒技术规范》第三部分规定。衣物分类清洗，被血液、体液、排泄物、分泌物污染（不能分类清洗扣全分）的衣物应封闭运输、单独清洗、消毒。
            </td>
            <td>洗涤场地应符合要求，如3项以上不能做到为不符合。</td>
            <td>现场查看、查看制度</td>
            <td class="text-center">
              {{ tableData.data_176.value }}
            </td>
            <td>
              {{ tableData.data_176.text }}
            </td>
          </tr>
          <tr>
            <td>177</td>
            <td class="bold">
              衣物标识清楚、洗涤清洁，衣物完好无损，折叠整齐，整理后准确无误送还，有记录。
            </td>
            <td>有1项做不到即为部分符合，2项做不到为不符合。</td>
            <td>查看制度、现场查看、工作记录</td>
            <td class="text-center">
              {{ tableData.data_177.value }}
            </td>
            <td>
              {{ tableData.data_177.text }}
            </td>
          </tr>
          <tr>
            <td>178</td>
            <td class="bold">提供服务完成率100%，老人满意率≥80%</td>
            <td>1项不符合为不符合。</td>
            <td>查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_178.value }}
            </td>
            <td>
              {{ tableData.data_178.text }}
            </td>
          </tr>
        </template>

        <!-- 3-6物业管理维修服务 -->
        <template v-if="defer(17)">
          <tr class="part17 part-hash">
            <td rowspan="3" class="td-top">3-6物业管理维修服务</td>
            <td>179</td>
            <td class="bold">
              配备必要水、电、供暖、降温、消防及安全设施设备。设备设施需有合格证，并按时年检。
            </td>
            <td>
              设备设施需符合服务需求，如委托第三方提供服务，需有合同协议，第三方符合相应要求。
            </td>
            <td>现场查看、查看合同协议</td>
            <td class="text-center">
              {{ tableData.data_179.value }}
            </td>
            <td>
              {{ tableData.data_179.text }}
            </td>
          </tr>
          <tr>
            <td>180</td>
            <td>供暖不低于16℃。降温不高于28℃</td>
            <td>1项不符合为不符合。</td>
            <td>现场测量</td>
            <td class="text-center">
              {{ tableData.data_180.value }}
            </td>
            <td>
              {{ tableData.data_180.text }}
            </td>
          </tr>
          <tr>
            <td>181</td>
            <td class="bold">设备完好率≥90%</td>
            <td>1项不符合为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_181.value }}
            </td>
            <td>
              {{ tableData.data_181.text }}
            </td>
          </tr>
        </template>

        <!-- 3-7陪同就医服务 -->
        <template v-if="defer(18)">
          <tr class="part18 part-hash">
            <td rowspan="2" class="td-top">3-7陪同就医服务</td>
            <td>182</td>
            <td class="bold">根据老人疾病情况，制定应急措施。</td>
            <td>
              如有，需有相应制度和记录。无制度为不符合，信息不完善为部分符合。
            </td>
            <td>查看制度、记录</td>
            <td class="text-center">
              {{ tableData.data_182.value }}
            </td>
            <td>
              {{ tableData.data_182.text }}
            </td>
          </tr>
          <tr>
            <td>183</td>
            <td class="bold">提供服务完成率100%，老人满意率≥80%</td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、现场调查</td>
            <td class="text-center">
              {{ tableData.data_183.value }}
            </td>
            <td>
              {{ tableData.data_183.text }}
            </td>
          </tr>
        </template>

        <!-- 3-8咨询服务 -->
        <template v-if="defer(19)">
          <tr class="part19 part-hash">
            <td rowspan="2" class="td-top">3-8咨询服务</td>
            <td>184</td>
            <td class="bold">
              有提供咨询服务和负责接待和处理投诉建议所必要的设施设备和场地及专业服务人员或电话
            </td>
            <td>
              有专门部门、人员或电话为部分符合；并有投诉建议处理记录为符合。
            </td>
            <td>查看制度和咨询、投诉建议处理记录；询问老年人是否知晓</td>
            <td class="text-center">
              {{ tableData.data_184.value }}
            </td>
            <td>
              {{ tableData.data_184.text }}
            </td>
          </tr>
          <tr>
            <td>185</td>
            <td class="bold">提供服务完成率100%，老人满意率≥80%</td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、现场调查</td>
            <td class="text-center">
              {{ tableData.data_185.value }}
            </td>
            <td>
              {{ tableData.data_185.text }}
            </td>
          </tr>
        </template>

        <!-- 3-9通讯服务 -->
        <template v-if="defer(20)">
          <tr class="part20 part-hash">
            <td rowspan="3" class="td-top">3-9通讯服务</td>
            <td>186</td>
            <td class="bold">有必要的通信设备（至少有1部供老人使用的电话）</td>
            <td>无通讯设备为不符合。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_186.value }}
            </td>
            <td>
              {{ tableData.data_186.text }}
            </td>
          </tr>
          <tr>
            <td>187</td>
            <td class="bold">
              老人通讯交往困难的，养老服务机构应指定专人协助。
            </td>
            <td>询问入住老人中需要协助的老人有无专人协助，如无为不符合。</td>
            <td>现场询问</td>
            <td class="text-center">
              {{ tableData.data_187.value }}
            </td>
            <td>
              {{ tableData.data_187.text }}
            </td>
          </tr>
          <tr>
            <td>188</td>
            <td class="bold">
              定期检查通讯设备，通讯设施当日修复率≥90%，老人满意率>80%
            </td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_188.value }}
            </td>
            <td>
              {{ tableData.data_188.text }}
            </td>
          </tr>
        </template>

        <!-- 3-10送餐服务 -->
        <template v-if="defer(21)">
          <tr class="part21 part-hash">
            <td rowspan="3" class="td-top">3-10送餐服务</td>
            <td>189</td>
            <td>
              有保鲜、保温设备及交通工具，能正常使用；送餐人员每日应做好送餐前准备工作，并检查送餐工具和设备是否完好；按照要求对餐具、饮具进行清洗、消毒，并在专用保洁设施内备用；送餐结束后，将餐车停放在指定区域，并对餐具、餐车等设施设备按规定进行清洗，消毒备用。
            </td>
            <td>如有，3项以上不符合为不符合</td>
            <td>现场查看、查看记录</td>
            <td class="text-center">
              {{ tableData.data_189.value }}
            </td>
            <td>
              {{ tableData.data_189.text }}
            </td>
          </tr>
          <tr>
            <td>190</td>
            <td class="bold">
              按要求及时准确将一日三餐送到指定区域；保证餐饮卫生安全，温度适宜。
            </td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、询问</td>
            <td class="text-center">
              {{ tableData.data_190.value }}
            </td>
            <td>
              {{ tableData.data_190.text }}
            </td>
          </tr>
          <tr>
            <td>191</td>
            <td class="bold">
              有提供服务文件或记录，提供服务完成率100%，老人满意率≥80%
            </td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_191.value }}
            </td>
            <td>
              {{ tableData.data_191.text }}
            </td>
          </tr>
        </template>

        <!-- 3-11教育服务 -->
        <template v-if="defer(22)">
          <tr class="part22 part-hash">
            <td rowspan="4" class="td-top">3-11教育服务</td>
            <td>192</td>
            <td class="bold">
              必要的设施设备（教材、教学设备）和场地，能正常使用。
            </td>
            <td>如有，设施设备需符合服务需求。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_192.value }}
            </td>
            <td>
              {{ tableData.data_192.text }}
            </td>
          </tr>
          <tr>
            <td>193</td>
            <td>提供服务的人员为社会工作者或志愿者，并经过培训。</td>
            <td>如有，需提供人员资质证明或培训记录。</td>
            <td>查看证件、培训记录</td>
            <td class="text-center">
              {{ tableData.data_193.value }}
            </td>
            <td>
              {{ tableData.data_193.text }}
            </td>
          </tr>
          <tr>
            <td>194</td>
            <td>
              举办老年学校应经过相关主管部门批准。评估老年人服务需求，有教学计划、教案教材、老师名单、学员花名册和教学评估记录；设立老年课堂、各类知识讲座内容丰富，提供的服务能满足老年人精神生活。
            </td>
            <td>如有，3项以上不符合为不符合。</td>
            <td>查看文件、记录</td>
            <td class="text-center">
              {{ tableData.data_194.value }}
            </td>
            <td>
              {{ tableData.data_194.text }}
            </td>
          </tr>
          <tr>
            <td>195</td>
            <td class="bold">
              按照老人需要制订服务计划并实施，服务完成率100，老人满意率≥80%
            </td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_195.value }}
            </td>
            <td>
              {{ tableData.data_195.text }}
            </td>
          </tr>
        </template>

        <!-- 3-12购物服务 -->
        <template v-if="defer(23)">
          <tr class="part23 part-hash">
            <td rowspan="3" class="td-top">3-12购物服务</td>
            <td>196</td>
            <td class="bold">
              按照约定购物，准确记录购买的品种、数量，当面清点钱物，并核实、签字%
            </td>
            <td>有预约记录和执行记录，记录不全面为部分符合。</td>
            <td>查看记录</td>
            <td class="text-center">
              {{ tableData.data_196.value }}
            </td>
            <td>
              {{ tableData.data_196.text }}
            </td>
          </tr>
          <tr>
            <td>197</td>
            <td>陪同购物时应注意老人安全，防止意外发生</td>
            <td>有相应的规范要求为符合。</td>
            <td>查看制度</td>
            <td class="text-center">
              {{ tableData.data_197.value }}
            </td>
            <td>
              {{ tableData.data_197.text }}
            </td>
          </tr>
          <tr>
            <td>198</td>
            <td class="bold">提供服务完成率100%，老人满意率≥80%</td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_198.value }}
            </td>
            <td>
              {{ tableData.data_198.text }}
            </td>
          </tr>
        </template>

        <!--3-13委托服务  -->
        <template v-if="defer(24)">
          <tr class="part24 part-hash">
            <td rowspan="3" class="td-top">3-13委托服务</td>
            <td>199</td>
            <td class="bold">保护老人隐私，不向他人谈论老人私人信息</td>
            <td>如有，需100%签署相关协议为完全符合。</td>
            <td>查看合同协议</td>
            <td class="text-center">
              {{ tableData.data_199.value }}
            </td>
            <td>
              {{ tableData.data_199.text }}
            </td>
          </tr>
          <tr>
            <td>200</td>
            <td>
              按照老年人需要制订服务计划并实施，包括：帮助老年人代写、代读书信；
              帮助老年人代领代缴各种物品和费用；提供服务的人员应准确记录物品种类、数量，当面清点钱物，并核实、签字。
            </td>
            <td>如有，提供3项以上服务为符合。</td>
            <td>查看记录</td>
            <td class="text-center">
              {{ tableData.data_200.value }}
            </td>
            <td>
              {{ tableData.data_200.text }}
            </td>
          </tr>
          <tr>
            <td>201</td>
            <td class="bold">提供服务完成率100%，服务对象满意率≥80%</td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_201.value }}
            </td>
            <td>
              {{ tableData.data_201.text }}
            </td>
          </tr>
        </template>

        <!-- 3-14交通服务 -->
        <template v-if="defer(25)">
          <tr class="part25 part-hash">
            <td rowspan="2" class="td-top">3-14交通服务</td>
            <td>202</td>
            <td class="bold">
              提供交通服务可采取自备车或协助叫车形式开展：自备车辆的保持完好，
              定期为车辆投保，做好车辆保养工作，确保老年人的安全，有定期车辆检修记录，司机持有驾驶执照；如无自备车辆的，可协助老年人和相关第三方联系，提供叫车服务，确保第三方资质。
            </td>
            <td>如有，3项以上不符合为不符合。</td>
            <td>现场查看、查看记录、合同</td>
            <td class="text-center">
              {{ tableData.data_202.value }}
            </td>
            <td>
              {{ tableData.data_202.text }}
            </td>
          </tr>
          <tr>
            <td>203</td>
            <td class="bold">提供服务完成率100%，车辆完好率≥90%</td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_203.value }}
            </td>
            <td>
              {{ tableData.data_203.text }}
            </td>
          </tr>
        </template>

        <!--  3-15安宁服务-->
        <template v-if="defer(26)">
          <tr class="part26 part-hash">
            <td rowspan="5" class="td-top">3-15安宁服务</td>
            <td>204</td>
            <td class="bold">具备符合服务需求的相应环境，有必要的设施设备。</td>
            <td>如有，需要相对隔离的独立空间。设施设备需满足服务需求。</td>
            <td>现场查看</td>
            <td class="text-center">
              {{ tableData.data_204.value }}
            </td>
            <td>
              {{ tableData.data_204.text }}
            </td>
          </tr>
          <tr>
            <td>205</td>
            <td>
              医护人员做好症状的评估与观察，确定治疗原则，制订护理要点，提供相应医护服务。
            </td>
            <td>如有，需有相应的制度规范，工作要求。</td>
            <td>查看制度、服务记录</td>
            <td class="text-center">
              {{ tableData.data_205.value }}
            </td>
            <td>
              {{ tableData.data_205.text }}
            </td>
          </tr>
          <tr>
            <td>206</td>
            <td>
              护理员做好环境、床单位管理，提供老年人所需的照料服务，使用轮椅、平车等辅助用具，做好评估与观察。
            </td>
            <td>如有，需有相应的制度规范，工作要求。</td>
            <td>查看制度、服务记录</td>
            <td class="text-center">
              {{ tableData.data_206.value }}
            </td>
            <td>
              {{ tableData.data_206.text }}
            </td>
          </tr>
          <tr>
            <td>207</td>
            <td>
              社会工作者或心理咨询师应做好心理社会评估与观察；对老年人和家属进行心理精神支持，关怀服务。应家属要求，协助处理老年人后事。
            </td>
            <td>如有，需有相应的制度规范，工作要求。</td>
            <td>查看制度、服务记录</td>
            <td class="text-center">
              {{ tableData.data_207.value }}
            </td>
            <td>
              {{ tableData.data_207.text }}
            </td>
          </tr>
          <tr>
            <td>208</td>
            <td class="bold">提供服务完成率100%，相关第三方满意率≥80%</td>
            <td>1项不符合为不符合。</td>
            <td>现场查看、查看记录、现场调查</td>
            <td class="text-center">
              {{ tableData.data_208.value }}
            </td>
            <td>
              {{ tableData.data_208.text }}
            </td>
          </tr>
        </template>
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
