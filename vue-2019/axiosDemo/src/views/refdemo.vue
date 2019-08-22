<template>
  <div class="refbox">
    <!-- 
      $refs的使用场景
      父组件调用子组件的方法，可以传递数据
      注意：子组件标签中的时间也不区分大小写要用“-”隔开
     -->
     <child-a ref="child"></child-a>
     <!-- 用ref给子组件起个名字 -->
     <button @click="getMyEvent">点击父组件</button>
  </div>
</template>

<script>
  import ChildA from '../components/ref-child.vue'
  export default {
    name:'ref-demo',
    data(){
      return {
        msg:"我是父组件中的数据"
      }
    },
    components:{
      'child-a':ChildA
    },
    methods:{
      getMyEvent(){
        this.$refs.child.emitEvent(this.msg);
        //调用子组件的方法，child是上边ref起的名字，emitEvent是子组件的方法。
      }
    }
  }
</script>