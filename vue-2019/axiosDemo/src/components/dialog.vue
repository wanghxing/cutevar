<template>
  <div class="container">
     <div class="popbox" v-show="isShow">
       这是一个弹出框
      <i class="close"  @click="closeMyself">X</i>
     </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow:false
      }
    },
    created(){
      this.$root.$on('change',(val)=>{ // Hub接收事件  //通过$on接收事件
        this.isShow = val;
        console.log(val);
      })
    },
    methods: {
      closeMyself(){
        this.isShow = false;
      }
    },
    // 在组件销毁时别忘了解除事件绑定
    beforeDestroy() {
      this.$root.$off('change')
    }
  }
</script>

<style lang="scss" scoped>
.popbox {
  position:relative;
  width:200px;
  height:100px;
  border:1px solid red;
  padding:10px;
  margin-top:20px;
  .close {
    position:absolute;
    right:5px;
    top:5px;
    width:18px;
    height:18px;
    line-height:18px;
    text-align:center;
    font-style: normal;
    border-radius: 50%;
    border:1px solid #333;
  }
}
</style>
