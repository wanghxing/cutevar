<template>
  <div class="container">
    <!-- 非父子组件通信——中央事件总线 -->
    <test-1></test-1>
    <test-2></test-2>
  </div>
</template>

<script>

  import Vue from 'vue'

  var bus = new Vue();
  Vue.component('test-1', {
      template: `<div @click="handle">我是test-1组件！点我！</div>`,
      methods: {
          handle: function () {
              bus.$emit("msg", "来自组件test-1的消息！")
          }
      }
  });
  Vue.component('test-2', {
      template: `<div>message：{{message}}</div>`,
      mounted: function () {
          /* var _this = this;
          bus.$on("msg", function (value) {
              _this.message = value;
          }) */

          /* 在组件test-2中监听来自bus的事件时需要绑定this，其中this指向的是名为bus的空Vue实例，并不是指向test-2组件。
          把回调函数改为箭头函数，其中的this就指向test-2组件了 */
          bus.$on("msg",  (value) =>{
              this.message = value;
          })
      },
      data: function () {
          return {
              message: ""
          }
      },
  });
  var app = new Vue({
      el: "#app",
  })
</script>
