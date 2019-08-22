<template>
  <div class="onbox">
    <oncomp-child-a></oncomp-child-a>
    <br>
    <oncomp-child-b></oncomp-child-b>
  </div>
</template>
<script>
  import childA from '../components/oncomp-child-a.vue'
  import childB from '../components/oncomp-child-b.vue'
  export default {
     name:'on-demo',
     data(){
       return {
         msg:''
       }
     },
     components:{
       'oncomp-child-a':childA,
       'oncomp-child-b':childB
     },
     methods:{
       
     }
  }
</script>