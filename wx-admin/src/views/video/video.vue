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
          <div>如何预防老年人感冒</div>
        </div>
        <div class="flex item">
          <div class="title">视频简介：</div>
          <div>
            随着年龄的增长，人身体的各项生理机能都会发生退化，抵抗力变弱，因此，老年人很容易被一些疾病困扰，且不易恢复，例如感冒。感冒对于普通人群来说可能是小病，但对于老年人(特别是高龄老人)则属大病，因为感冒的并发症和继发感染严重者可危及老人生命。
          </div>
        </div>
        <div class="flex item">
          <div class="title">视频分类：</div>
          <div>自理老人、生活照料</div>
        </div>
        <div class="flex item">
          <div class="title">视频标签：</div>
          <div>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
              <el-tag class="tag-item">标签一</el-tag>
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
export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      playerOptions: {
        // videojs options
        // width: '65%',
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        muted: true,
        language: 'zh-CN',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src:
              'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          }
        ],
        poster: '/static/images/author.jpg'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      console.log('dynamic change options', this.player)
      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })
      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false)
    }, 5000)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
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
