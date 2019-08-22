<template>
  <div class="onbox">
    <!-- 发送方使用 $emit 自定义事件把数据带过去 -->
    <span>A组件->{{msg}}</span>
    <br>
    <br>
    <input type="button" value="把a组件数据传给b" @click="send">
  </div>
</template>

<script>
  import vmson from "../util/emptyVue"
  export default {
    data(){
      return {
        msg:{
          a:'111',
          b:'222'
        }
      }
    },
    methods:{
      send(){
        vmson.$emit('aevent',this.msg);
      }
    }
  }
</script>