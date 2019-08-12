<template>
  <div class="container">
    <!-- 3.新建一个vue的模板，位置在components文件夹下，名字叫count.vue。在模板中我们引入我们刚建的store.js文件，并在模板中用{{$store.state.count}}输出count 的值。 -->
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.count}}</h3>
    <!-- 5.在count.vue模板中加入两个按钮，并调用mutations中的方法。 -->
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>

    <!-- <router-link to="/vuex-state">vuex 02 state访问状态对象</router-link> -->
    <State></State>

    <Mutations></Mutations>

    <Getters></Getters>

    <Actions></Actions>

    <Module></Module>

  </div>
</template>

<script>
  import store from "@/vuex/store"

  import State from "../components/State.vue"
  import Mutations from "../components/Mutations.vue"
  import Getters from "../components/Getters.vue"
  import Actions from "../components/Actions.vue"
  import Module from "../components/Module.vue"

  export default {
    name:'Count',
    data() {
      return {
        msg: 'Hello Vuex'
      }
    },
    components:{
      State,
      Mutations,
      Getters,
      Actions,
      Module
    },
    store
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

</style>
