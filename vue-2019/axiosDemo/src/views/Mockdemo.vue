<template>
  <div class="container">
    <!-- https://blog.csdn.net/yw00yw/article/details/81272632 -->
    <!-- https://blog.csdn.net/yw00yw/article/details/81328126 -->
      <div class="add">
        <input type="number" v-model="obj.id">
        <br>
        <br>
        <input type="text" v-model="obj.name">
        <br>
        <br>
        <input type="text" v-model="obj.content">
        <br>
        <br>
        <button @click="addList">添加</button>
        <button @click="updateList">修改</button>
        <button @click="searchList">id查找</button>
      </div>
      <br>
     <ul class="result-box">
       <li v-for="(item, idx) in list" :key="idx">{{item.id}}:*****:{{item.name}}:{{item.content}}--------<button @click="deleteList(item.id)">删除</button></li>
     </ul>
  </div>
</template>

<script>
  import axios from 'axios'; 
  import Mock from '../mock.js';
  export default {
    data(){
      return {
        list: [], // 此处数据为传过来的假数据
        obj: {  //将添加的数据存到obj对象中
          id: 0,
          name: '',
          content: ''
        }
      }
    },
    created(){
      this.getData();
    },
    computed: {
      newId: function() {
        return this.obj.id;
      }
    },
    methods: {
      // 查询列表数据
      getData(){
        this.$http.get('/list').then(res => {
          this.list = res.data.data;
        });
      },

      // 删除列表数据
      deleteList(id){
        this.$http.post('/list',{
          params: {
           id: id
          }
        }).then(res => {
            this.list = res.data.data;
        });
      },

      // 增加列表数据
      addList(){
        // console.log("****"+this.obj);
        this.$http.post('/listAdd',{
          params: {
            obj: this.obj
          }
        }).then(res => {
            // console.log("请求成功"+res.data.data);
            this.list = res.data.data;
        });
      },

      // 修改列表数据
      updateList(){
        var that = this;
        this.$http.post('/listUpdate',{
          params: {
            obj: this.obj
          }
        }).then(function(res){
          // console.log("请求的数据"+res.data.data);
          that.list = res.data.data;
        });
      },

      // 查询列表数据
      searchList() {
        var that = this;
        this.$http.post('/listSearch',{
          params: {
           id: this.obj.id
          }
        }).then(res => {
            that.list = res.data.data;
        });
      }
    },
    mounted(){
      // this.getData();
    },
    watch:{
      newId:{
        handler(newV, oldV){
          console.log(newV, oldV);
          // this.obj.id = newV;  
          /* this.$http.get('/list').then(res => {
            this.list = res.data.data;
           
            var arrV = [];
             this.list.map((val,i)=>{
               arrV.push(val);
             console.log(arrV)
                console.log(i, '.....', val.id)
                if(val.id === newV) {
                  return val.id;
                }
             })
          }); */        
        },
        deep:true
      }
    }

  }
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  .result-box {
    display:flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    padding:0 12px;
    li {
      width:100%;
      display: flex;
      justify-items: center;
      text-align: left;
      list-style: none;
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
</style>