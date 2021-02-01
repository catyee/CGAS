<template>
  <div class="video">
    <div class="video-title f20">{{videoDetail.videoName}}</div>
    <div class="video-tag pb-24">
      <div class="color-blue pr-5" >{{videoDetail.oldManType}}</div>
      <div class="color-blue pr-16" >{{videoDetail.takeCareType}}</div>
      <div class="time">{{videoDetail.createTime}}</div>
    </div>
    <div class="video-content">
      <video-player
        class="vjs-custom-skin"
        ref="videoPlayer"
        :options="playerOptions"
          :playsinline="true"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
            @ended="onPlayerEnded($event)"
            @loadeddata="onPlayerLoadeddata($event)"
            @waiting="onPlayerWaiting($event)"
            @playing="onPlayerPlaying($event)"
            @timeupdate="onPlayerTimeupdate($event)"
            @canplay="onPlayerCanplay($event)"
            @canplaythrough="onPlayerCanplaythrough($event)"
            @ready="playerReadied"
            @statechanged="playerStateChanged($event)"
      >
      </video-player>
      <!-- <div class="control-video"></div> -->
    </div>
    <div class="video-desc">
      {{videoDetail.videoDesc}}
    </div>
    <div class="video-tip">
      <div class="reader">阅读{{videoDetail.count}}</div>
      <div class="good-job active">
        <van-icon name="good-job-o" class="f16" />
        <span>赞56</span>
      </div>
    </div>
    <div class="related-video">
      <div class="related-header">
        <span class="bold f16">相关推荐</span>
        <span class="all-video color-tip pr-3" @click="allVideo"
          >全部视频<van-icon name="arrow"
        /></span>
      </div>
      <div class="show-video pt-16">
        <div
          v-for="value in 3"
          :key="value"
          class="show-item"
          @click="showVideo()"
        >
          <div class="img-container">
            <van-image
              class="video-img"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              fit="fill"
            >
              <!-- 图片遮罩层 -->
              <div class="bg"></div>
            </van-image>
          </div>
          <!-- <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt=""> -->
          <div class="van-ellipsis pr-8 pl-8">
            这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./video.scss";
import { Icon } from "vant";
import { Toast } from "vant";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";

import "videojs-contrib-hls.js/src/videojs.hlsjs";
import { Grid, GridItem } from "vant";
import { Image as VanImage } from "vant";
import { getVideo } from "@/api/video.js";

export default {
  components: {
    [Icon.name]: Icon,
    [GridItem.name]: GridItem,
    [Grid.name]: Grid,
    [VanImage.name]: VanImage,
    [Toast.name]: Toast,
    videoPlayer,
  },
  data() {
    return {
      searchKey: "", // 搜索关键字
      list: [],
      loading: false,
      finished: false,
      // 视频详情
          // 视频信息
      videoDetail: {
        videoName: '',
        videoDesc: '',
        oldManType: '',
        takeCareType: '',
        tags: '',
        imagAddr: '',
        videoAddr: '',
        // 标签列表
        tagList: ''
      },
      playerOptions: {
        height: "360",
        // videojs options
        //width: document.documentElement.clientWidth,
        //height: '360',
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        fluid: true, // 当true时，Video.js player将拥有流体大小，换句话说它将按比例缩放以适应容器
        loop: false, // 不循环播放
        // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值，值应该代表一个比例，用冒号分隔两个数字如16：9，4：3
        language: "zh-CN",
        muted: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "",
            src: "",
          },
        ],
        poster: "",
      },
    };
  },
  created() {
    // 获取用户id
    this.videoId = this.$route.params.id
    // 获取视频详情
    this.getVideo()
  },
  methods: {
    getVideo() {
      getVideo(this.videoId).then((res) => {
        if (!res.data) {
          Toast.fail("获取视频信息失败");
        } else {
          this.videoDetail = res.data;
          // 获取视频格式
          const videoAddrArr = res.data.videoAddr.split(".");
          const type = videoAddrArr[videoAddrArr.length - 1];
          this.playerOptions.sources[0].type = "video/" + type;
          // 获取视频地址
          this.playerOptions.sources[0].src = res.data.videoAddr;
          // 获取图片地址
          this.playerOptions.poster = res.data.imagAddr;
        }
      });
    },
    showVideo() {
      this.$router.push({
        path: "/video/3",
        query: {
          type: "all",
        },
      });
      //  this.$router.push({ path: '/user/deduce/' + id, query: { create: 1 } })
    },
    allVideo() {
      this.$router.push({
        path: "/",
        query: {
          type: "all",
        },
      });
    },
      // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded (player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata (player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting (player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying (player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate (player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay (player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough (player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      //  player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    }
  },
};
</script>