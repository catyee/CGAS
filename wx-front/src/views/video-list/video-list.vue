<template>
  <div class="video-list">
    <div class="list-title">
      <div>
        <span class="f14 c-111">老人状态 / </span
        ><span class="f20 bold">自理老人</span>
      </div>
      <van-search v-model="searchKey" placeholder="按内容搜索" />
    </div>
    <div class="gap"></div>
    <!-- 视频列表 -->
    <div class="list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="item" v-for="item in list" :key="item">
          <div class="left">
            <van-image width="100%" height="100%" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <div class="bg"></div>
            <div class="arrow">
              <img src="@/assets/arrow.png" >
              <div class="pl-4">01:17</div>
            </div>
          </div>
          <div class="right">
            <div class="f16 video-title">如何防止老人感冒？</div>
            <div class="video-tip">观看10万+ {{item}}</div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import "./video-list.scss";
import { Button } from "vant";
// import { Toast } from "vant";
import { Search } from "vant";
import { List } from "vant";
import { Cell } from "vant";
import { Image as VanImage } from 'vant';

export default {
  components: {
    [Button.name]: Button,
    [Search.name]: Search,
    [List.name]: List,
    [Cell.name]: Cell,
    [VanImage.name]: VanImage,
  },
  data() {
    return {
      searchKey: "", // 搜索关键字
      list: [],
      loading: false,
      finished: false,
    };
  },
  created() {
    // Toast({
    //   type: "fail",
    //   message: "222222222",
    //   duration: 300,
    // });
  },
  methods: {
    onLoad() {
       this.finished = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>