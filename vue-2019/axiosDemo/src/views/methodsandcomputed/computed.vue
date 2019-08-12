<template>
  <div class="container">
    <!-- https://blog.csdn.net/weixin_42695446/article/details/84672633 -->
    <div>{{message}}</div>
    <div>如果right的值为true，message会增加10，否则会增加100</div>
    <div>{{judge}}</div>

    <br>

    <div>{{total}}</div>
    <div v-on:click="add1">点击这里将data1增加1:{{data1}}</div>
    <div v-on:click="add2">点击这里将data2增加1:{{data2}}</div>

    <br>
    <div>{{total2}}</div>
  </div>
</template>

<script>
  export default {
    name: 'cdemo',
    data() {
        return {
          message: 1,
          right: true,
          data1: 1,
          data2: 2,
          first: "a",
          last: "b"
        }
    },
    computed: {
        judge: function () {
            if (this.right) {
                return this.message + 10;
            }
            else {
                return this.message + 100;
            }
        },
        total: function () {
            return this.data1 + this.data2
        },
        total2: {
          get:function(){
              return this.first +" "+ this.last
          },
          set:function(value){
              var names=value.split(" ");
              this.first=names[0];
              this.last=names[1];
          }
        }
    },
    methods: {
      add1: function () {
          this.data1++;
      },
      add2: function () {
          this.data2++;
      }
    }
  }

  /** 方法与计算属性在缓存上的不同

  注意到，我们将同一个函数定义为方法而不是计算属性也可以达到相同的效果,

  然而，将函数定义为方法或者定义为计算属性，两者是不同的：
计算属性是基于它们的依赖进行缓存的，只在相关依赖发生改变时，它们才会重新求值，也就是说，对于上面的计算属性中的函数，只要message没有发生改变，多次访问judge就会返回之前的计算结果，而不会再次执行函数。
方法则不是这样，方法中的函数不会有缓存。每次调用方法中的函数，都会重新计算
 */
</script>

<style scoped>
.container div {
  padding:10px 0;
}
</style>
