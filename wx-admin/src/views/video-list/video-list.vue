<template>
  <div class="video-list">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">视频列表</span>
      </div>
      <div class="flex pr-16">
        <span class="color-grey pr-5 f14">视频类型:</span>
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="flex pr-16">
        <div class="color-grey pr-5 f14 no-wrap">关键字:</div>
        <el-input v-model="keyword" placeholder="请输入内容"></el-input>
      </div>
      <div class="flex">
        <div class="color-grey pl-12 pr-5 f14">选择日期:</div>
        <el-date-picker
          v-model="date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
      <div class="flex pr-16">
        <span class="color-grey pr-5 f14">选择老人类型:</span>
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="flex pr-16">
        <span class="color-grey pr-5 f14">选择照料类型:</span>
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="flex">
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container">
        <el-button type="primary">删除选中视频</el-button>
        <el-button type="primary">上传新视频</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="视频" prop="pic">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.pic"
              fit="fill"
            ></el-image> </template
          >>
        </el-table-column>
        <el-table-column prop="length" label="视频长度"> </el-table-column>
        <el-table-column prop="title" label="视频标题" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="olderType"
          label="老人类型"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="careType" label="照料类型" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="tag" label="标签" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="date" label="日期" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="status" label="状态" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template>
            <span class="color-green pr-10 pointer">查看</span>
            <span class="color-red  pr-10 pointer">删除</span>
            <span class="color-green  pr-10 pointer">修改</span>
            <span class="color-green pointer">下架</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import './video-list.scss'
export default {
  data () {
    return {
      keyword: '',
      // 视频类型
      type: '0',
      date: '',
      options: [
        {
          value: '0',
          label: '正常视频'
        },
        {
          value: '1',
          label: '下架视频'
        }
      ],
      tableData: [
        {
          pic:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          length: "3'20''",
          title: '如何预防老人感冒',
          olderType: '自理老人',
          careType: '生活照料',
          tag: '防护、慢性病管理、健康管理',
          date: '2019-07-06',
          status: '正常'
        },
        {
          pic:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          length: "3'20''",
          title: '如何预防老人感冒',
          olderType: '自理老人',
          careType: '生活照料',
          tag: '防护、慢性病管理、健康管理',
          date: '2019-07-06',
          status: '正常'
        }
      ]
    }
  },
  methods: {
    handleSelectionChange () {}
  }
}
</script>
