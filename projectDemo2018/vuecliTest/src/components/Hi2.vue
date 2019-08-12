<template>
  <div class="hello">
    <h4>{{msg}}</h4>

    <p class="keepAlive">{{testInfo1}}</p>
    <input placeholder="输入框" />

    <br>
    <br>
  </div>
</template>  

<script>
  export default{
    name:'Hi2',
    data (){
      return {
        msg:'Hi, I am Hi2!',
        testInfo1:''
      }
    },
    activated() {
      console.log('hi2被激活');
    },
    deactivated() {
      console.log('hi2被缓存');
    },
    created() {
      setTimeout(() => {
        this.testInfo1 = '这是测试<keep-alive></keep-alive>的数据2';
      }, 2000);
    }
  }
</script>

<style scoped>
.keepAlive {
  font-size:20px;
  color:crimson;
}
</style>
