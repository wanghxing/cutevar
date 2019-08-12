<template>
  <div class="container">
    <!-- 非父子组件通信——1.父链和子组件索引 -->
    <!-- 2注：在子组件标签上使用ref指定一个名称（这里是A），在父组件内通过this.$refs来访问指定名称的子组件。 -->
    <test-1 ref="A"></test-1>
    <div>message: {{message}}</div>
    
    <br>
    <hr>
    <!-- 2.子组件索引 -->
    <div v-on:click="handle2">点击这里获取子组件的message2: {{msg2}}</div>
    <!-- 2注：当子组件较多时，通过this.$children一一遍历出我们需要的组件是比较麻烦的。
Vue提供了子组件索引的方法，用特殊的属性ref来为子组件指定一个索引名称： -->
    <!-- <test-1 ref="A"></test-1> -->
  </div>
</template>

<script>
import test1 from "../../components/test1"
export default {
    name: 'bus2',
    data(){
      return {
        message: "",
        msg2: ""
      }
    },
    components: {
      "test-1":test1
    },
    methods: {
      // 2. 子组件索引
      handle2: function() {
          /* var a = this.$children[0].message2; */
          var a = this.$refs.A.message2;
          this.msg2 = a;
      }
    }
  }
</script>
