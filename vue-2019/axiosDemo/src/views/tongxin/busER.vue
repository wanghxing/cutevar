<template>
  <div class="container">
    <!-- https://www.jianshu.com/p/8e705bb0bb4b -->
    <!-- 详细说 非父子组件通信 -->
     <this-input :msg="parentMsg" v-on:message="receiveMsg"></this-input>
     <this-dialog></this-dialog>
  </div>
</template>

<script>
  import thisInput from '../../components/input'
  import thisDialog from '../../components/dialog'

  import Vue from 'vue'

  export default {
    data(){
      return {
        parentMsg:[1,2,3],
        flag:false,
        Bus:new Vue({})  // 新创建一个空的 Vue 实例来做中央事件总线
      }
    },
    components: {
      thisInput,
      thisDialog
    },
    methods:{
      receiveMsg(val){
        this.flag=val;
      }
    }
  }
</script>

<!--
问题一：如果有多个组件组件需要通信，是不是要在根组件上多建几个 Bus？
答：不需要的，只要保证事件名 （eventName）不一样就行了。

问题二：为什么要弄个 Bus？直接 this.$root.$on、this.$root.$emit 不更简单粗暴？
答：按照文档上的说法是专门用一个空的 Vue 实例（Bus）来做中央事件总线更加清晰也易于管理。
-->