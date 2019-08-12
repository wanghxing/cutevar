<template>
  <div class="home-page">
    <br>
    <div class="back" @click="goBack">返回</div>
    <br>
    <h1>{{message}}</h1>
    

    <p>1. router-link 跳转：</p>
    <!-- <router-link to="/home">去首页</router-link> -->
    <router-link to="/list">去列表页</router-link>
    <!-- <router-link to="/detail">去详情页</router-link> -->
    <router-link to="/person">去个人中心页</router-link>

    <p>2. js 跳转</p>
    <div class="btn-box">
      <!-- <button type="button" name="home" @click="goPage">去首页</button> -->
      <button type="button" name="list" @click="goPage">去列表页</button>
      <!-- <button type="button" name="detail" @click="goPage">去详情页</button> -->
      <button type="button" name="person" @click="goPage">去个人中心页</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
        message:"Welcome to Home Page"
      }
    },
    methods:{
      goBack () {
        this.$router.push('/');
      },
      goPage(e){
        const path= e.currentTarget.getAttribute('name');
        if(path==='home'){
          // this.$router.push('/');
        }else{
          this.$router.push(path);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.home-page {
  display:flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  .btn-box {
    display:flex;
    flex-direction: column;
    button {
      display: inline-block;
      margin-bottom: 10px;
    }
  }
  
}
</style>

