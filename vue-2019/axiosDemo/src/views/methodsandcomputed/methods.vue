<template>
  <div class="container">
    <!-- https://blog.csdn.net/weixin_42695446/article/details/84672633 -->
    <div>{{a}}</div>
    <a href="javascript:void(0);" v-on:click="a='hello!'">点击这里可以改变上面的文字</a>
    <br>
    <!-- <div v-on:click="alert">点击将会弹出提示框！</div> -->
    <div @click="click">点击将会弹出提示框！</div>

    <br>
    <hr>
    <br>
    <!-- props -->
    <proptest :title-one="abc"></proptest>  
  </div>
</template>

<script>
  import proptest from '../../components/proptest.vue'
  export default {
    name:'mdemo',
    data (){
      return {
        a:"你好！",
        abc: {
          'one':1,
          'two':2
        }
      }
    },
    components:{
      proptest
    },
    methods:{
      init: function () {
          console.log(this.a);
      },
      click:function(){
          this.alert();
      },
      alert:function(){
          alert(this.a);
      }
    },
    mounted: function () {
        this.init();
        //你好！
    }
  }
</script>

<style scoped>
.container div {
  padding:10px 0;
}
</style>
