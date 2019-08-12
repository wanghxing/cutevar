<template>
  <div class="hello">
    <h4>{{msg}}-----{{$route.params.username}}---{{$route.params.id}}</h4>

    <div class="tips">
      <h5 style="color:red;">redirect和alias的区别</h5>
      <p><strong>redirect</strong>：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。</p>
      <p><strong>alias</strong>：URL路径没有别改变，这种情况<span style="font-weight:800;color:blue;">更友好</span>，让用户知道自己访问的路径，只是改变了&lt;router-view&gt;中的内容。</p>

      <p>【填个小坑： 别名请不要用在path为’/’中，如下代码的别名是不起作用的。】</p>
    </div>

    <hr>
    <p class="keepAlive">{{testInfo1}}</p>
    <input placeholder="输入框" />

    <br>
    <hr>
    <br>

    <div>我是user组件, 动态部分是<span style="color:green;font-weight:800;padding-left:5px;">{{dynamicSegment}}</span></div>
    <p>注：点击路径上带参数的才可以哦！</p>

    <br>

  </div>
</template>  

<script>
  export default{
    name:'Hi1',
    data (){
      return {
        msg:'Hi, I am Hi1!',
        testInfo1: '',
        dynamicSegment: ''
      }
    },
    computed: {
        dynamicSegment () {
            return this.$route.params.id? this.$route.params.id : 'null'
        }
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave');
        // 设置下一个路由的 meta
      to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
      next();
    },
    activated() {
      console.log('hi1被激活');
    },
    deactivated() {
      console.log('hi1被缓存');
    },
    created() {
      setTimeout(() => {
        this.testInfo1 = '这是测试<keep-alive></keep-alive>的数据';
      }, 2000);
    },
    watch: {
      '$route'(to, from) {
        // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
        console.log(to);
        console.log(from);
        this.dynamicSegment = to.params.id? to.params.id: 'null'
      }
    }
  }

  /* 
  注意一点：activated,deactivated这两个生命周期函数一定是要在使用了keep-alive组件后才会有的，否则则不存在
  
  created()：在创建vue对象时，当html渲染之前就触发；但是注意，全局vue.js不强制刷新或者重启时只创建一次，也就是说，created()只会触发一次；

activated()：在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等 */
</script>

<style scoped>
.tips {
  font-size:14px;
  color:#333;
  text-align:left;
  padding:0 20px;  
}
.keepAlive {
  font-size:20px;
  color:crimson;
}
</style>
