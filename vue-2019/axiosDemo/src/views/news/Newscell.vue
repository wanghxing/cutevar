<template>
  <section class="financial-list">
    <section class="collect" @click="jumpPage(newsDate.arcId,newsDate.title)">
      <aside>
        <h2>{{newsDate.title}}</h2>
        <section class="Cleft clearfix">
          <img class="fl" src="../../assets/icon/eyes.png" style="width:16px;height:10px;margin-top:3px;">
          <span class="fl">{{newsDate.author_name}}</span>
        </section>
        <section class="Cright clearfix">
          <img class="fl" src="../../assets/icon/clock.png" style="width:14px;height:14px;">
          <span class="fl">{{newsDate.date | getYMD}}</span>
        </section>
        <div style="clear: both"></div>
      </aside>
      <aside>
        <img :src="newsDate.thumbnail_pic_s" style="border-radius: 4px;">
      </aside>
      <div style="clear: both"></div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'NewsCell',
    props:{
      newsDate: Object
    },
    data(){
      return {

      }
    },
    computed: {

    },
    methods: {
      jumpPage(arcId,title){
        // window.location.href = this.newsDate.url
        this.$router.push({
          name: "news-detail",
          query: { id:arcId, title:title }
        });
      }
    }
  }
</script>

<style scoped>
.fl {
  float:left;
}
.financial-list {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 14px 0;
  border-bottom: 1px solid #ccc;
}
 
.financial-list .collect {
  width: 92%;
  margin: 0 auto;
}
 
.financial-list .collect aside:nth-of-type(1) {
  width: 63%;
  float: left;
}
 
.financial-list .collect aside:nth-of-type(2) {
  width: 32%;
  height: 100px;
  float: left;
  margin-left: 15px;
}
 
.financial-list .collect h2 {
  width: 100%;
  height:48px;
  font-size: 16px;
  color: #333333;
  line-height: 24px;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  margin-top:0;
  text-align: left;
}
 
.financial-list .collect aside:nth-of-type(2) img {
  width: 100%;
  height: 100%;
}
.financial-list .collect aside .Cleft,
.financial-list .collect aside .Cright {
  height: 20px;
  display:flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
}
.financial-list .collect aside .Cleft {
  width: 45%;
  float: left;
  margin-top: 18px;
}
 
.financial-list .collect aside .Cleft span{
  display: block;
  width: 70px;
  margin-left: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  line-height:18px;
  text-align: left;
  margin: 4px 0 0 5px;
}
 
.financial-list .collect aside .Cright {
  width: 55%;
  float: right;
  margin-top: 18px;
}
.financial-list .collect aside .Cright span{
  display: inline-block;
  margin: 4px 0 0 5px;
  line-height:18px;
}
.financial-list .collect aside span {
  font-size: 13px;
  color: #999999;
}
 
.financial-list .collect aside .Cleft img,
.financial-list .collect aside .Cright img {
  width: 18px;
  height: 24px;
  margin-top: 4px;
}
</style>