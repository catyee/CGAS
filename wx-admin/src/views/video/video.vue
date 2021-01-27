<template>
  <div class="video-container">
    <div class="selector">
      <div class="flex pr-16">
        <div class="title-line"></div>
        <span class="pl-2 f14">查看视频</span>
      </div>
    </div>
    <div class="content">
      <div class="content-l">
        <div>
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
        </div>
      </div>
      <div class="content-r">
        <div class="flex item">
          <div class="title">视频标题：</div>
          <div>{{videoDetail.videoName}}</div>
        </div>
        <div class="flex item">
          <div class="title">视频简介：</div>
          <div>
            {{videoDetail.videoDesc}}
          </div>
        </div>
        <div class="flex item">
          <div class="title">视频分类：</div>
          <div> {{videoDetail.oldManType}}、{{videoDetail.takeCareType}}</div>
        </div>
        <div class="flex item">
          <div class="title">视频标签：</div>
          <div>
              <el-tag class="tag-item" v-for="tag in videoDetail.tagList" :key="tag.tagId">{{tag.tagName}}</el-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'video.js/dist/video-js.css'

import './custom-theme.scss'
import './video.scss'

import { videoPlayer } from 'vue-video-player'
import { getVideo } from '@/api/video'
export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      // videoId
      videoId: null,
      playerOptions: {
        // videojs options
        // width: '65%',
        height: '500',
        preload: 'auto',
        aspectRatio: '16:9',
        fluid: true,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        muted: false,
        language: 'zh-CN',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: '',
            src:
              ''
          }
        ],
        poster: '',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
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
      }
    }
  },
  created () {
    // 获取用户id
    this.videoId = this.$route.params.id
    // 获取视频详情
    this.getVideo()
  },
  mounted () {
    // setTimeout(() => {
    //   console.log('dynamic change options', this.player)
    //   // change src
    //   // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
    //   // change item
    //   // this.$set(this.playerOptions.sources, 0, {
    //   //   type: "video/mp4",
    //   //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
    //   // })
    //   // change array
    //   // this.playerOptions.sources = [{
    //   //   type: "video/mp4",
    //   //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
    //   // }]
    //   this.player.muted(false)
    // }, 5000)
  },
  computed: {
    // player () {
    //   return this.$refs.videoPlayer.player
    // }
  },
  methods: {
    // 获取视频详情
    getVideo () {
      getVideo(this.videoId).then(res => {
        if (!res.data) {
          this.msgError('获取视频信息失败')
        } else {
          this.videoDetail = res.data
          // 获取视频格式
          const videoAddrArr = res.data.videoAddr.split('.')
          const type = videoAddrArr[videoAddrArr.length - 1]
          this.playerOptions.sources[0].type = 'video/' + type
          // 获取视频地址
          this.playerOptions.sources[0].src = res.data.videoAddr
          // 获取图片地址
          this.playerOptions.poster = res.data.imagAddr
        }
      })
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
  }
}
</script>
