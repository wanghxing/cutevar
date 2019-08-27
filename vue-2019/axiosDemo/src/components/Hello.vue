<template>
  <div class="container">
    <br>

    <h4 class="title">{{msg}}</h4>
    <br>
    <p class="msg">{{msg02}}</p>
    <br>
    <br>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->

    <!-- 
      注意：router/index.js里 path:'/' 路径一个斜杠，即显示当前页，App.vue页面可以不加router-link, 适合首页
     -->
    <router-link class="linkS" to="/demo01">Demo01 建路由及axios filter</router-link>
    <router-link class="linkS" to="/one01">axios的简单使用 </router-link>
    <router-link class="linkS" to="/one02">v-cloak filter </router-link>
    <router-link class="linkS" to="/mock-demo">mock 模拟增删查改 </router-link>
    <br>
    <!-- <router-link class="linkS" to="/page01">page01 玩玩router</router-link> -->
    <br>
    <router-link class="linkS" :to="{name:'page01',params:{username:'zhp',id:'888'}}">page01 router传参 生命周期</router-link>

    <br>
    <br>
    <router-link class="linkS" to="/home">进入一个router小栗子</router-link>

    <br>
    <br>
    <router-link class="linkS" to="/vuex-count">vuex 01</router-link>

    <br>
    <br>
    <router-link class="linkS" to="/methods-demo">methods demo & props demo</router-link>
    <br>
    <br>
    <router-link class="linkS" to="/computed-demo">computed demo</router-link>

    <br>
    <br>
    <router-link class="linkS" to="/component-tongxin">父子组件通信</router-link>
    <br>
    <br>
    <router-link class="linkS" to="/bus">非父子组件通信 中央事件总线bus</router-link>
    <router-link class="linkS" to="/bus2">非父子组件通信2 父链和子组件索引</router-link>
    <router-link class="linkS" to="/buser">非父子组件通信2.2 父链和子组件索引</router-link>

    <router-link class="linkS" to="/vmodel">在自定义组件上使用v-model</router-link>
    <br>
    <br>
    <router-link class="linkS" to="/emit-demo">$emit的用法</router-link>
    <router-link class="linkS" to="/ref-demo">$ref的用法</router-link>
    <router-link class="linkS" to="/on-demo">$on的用法 （兄弟组件之间）</router-link>
    <br>
    <br>
    <router-link class="linkS" to="/news-index">vue+mockjs</router-link>
    <router-link class="linkS" to="/news-detail">vue+mockjs 详情页</router-link>

   
    <br>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 App.vue里 -->
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
  </div>
</template>

<script>
  export default {
    name:'hello',
    data (){
      return {
        msg:'欢迎来到Hello Country！',
        msg02:'下面是菜单，开始点菜吧！'
      }
    }
  }
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.linkS {
  align-self: flex-start;
}

h4, p{
  margin:0;
  padding:0;
}
.title {
  font-size:32px;
  color: cornflowerblue;
}
.msg {
  font-size:24px;
  color: #999999;
}
</style>
