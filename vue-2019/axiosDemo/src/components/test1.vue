<template>
  <div class="container">
  <!-- 
    注：
    虽然可以在子组件中改变父组件的数据，但是最好不要这样做。
    理想情况下，只有组件自己可以修改自己的数据状态。
  -->
    <div @click="handle">点击改变父组件中的message！</div>
    <!-- 2.子组件索引 -->
    <div></div>

  </div>
</template>

<script>
  export default {
    name: 'test-1',
    data(){
      return {
        message2: "我是test-1组件！"
      }
    },
    methods: {
        // 1.
        handle: function () {
            this.$parent.message = "来自组件test-1的消息！"
        }
          
    }
  }

</script>