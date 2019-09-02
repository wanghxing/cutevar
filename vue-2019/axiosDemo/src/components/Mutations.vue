<template>
  <div class="container">
    <h4>{{msg}}</h4>
    <hr>
    <h5>{{$store.state.count}}</h5>
    <!-- 调用mutations中的方法。 -->
    <div>
      <!-- <button @click="$store.commit('add')">+</button> -->
      <button @click="$store.commit('incrementBy', {amount: 30})">+30</button>
      <!-- <button @click="$store.commit('reduce')">-</button> -->
      <button @click="$store.commit('reduceBy', 10)">-10</button>
    </div>
    
    <!-- <router-link to="/vuex-getters">vuex 04 getters计算过滤操作</router-link> -->
  </div>
</template>

<script>
  import store from "@/vuex/store"
  import {mapState, mapMutations} from "vuex"
  export default {
    name:'Mutations',
    data() {
      return {
        msg: '03 Mutations修改状态'
      }
    },
    store,
    conputed: {
      //...对象展开符的扩展 ...mapstate就是将mapstate对象混入到computed对象中
      ...mapState([ 
        'count'
      ])
    },
    methods: {
      ...mapMutations([
        'add', 'incrementBy','reduce', 'reduceBy'
      ])
    }
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

</style>
