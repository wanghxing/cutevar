<template>
  <div class="container">
    <br>
    <button class="back" @click="goBack">返回</button>
    <br>
    <h2>{{ msg }}</h2>
    <p>{{ info }}</p>

    <br>
    <hr>

    <div class="axiosBox">
      <h1>Bitcoin Price Index</h1>

      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>

      <section v-else>
        <div v-if="loading">Loading...</div>

        <div
          v-else
          v-for="(currency, cIdx) in info"
            :key="cIdx"
          class="currency"
        >
          {{ currency.description }}:
          <span class="lighten">
            <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
          </span>
        </div>

      </section>
    </div>

    <br>
    <hr>
    <div>filter展示将时间戳变成具体日期：{{timestamp | timestampFormat('yyyy-MM-dd')}}</div>

    <br>
    <hr>

    <!-- <div>
      <p>响应1：{{res1}}</p>
      <p>响应2：{{res2}}</p>
      <button @click="sendAjax">发请求</button>
    </div> -->

    <br>
    <hr>

    
  </div> 
</template>

<script>

import axios from "axios"
import * as filters from "../filters/index.js"
/* import {} from '@/api/common'; */
export default {
  name: 'AxiosDemo',
  data () {
    return {
      msg: 'this is a demo page',
      info: null,
      timestamp: 1558365345000,
      errored:false,
      loading:true,
      res1: '',
      res2: ''
    }
  },
  methods:{
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    sendAjax:function() {
      // 让组件具备axios对象的引用
      /* axios.get('http://localhost:8060/')
      .then(function(res1){
        console.log(res1, res1.data.time.updated);
      })
      .catch(function(err){
        console.log(err);
      })
      axios.defaults.baseURL = "http://localhost:8060/";
      // 所有请求自带的头信息
      axios.headers = {}; // 覆盖原本默认头
      // 走默认头，修改个别
      axios.defaults.headers.accept = 'afb';

      var q1 = axios.get('');
      var q2 = axios.get('page01','');

      axios.all([q1,q2])
      .then(axios.spread((res1,res2)=>{
        this.res1 = res1.data;
        this.res2 = res2.data;
      })) */
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false);

  }
}

// Vue.prototype.$axios = axios;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  border:none;
  background: none;
  text-decoration: underline;
}

</style>

