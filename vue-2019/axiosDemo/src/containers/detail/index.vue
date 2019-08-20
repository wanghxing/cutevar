<template>
  <div class="detail-page">
    <br>
    <div class="back" @click="goBack">返回</div>
    <br>
    <h1>{{message}}</h1>
    <div class="box">
      <div class="item">
        <span>id:</span><span>{{this.$route.query.id}}</span>
        <!-- {{this.$route.params.id}} -->
      </div>
      <div class="item">
        <span>name:</span><span>{{this.$route.query.name}}</span>
        <!-- {{this.$route.params.name}} -->
      </div>
    </div>

    <div class="count-down-box">
      <div class="count-time">{{ `${day}天 ${hr}小时 ${min}分钟 ${sec}秒` }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data () {
      return {
        message:"Welcome to Detail Page",
        day: 0, // 天
        hr: 0,  // 时
        min: 0, // 分
        sec: 0  // 秒
      }
    },
    mounted: function () {
      this.countdown()
    },
    methods: {
      goBack () {
        this.$router.go(-1);
      },
      countdown: function () {
        const end = Date.parse(new Date('2019-10-01'))
        const now = Date.parse(new Date())
        const msec = end - now
        let day = parseInt(msec / 1000 / 60 / 60 / 24)
        let hr = parseInt(msec / 1000 / 60 / 60 % 24)
        let min = parseInt(msec / 1000 / 60 % 60)
        let sec = parseInt(msec / 1000 % 60)
        this.day = day
        this.hr = hr > 9 ? hr : '0' + hr
        this.min = min > 9 ? min : '0' + min
        this.sec = sec > 9 ? sec : '0' + sec
        const that = this
        setTimeout(function () {
          that.countdown()
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
.detail-page {
  .box {
    text-align: left;
    font-size:28px;
    padding:20px;
    .item {
      line-height:80px;
    }
  }
  .count-down-box {
    border:1px dashed greenyellow;
    display: flex;
    justify-items: center;
    align-items: center;
    padding:20px;
    background: #e5f503;
    .count-time {
      color: rgb(247, 59, 91);
    }
  }
}
</style>

