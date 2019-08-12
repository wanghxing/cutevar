<template>
  <div class="container">
    <h4>{{msg}}</h4>
    <hr>
    <h5>当前状态：{{count}}</h5>
    <!-- <h5>当前状态+localCount：{{countPlusLocalState}}</h5> -->
    <p>组件自己的内部计算属性： {{ localComputed }}</p>

    <!-- <router-link to="/vuex-mutations">vuex 03 Mutations修改状态</router-link> -->
  </div>
</template>

<script>
  import store from "@/vuex/store"
  import {mapState} from 'vuex'
  export default {
    name:'State',
    data() {
      return {
        msg: '02 state访问状态对象',
        localCount: 4
      }
    },
    store,
    // 方法一：通过computed的计算属性直接赋值
    /* computed:{
      count(){
          return this.$store.state.count;
      }
    } */
    // 方法二：通过mapState的对象来赋值
    /* computed:mapState({
      count: state => state.count,
      countAlias: 'count',
      countPlusLocalState (state) {
        return state.count + this.localCount
      }

    }) */
    // 方法三：通过mapState的数组来赋值
    // 这个算是最简单的写法了，在实际项目开发当中也经常这样使用。
    // computed: mapState(['count'])
    computed: {
      localComputed () {
        return this.count + 10;
      },
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({
        count: 'count'
      })
    }

  }


  
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

</style>
