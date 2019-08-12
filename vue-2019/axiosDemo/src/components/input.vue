<template>
  <div class="container">
     <input type="text" v-model="tips" name="" @change="onInput()" >
  </div>
</template>

<script>
  export default {
    props: {
      msg:Array
    },
    data(){
      return {
        flag:true,
        tips:'请输入值'
      }
    },
    methods: {
      onInput() {
        if(this.tips.trim()){
          this.$root.$emit('change',this.flag); //通过$emit触发事件
        }
      }
    }
  }
</script>