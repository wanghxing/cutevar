<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>新闻ID: {{$route.params.newsId}}</p>
    <p>新闻标题: {{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'I am params pages!'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) =>{
    console.log("准备离开路由模板");
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
