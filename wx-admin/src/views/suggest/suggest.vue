<template>
  <div class="cooperation">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">用户留言列表</span>
      </div>
    </div>
    <div class="list-container ml-16">
      <div class="oper-container pb-8">
        <el-button type="primary">批量下载</el-button>
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
              :fit="fit"
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
            <span class="color-red pr-10 pointer">删除</span>
            <span class="color-green pr-10 pointer">修改</span>
            <span class="color-green pointer">下架</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import './suggest.scss'
export default {
  data () {
    return {
      // 视频类型
      type: '0',
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
  }
}
</script>
