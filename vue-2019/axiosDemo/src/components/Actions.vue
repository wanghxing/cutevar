<template>
  <div class="container">
    <!-- 
      actions和之前讲的Mutations功能基本一样，
      不同点是，actions是异步的改变state状态，而Mutations是同步改变状态
     -->
    <h4>{{msg}}</h4>
    <hr>
    <h5>{{$store.state.count}}</h5>
    <!-- 5.在count.vue模板中加入两个按钮，并调用mutations中的方法。 -->
    <div>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </div>

    <!-- <router-link to="/vuex-module">vuex 06 module模块组</router-link> -->
  </div>
</template>

<script>
  import store from "@/vuex/store"
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name:'Count',
    data() {
      return {
        msg: '05 actions异步修改状态'
      }
    },
    store,
    computed:mapState(['count']),
    methods: {
      increment() {
        // this.$store.commit('increment');
        this.$store.dispatch('incrementAsync');
                       /* 
                       又一种写法：
                        dispatch({
                          type:'incrementAsync',
                          payload:payload
                        })
                       */
      },
      decrement() {
        this.$store.commit('decrement');
      },
      testAction(){
        this.$store.dispatch('actionA').then(()=>{

        })
      },
      ...mapMutations([  
        'add','reduce'
      ]),
      ...mapActions(['addAction','reduceAction'])
    }
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

</style>
