<template>
  <div class="container">
    <!-- （1）(2) 子组件用$emit来触发事件 
    首先在定义的子组件内，通过v-on:click="$emit(‘change1’)"向父组件传递消息，也就是，在点击子组件中的<div>元素时触发了change1事件，同时父组件用v-on在<test>上监听这个事件：
    -->
    <!-- <div class="bluehand" @click="clickSendMeg">点击这里向父级组件传递消息！</div> -->

    <!-- （3.1）子组件内通过$emit触发click事件。这种情况下的click事件相当于自定义事件 -->
    <!-- <div class="bluehand" @click="clickSendMeg0">点击这里向父级组件传递消息！</div>  -->
    <!-- （3.2）子组件直接绑定原生的DOM事件，需要父组件加.native -->
    <div class="bluehand">点击这里向父级组件传递消息！</div>
  </div>
</template>

<script>
  export default {
    name:'tx-test',
    data(){
      return {

      }
    },
    methods: {
       clickSendMeg() {
         this.$emit('change1',5)
       },
       clickSendMeg0() {
         this.$emit('click')
       }
    }
  }
</script>

<style scoped>
.bluehand {
  color:#177bbb;
  cursor:pointer;
  padding:5px;
  border:1px solid #177bbb;
}
</style>

