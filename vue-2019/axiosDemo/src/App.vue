<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <!-- <Demo01/> -->

    <!-- keep-alive 可优化网络，避免每次访问都要请求一次服务器index.json  -->
    <keep-alive>  
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <br>
  </div>
</template>

<script>
// import Demo01 from './components/Demo01'

export default {
  name: 'App'/* ,
  components: {
    Demo01
  } */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.logo {
  width:40px;
  height:40px;
}

h1 {
  font-size:36px;
}


button {border:none;outline: none;background:none;}

.bluehand {
  color:#177bbb;
  cursor:pointer;
  padding:5px;
  border:1px solid #177bbb;
  display:inline-block;
  min-width:100px;
  margin-top:10px;
}

.clearfix:after{content:'.';display:block;height:0;clear:both;visibility:hidden;}
.clearfix{*zoom:1;}
.clearfix .clear{_height:0px;}
</style>
