<template>
  <div class="container">
    <br>
    <button @click="emitEvent">点击我</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: "我是子组件中的数据"
      }
    },
    methods: {
      emitEvent() {
        //通过按钮的点击事件触发方法，然后用$emit触发一个my-event的自定义方法，传递this.msg数据。
        this.$emit('my-event', this.msg)
      }
    }
  }
</script>