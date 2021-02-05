<template>
  <div class="video-list">
    <div class="list-title">
      <!-- <div>
        <span class="f14 c-111">老人状态 / </span
        ><span class="f20 bold">自理老人</span>
      </div> -->
      <form action="1">
        <van-search
          v-model="queryParams.videoName"
          placeholder="按内容搜索"
          @search="handlequery"
        />
      </form>
    </div>
    <div class="gap"></div>
    <van-empty description="没有数据..." v-show="!list.length" />
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <!-- 视频列表 -->
      <div class="list" v-show="list.length">
        <van-list
          v-model="loading"
          :finished="finished"
          :finished-text="finishText"
          @load="onLoad"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
        >
          <div
            class="item"
            v-for="item in list"
            :key="item.videoId"
            @click="toVideoDetail(item.videoId)"
          >
            <div class="left">
              <div
                class="video-img"
                :style="{ backgroundImage: `url(${item.imagAddr})` }"
              >
                <div class="bg"></div>
                <div class="arrow">
                  <img src="@/assets/arrow1.png" />
                  <div class="pl-4">{{ item.videoDuration }}</div>
                </div>
              </div>
              <!-- <van-image fit="fill" class="img-wrap" :src="item.imagAddr">
                <template v-slot:loading>
                  <van-loading type="spinner" size="20" />
                </template>
              </van-image> -->
            </div>
            <div class="right">
              <div class="f16 video-title">{{ item.videoName }}</div>
              <div class="video-tip">观看人数{{ item.count }}</div>
            </div>
          </div>
        </van-list>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import "./video-list.scss";
import { Button } from "vant";
// import { Toast } from "vant";
import { Search } from "vant";
import { List } from "vant";
import { Cell } from "vant";
import { Image as VanImage } from "vant";
import { getRelatedVideo } from "@/api/video.js";
import { Loading } from "vant";
import { PullRefresh } from "vant";
import { Empty } from "vant";

export default {
  components: {
    [Button.name]: Button,
    [Search.name]: Search,
    [List.name]: List,
    [Cell.name]: Cell,
    [VanImage.name]: VanImage,
    [Loading.name]: Loading,
    [PullRefresh.name]: PullRefresh,
    [Empty.name]: Empty,
  },
  computed: {
    finishText: function () {
      return this.list.length > 10 ? "没有数据了..." : "";
    },
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      error: false,
      // 查询条件
      queryParams: {
        // 页数
        pageNum: 1,
        // 每页的大小
        pageSize: 10,
        oldManType: null,
        takeCareType: null,
        // 视频状态0正常 1已下架
        status: 0,
        videoName: null,
        beginTime: null,
        endTime: null,
        // 标签id
        tags: null,
        videoId: null,
      },
    };
  },
  created() {
    // 获取用户id
    this.queryParams.videoId = this.$route.query.id;
    this.onLoad();
  },
  methods: {
    onLoad() {
      // 此时正在异步请求数据 让它别触发onload事件
      getRelatedVideo(this.queryParams)
        .then((res) => {
          if (res.code === 200 && res.rows.length) {
            this.list.push(...res.rows);
            this.total = parseInt(res.total);
            this.queryParams.pageNum += 1;
            this.loading = false;
            if (this.list.length >= this.total - 1) {
              this.finished = true;
            }
          } else {
            this.finished = true;
          }
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    },
    // 搜索
    handlequery() {
      this.queryParams.pageNum = 1;
      this.list = [];
      this.loading = true;
      this.finished = false;
      this.onLoad();
    },
    onRefresh() {
      //  this.queryParams.videoName = null;
      this.queryParams.pageNum = 1;
      this.list = [];
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    // 跳转到视频详情
    toVideoDetail(videoId) {
      this.$router.push({ path: "/video/" + videoId });
    },
  },
};
</script>