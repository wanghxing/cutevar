<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <p>导航 ：</p>

    <!-- 10. 编程式导航 -->
    <p>
      <button @click="goBack">后退</button>
      <button @click="goFront">前进</button>
      <button @click="goHome">返回首页</button>
    </p>

    <!-- <p>----{{ $route.name }}----</p> -->
    <!-- 1. vue-router 入门 -->
    <!-- router-link 定义点击后导航到哪个路径下 -->
    <router-link to="/">首页</router-link> | 
    <router-link to="/hi">Hi页面</router-link> | 
    <!-- 2. 配置子路由  -->
    <router-link to="/hi/hi1">Hi1页面</router-link> |    
    
    <!-- 3. vue-router如何参数传递 -->
    <router-link :to="{name:'Hi1',params:{username:'jspang',id:'888'}}">Hi1页面-参数传递</router-link> |

    <!-- 7.alias别名的使用 -->
    <router-link to="/hi/jspang">jspang-Hi1页面别名</router-link> | 

    <router-link to="/hi/hi2">Hi2页面</router-link> |     

    <!-- 5. 通过URL传递参数 -->
    <router-link to="/params/19823/jspang website is very good">params</router-link>

    <br>

    <!-- 6-1. redirect重定向 -->
    <router-link to="/goback">返回首页</router-link> |
    <!-- 6-2. redirect重定向传参 -->
    <router-link to="/goParams/527/Today is thanksgiving day">goParams</router-link> |


    <!-- 9-2. 404页面设置 -->
    <router-link to="/xxxxx">404测试</router-link>



    <!-- 对应的组件内容渲染到router-view中 -->
    <!-- <router-view/> -->
    <!-- 8. 路由过渡动画 -->
    <transition name="fade" mode="out-in">
      <keep-alive>
        <!--  v-if="$route.meta.keepAlive" -->
        <router-view></router-view> 
      </keep-alive> 
    </transition>

    <!-- 4. 单页面多路由区域操作 -->
    <router-view name="left" :class="left"></router-view>
    <router-view name="right" :class="right"></router-view>

    

    
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      left:'left',
      right:'right'
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goFront(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
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
}

.left, .right {
  float:left;
  width:50%;
  height:100px;
}
.left {background:#ffbb3e;}
.right {background:gray;}

.fade-enter {
  opacity:0;
}
.fade-enter-active {
  transition:opacity .5s;
}
.fade-leave {
  opacity:1;
}
.fade-leave-active {
  opacity:0;
  transition:opacity .5s;
}
</style>
