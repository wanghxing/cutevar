<template>
  <div class="detail">
    <section>
      <h3 class="tit">{{this.$route.query.title}}</h3>
      <!-- {{detailData.title}} -->
      <div class="intro">
        <span>作者：{{detailData.author_name}}</span>
        <span>发布时间：{{detailData.publishDate}}</span>
      </div>
      <div class="con">
        {{detailData.details}}
        <img class="img" :src="detailData.picture" />
      </div>
    </section>
  </div>
</template>

<script>
  import api from '../../api/common.js'
  export default {
    data(){
      return {
        projectInformation: [],
        detailData: {
          
        }
      }
    },
    created(){
      this.setNewsApi();
    },  
    methods:{
      setNewsApi: function(){
        api.JH_news('/news/detail', 'type=top&key=123456')
        .then(res => {
          console.log(res);
          this.detailData = JSON.parse(JSON.stringify(res.detailData));
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.tit {
  font-size:18px;
  color:#333333;
  line-height:28px;
  margin-bottom:10px;
}
.intro {
  font-size:12px;
  color:#999999;
  line-height:18px;
  margin-bottom:30px;
  span {
    margin:0 20px;
  }
}

.con {
  font-size:14px;
  color:#666666;
  line-height:24px;
  padding:0 10px;
  text-align: left;
  .img, img {
    display: block;
    max-width:100%;
    height:auto;
    margin:0 auto;
    padding:10px 0;
  }
}
</style>
