<template>
  <div class="container">
    <!-- https://www.jianshu.com/p/8e705bb0bb4b -->
    
    <!-- 父子组件通信 -->
    <!-- 注：在命名自定义事件的名称的时候最好采用小写加短横线分割的命名方式 -->
    <br>
    <div>abc的值为：{{abc}}</div>
    <br>
    <!--（1）当监听到这个事件时就会触发父级组件中的add方法，add方法会让父级组件中的abc的值加1。 -->
    <!-- <tx-test @change1="add"></tx-test> -->

    <!--（2）通过事件向父组件发送消息时带参数
     注：不通过$event，add方法也可以自动获取到传递的参数。 -->
    <!-- <tx-test @change1="add($event)"></tx-test> -->
    
    <!-- （3）.native修饰符 -->
    <tx-test @click.native="add"></tx-test>
  </div>
</template>

<script>
import txtest from "../../components/txtest"
  export default {
    name:"componentTongxin",
    data(){
      return {
         abc:0
      }
    },
    components: {
      'tx-test':txtest
    },
    methods: {
      // (1)(3)
      add(){
        this.abc++
      },
      // （2）
      /* add(value){
        this.abc+=value
      } */
    }
  }
</script>
