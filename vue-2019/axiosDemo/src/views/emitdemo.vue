<template>
  <div class="container">
    <p>例子 1：</p>
    <emitSon @my-event = "getMyEvent"></emitSon>
    <!-- 父组件中通过监测my-event事件执行一个方法，然后取到子组件中传递过来的值 -->
    <br>
    <div>------------------我是分割线------------------</div>
    <div>----------------------------------------------</div>
    <br>
    <!-- 实例2 -->
    <p>例子 2：</p>
    <div class="eg02">
        <div>父组件的toCity：{{toCity}}</div>
        <train-city @showCityName="updateCity" :sendData="toCity"></train-city>
    </div>

  </div>
</template>
<script>
  import emitSon from '../components/emitSon.vue'
  import trainCity from '../components/train-city.vue'  // 实例2
  export default {
    name:"emit-demo",
    data() {
      return {
        msg: "",
        toCity:"北京" // 实例2
      }
    },
    components: {
      emitSon,
      trainCity // 实例2
    },
    methods: {
      getMyEvent(msg){
        console.log('接收的数据----------->' + msg) //接收的数据--------->我是子组件中的数据 
      },
      // 实例2
      updateCity(data){//触发子组件城市选择-选择城市的事件
        this.toCity = data.cityname;//改变了父组件的值
        console.log('toCity:'+this.toCity)
      }
    }
  }
</script>
