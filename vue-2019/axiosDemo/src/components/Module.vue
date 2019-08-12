<template>
  <div class="container">
    <!-- 3.新建一个vue的模板，位置在components文件夹下，名字叫count.vue。在模板中我们引入我们刚建的store.js文件，并在模板中用{{$store.state.count}}输出count 的值。 -->
    <h4>{{msg}}</h4>
    <hr>
    <h5>{{$store.state.count}}</h5>
    <!-- 5.在count.vue模板中加入两个按钮，并调用mutations中的方法。 -->
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>

    <!-- <router-link to="/vuex-count">vuex 01</router-link> -->
  </div>
</template>

<script>
  import store from "@/vuex/store"
  export default {
    name:'Count',
    data() {
      return {
        msg: '06 module模块组'
      }
    },
    store
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

</style>
