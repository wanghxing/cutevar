<template>
  <div class="container">
    <br>
    <button class="back" @click="goBack">返回</button>
    <br>
    <br>
    <br>

    page01
    <br>
    <!-- <p>{{$route.name}}---{{$route.params.username}}---{{$route.params.id}}</p> -->

    <br>

    <h1>文字效果</h1>

    <br>

    <p>用下面的例子，看下生命周期</p>
    <span style="color:red;font-size:20;font-weight:800;">{{message}}</span>
    <button type="button" @click="changeMessgae">更新数据</button>

  </div>
</template>

<script>

  export default {
    name:'page01',
    data () {
      return {
        list:[],
        message: 'hello vue!'
      }
    },
    methods: {
      goBack () {
        this.$router.push('/');
      },      
      changeMessgae(){
        this.message="数据改变了";
      }
    },
    beforeCreate() {
      console.group('beforeCreate 创建前状态===============》');
      console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //undefined
      console.log("%c%s", "color:red","message: " + this.message)
    },
    created() {
      console.group('created 创建完毕状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount() {
      console.group('beforeMount 挂载前状态===============》');
      console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    mounted() {
      console.group('mounted 挂载结束状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeUpdate() {
      console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
    },
    updated() {
      console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
    },
    beforeDestroy() {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
    },
    destroyed() {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message)
    },
    activated() {
      console.log('activated执行了');
    },
    deactivated() {
      console.log('deactivated执行了');
    }
  }
</script>

<style lang="scss" scoped>
button {
  border:none;
  background: none;
  text-decoration: underline;
}

.list-page {
  font-size: 26px;
  li {
    height: 70px;
    line-height: 70px;
    background-color: white;
    border-bottom: 1px solid #ececec;
    padding-left: 20px;
  }
}
    
@mixin text3d($color) {
  color: $color;
  text-shadow: 1px 1px 0px darken($color, 5%),
               2px 2px 0px darken($color, 10%),
               3px 3px 0px darken($color, 15%),
               4px 4px 0px darken($color, 20%),
               4px 4px 2px #000;
}

h1 {
  font-size: 30px;
  @include text3d(#f9fd00);
}      
</style>
