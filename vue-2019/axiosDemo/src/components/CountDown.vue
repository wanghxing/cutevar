<template>
  <div class="countdown-component">
    <br>
    <br>
    <h4>{{message}}</h4>
    <p style="font-size:12px;text-align:left;">当我们离开某个界面时不应该让他在计时，而是我们在当前页面的时候才计时，这样显得更合理一点</p>

    <div class="count-down-2">
      <span v-if="Date.parse(new Date(deadline)) <= Date.parse(new Date()) && Date.parse(new Date()) < Date.parse(new Date(start))">待开始</span>
      <span v-else-if="Date.parse(new Date())===Date.parse(new Date(start))">已开始</span>
      <span v-else>倒计时：{{`${day}天${hr}小时${min}分钟${sec}秒`}}</span>
    </div>
  </div>
</template>

<script>


  export default {
    props: ['deadline', 'start'],
    name: "CountDown",
    data () {
      return {
        message:"详情detail页的倒计时优化",
        day: 0, // 天
        hr: 0,  // 时
        min: 0, // 分
        sec: 0  // 秒
      }
    },
    mounted: function () {
        this._interval = setInterval(() => {
            this.countdown();
        }, 0) // 此处时间为1000"即1秒时，回到当前页面会有个延迟显示倒计时的时间差
    },
    destroyed () {
        clearInterval(this._interval)
    },
    methods: {
      countdown: function () {
          const end = Date.parse(new Date(this.start));
          const now = Date.parse(new Date());
          const msec = end - now;
          let day = parseInt(msec / 1000 / 60 / 60 / 24);
          let hr = parseInt(msec / 1000 / 60 / 60 % 24);
          let min = parseInt(msec / 1000 / 60 % 60);
          let sec = parseInt(msec / 1000 % 60);
          this.day = day;
          this.hr = hr <= 9 ? hr : '0' + hr;
          this.min = min <= 9 ? min : '0' + min;
          this.sec = sec <= 9 ? sec : '0' + sec;

          // const that = this;
          // // console.log(this.day===0 && this.hr==='00' && this.min==='00'&& this.sec==='00');
          // if(this.day===0 && this.hr=== '00' && this.min==='00'&& this.sec ==='00'){
          //     console.log(1234566)
          //     return
          // }
          // setTimeout(function () {
          //     that.countdown()
          // }, 1000)
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
</style>

