<template>
  <!-- v-cloak 见：https://www.jianshu.com/p/f56cde007210?utm_source=oschina-app -->
  <!-- 当网络较慢，网页还在加载 Vue.js ，而导致 Vue 来不及渲染，这时页面就会显示出 Vue 源代码。我们可以使用 v-cloak 指令来解决这一问题。 -->
  <!-- 在简单项目中，使用 v-cloak 指令是解决屏幕闪动的好方法。但在大型、工程化的项目中（webpack、vue-router）只有一个空的 div 元素，元素中的内容是通过路由挂载来实现的，这时我们就不需要用到 v-cloak 指令咯。 -->
  <div class="container" v-cloak>
    <!-- https://www.cnblogs.com/divtab/p/10940770.html -->
    <div>过滤前：{{date}}</div>
    <br>
    <div>
      过滤后：{{date | fmtDate}}
    </div>
  </div>
</template>
<script>
  import axios from "axios"
  import moment from "moment"
  export default {
    name:'one02',
    data(){
      return {
        date: new Date()
      }
    },
    filters: {
      fmtDate(v){
        return moment(v).format('YYYY-MM-DD hh:mm:ss');
      }
    }
  }
</script>

<style lang="scss" scoped>
[v-cloak]{
  display: none !important;
}
.container {
  margin:0 10px;
  display:flex;
  flex-direction: column;
  justify-items: center;
  align-items: middle;
  text-align: left;
}
</style>