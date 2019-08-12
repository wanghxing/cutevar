<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <router-view class="aaa"></router-view>
  </div>
</template>
<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Hi, I am JSPang'
    }
  }
}
</script>
<style scoped>
.aaa {
  width:100%;
  height:auto;
  border:1px solid #666;
}
</style>