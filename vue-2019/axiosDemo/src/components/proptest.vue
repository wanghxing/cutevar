<template>
  <div class="container">
    <div @click="dd">{{titleOne}}</div>

    <br>
    <div>{{changeone}}</div>
    <div>{{counter}}</div>
  </div>
</template>

<script>
  export default {
    props:['titleOne'],
    /* props:{
      'titleOne':{
        type: Object,
        required: true
      }
    }, */
    data(){
      return {
        counter: this.titleOne
      }
    },
    methods: {
      dd (){
        console.log(typeof this.titleOne)
        /* if (this.titleOne ) {
            console.log("传入的bool的值为 true")
        }else{
            console.log("传入的bool的值为 false")
        } */
      }
    },
    computed: {
      changeone:function(){
          console.log('子组件给one的值自加1操作');
          return ++this.counter.one
      }
    }
  }
</script>
