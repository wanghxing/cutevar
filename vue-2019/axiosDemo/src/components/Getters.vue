<template>
  <div class="container">
    <!-- 3.新建一个vue的模板，位置在components文件夹下，名字叫count.vue。在模板中我们引入我们刚建的store.js文件，并在模板中用{{$store.state.count}}输出count 的值。 -->
    <h4>{{msg}}</h4>
    <hr>
    <h3>{{count2}}</h3>
    <p>{{ doneTodos }}</p>
    <p>Completed Todos: {{ doneTodosCount }}</p>

    <!-- <router-link to="/vuex-actions">vuex 05 actions异步修改状态</router-link> -->
  </div>
</template>

<script>
  import store from "@/vuex/store"

  import { mapState, mapGetters } from 'vuex';

  console.log(store.getters.getTodoById(1))

  export default {
    name:'Getters',
    data() {
      return {
        msg: '04 getters计算过滤操作'
      }
    },
    store,
    computed: {
      /* ...mapState(['count']),
      count () {
        return this.$store.getters.count;
      },*/      
      doneTodosCount () {
        return this.$store.getters.doneTodosCount
      },
      ...mapGetters(["count2", "doneTodos", "doneTodosCount", "getTodoById"])
    }
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

</style>
