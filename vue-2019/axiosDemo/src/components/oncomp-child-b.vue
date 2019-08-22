<template>
 <div class="onbox">
   <!-- 而接收方通过 $on监听自定义事件的callback接收数据 -->
    <span>B组件, A组件传的的数据为->{{msg}}</span>
 </div>
</template>
<script>
	  import vmson from "../util/emptyVue"
	  export default {
		data(){
        return {
            msg:""
        }
    },
		mounted(){
        vmson.$on("aevent",(val)=>{//监听事件aevent，回调函数要使用箭头函数;
            console.log(val);//打印结果：我是a组件的数据
            this.msg = val;
        })
    },
    beforeDestroy() {
      console.log('beforeDestroy');
      vmson.$off('aevent',this.msg)
    },
	}
</script>
