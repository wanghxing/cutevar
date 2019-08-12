<template>
  <div class="container">
      <div>总数：{{total}}</div>
      <!-- <abc v-on:input = "change"></abc> -->
      <abc v-model="total"></abc>
      <br/>
      <button class="bluehand" @click="down">-1</button>
      <button class="bluehand" @click="up">+1</button>
      <!-- 
        v-model可以用来创建自定义的表单输入组件
        <div>总数：{{total}}</div>
        <abc v-model="total"></abc>
        <br/>
        <button @click="down">-1</button>
       -->

  </div>
</template>

<script>
  import abc from "../../components/abc"
  export default {
    name: "vmodel",
    data(){
      return {
        total: 0
      }
    },
    components:{
      'abc':abc
    },
    methods: {
      /* v-model代替了v-on:input="change"绑定的方法 */
      /* change:function(value){
        this.total = value
      }, */
      down(){
        this.total=this.total-1;
      },
      up(){
        this.total=this.total+1;
      }
    }

  }
</script>
<!-- 
  实现这样一个具有双向数据绑定的v-model组件要满足下面的两个要求：
  1.子组件接受一个value属性。
  2.子组件在有新的value时触发input事件。 
-->