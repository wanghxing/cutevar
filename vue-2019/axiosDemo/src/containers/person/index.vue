<template>
  <div class="person-page">
    <br>
    <button class="back" @click="goBack">返回</button>
    <br>
    <h1>{{message}}</h1>
    <div class="player-container">
      <video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
      <!-- demo地址： https://surmon-china.github.io/vue-video-player/ -->
    </div>

    <br>
    <!-- 当前页面的倒计时活动 -->
    <CountDown :start='startTime' :deadline='deadlineTime'>{{deadlineTime}}-{{startTime}}</CountDown>
    <br>
  </div>
</template>

<script>
  //引入video样式
  import 'video.js/dist/video-js.css'
  import 'vue-video-player/src/custom-theme.css'

  //引入hls.js
  import 'videojs-contrib-hls.js/src/videojs.hlsjs'

  import CountDown from '../../components/CountDown.vue'

  export default {
    name: "Person",
    data () {
      return {
        message:"Welcome to Person Page",
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          controls: true, //控制条
          preload: 'auto', //视频预加载
          muted: false, //默认情况下将会消除任何音频。
          loop: false, //导致视频一结束就重新开始。
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'application/x-mpegURL',
            src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
          }],
          poster: "http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg", //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        },
        deadlineTime: "2019/05/05", // 项目截止时间
        startTime: "2019/04/30"  // 项目开始时间
      }
    },
    components: {
      CountDown
    },
    methods: {
      goBack () {
        this.$router.go(-1);
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
.person-page {
  width:100%;
}
</style>

