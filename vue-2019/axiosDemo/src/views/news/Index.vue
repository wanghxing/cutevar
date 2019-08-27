<template>
  <div class="newsbox">
    <!-- https://github.com/Jasonwang911/vue_mockjs -->
    <div v-for="(item, key) in newsListShow" :key="item.id">
      <news-cell :newsDate="item" :key="key"></news-cell>
    </div>
  </div>
</template>

<script>
  import api from '../../api/common.js'
  import NewsCell from './Newscell.vue'

  export default {
    name:'news-index',
    data(){
      return {
        newsListShow: []
      }
    },
    components: {
      'news-cell':NewsCell
    },  
    created(){
      this.setNewsApi();
    },  
    methods:{
      setNewsApi: function(){
        api.JH_news('/news/index', 'type=top&key=123456')
        .then(res => {
          console.log(res);
          this.newsListShow = res.articles;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.topNav{
  width: 100%;
  background: #ED4040;
  position: fixed;
  top:0;
  left: 0;
  z-index: 10;
}
.simpleNav{
  width: 100%;
  line-height: 100px;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: '微软雅黑';
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar{height:0px}
.simpleNavBar{
  display: inline-block;
  width: 60px;
  color:#fff;
  font-size:15px;
}
.navActive{
  color: #000;
  border-bottom: 2px solid #000;
}
.placeholder{
  width:100%;
  height: 50px;
}
</style>