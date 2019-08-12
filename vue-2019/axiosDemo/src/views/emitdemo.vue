<template>
  <div class="container">
    <emitSon @my-event = "getMyEvent"></emitSon>
    <!-- 父组件中通过监测my-event事件执行一个方法，然后取到子组件中传递过来的值 -->
  </div>
</template>
<script>
  import emitSon from '../components/emitSon.vue'
  export default {
    data() {
      return {
        msg: ""
      }
    },
    components: {
      emitSon
    },
    methods: {
      getMyEvent(msg){
        console.log('接收的数据----------->' + msg) //接收的数据--------->我是子组件中的数据 
      }
    }
  }
</script>
