<template>
  <div class="refbox">
     <button>点击我</button>
  </div>
</template>

<script>
  export default {
    methods: {
      emitEvent(msg){
        console.log('接受的数据---------->' + msg);
        //接收的数据--------->我是父组件中的数据
      }
    }
  }
</script>