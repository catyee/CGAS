<template>
  <div class="video">
    <div class="video-title f20">如何预防老人感冒？</div>
    <div class="video-tag pb-24">
      <div class="color-blue pr-16">养老照料</div>
      <div class="time">今天</div>
    </div>
    <div class="video-content">
      <video-player
        class="vjs-custom-skin"
        :options="playerOptions"
        :playsinline="true"
      >
      </video-player>
    </div>
    <div class="video-desc">
      随着年龄的增长，人身体的各项生理机能都会发生退化，抵抗力变弱，因此，老年人很容易被一些疾病困扰，且不易恢复，例如感冒。感冒对于普通人群来说可能是小病，但对于老年人(特别是高龄老人)则属大病，因为感冒的并发症和继发感染严重者可危及老人生命。
    </div>
    <div class="video-tip">
      <div class="reader">阅读10万+</div>
      <div class="good-job active">
        <van-icon name="good-job-o" class="f16" />
        <span>赞56</span>
      </div>
    </div>
    <div class="related-video">
      <div class="related-header">
        <span class="bold f16">相关推荐</span>
        <span class="all-video color-tip pr-3"
          >全部视频<van-icon name="arrow"
        /></span>
      </div>
      <div class="show-video">
        <div v-for="value in 3" :key="value" class="show-item">
          <!-- <van-image
           
            src=""
          /> -->
          <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
          <div class="van-ellipsis pr-8 pl-8">这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./video.scss";
import { Icon } from "vant";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";

import "videojs-contrib-hls.js/src/videojs.hlsjs";
import { Grid, GridItem } from "vant";
import { Image as VanImage } from "vant";

export default {
  components: {
    [Icon.name]: Icon,
    [GridItem.name]: GridItem,
    [Grid.name]: Grid,
    [VanImage.name]: VanImage,
    videoPlayer,
  },
  data() {
    return {
      searchKey: "", // 搜索关键字
      list: [],
      loading: false,
      finished: false,
      playerOptions: {
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
            type: "video/mp4",
            src: "http://vjs.zencdn.net/v/oceans.mp4",
          },
        ],
        // poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg", //封面地址
      },
    };
  },
  created() {
    // Toast({
    //   type: "fail",
    //   message: "222222222",
    //   duration: 300,
    // });
  },
  methods: {},
};
</script>