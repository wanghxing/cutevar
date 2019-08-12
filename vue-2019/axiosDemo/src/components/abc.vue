<template>
  <div class="container">
      <!-- <button class="bluehand" @click="handle">+1</button> -->

      <!-- 双向绑定 -->
      <input type="text" :value="value" @input="update">
  </div>
</template>

<script>
  export default {
    name: "abc",
    props:["value"], // v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源 此处value为total
    data(){
      return {
        count: 0
      }
    },
    methods: {
      handle:function(){
        this.count++;
        this.$emit("input",this.count)
      },
      update(e){
        this.$emit("input",e.target.value);
      }
    }

  }
</script>

<style lang="" scoped>
  
</style>