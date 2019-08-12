<template>
  <div class="list-page">
    <br>
    <div class="back" @click="goBack">返回</div>
    <br>
    <h1>{{message}}</h1>
    <div class="box">
      <!-- 通过router-link 跳转 -->
      <!-- 传参方法1 -->
      <!-- <router-link :to="{name:'Detail',params:{id:item.id,name:item.name}}" tag="div" v-for="item in list" :key="item.id" id="item.id">{{item.name}}</router-link> -->

      <!-- 传参方法2 -->
      <!-- <router-link :to="{name:'Detail',query:{id:item.id,name:item.name}}" tag="div" v-for="item in list" :key="item.id" id="item.id">{{item.name}}</router-link> -->

      <div v-for="item in list" :key="item.id" :id="item.id" @click="goDetail">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "List",
    data () {
      return {
        message:"Welcome to List Page",
        list:[
          // 调用index.json里的数据时，此处为空
          {id:1,name:'苹果'},
          {id:2,name:'香蕉'},
          {id:3,name:'梨子'},
          {id:4,name:'菠萝'},
          {id:5,name:'哈密瓜'}
        ]
      }
    },
    mounted(){
     this.getData();//调用获取数据函数
    },  
    methods: {
      goBack () {
        this.$router.push('/home');
      },
      goDetail(e) {
        const id=e.currentTarget.getAttribute("id");
        const name=e.currentTarget.innerText;
        
        this.$router.push({
         // 通过js params跳转：

         /* 注意：如果使用params出传递参数的话要注意以下三点
         *  1.params一定要和页面组件的name值搭配
         *  2.一定要提前在route路由中定义好参数
         *  3.在detail页面接收参数通过this.$route.params.形式
         */
          // name:'Detail',
          // params:{id:id, name:name}

          // 通过js query跳转：
          path:'detail',
          query:{id:id, name:name}
        })
        // 一般通过query方法传递参数是相对比较简洁一点的
      },
      //定义获取数据函数
      getData(){
         axios.get('/api/index.json').then((res)=>{
              if(res.status==200){
                this.list=res.data.list;
              }
         }).catch((error)=>{
             console.log(error);
         })
      }
    }
  }
</script>

<style lang="scss" scoped>
.list-page{
    .box {
      font-size: 28px;
      div {
        height: 70px;
        line-height: 70px;
        background-color: white;
        border-bottom: 1px solid #ececec;
        padding-left: 20px;
      }
    }
      
}


    
</style>

