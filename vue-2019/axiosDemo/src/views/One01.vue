<template>
  <div class="container">
    {{msg}}
    <ul>
        <li v-for="(overview, oIdx) in overviews" :key="oIdx">{{overview.code}}</li>
        <span>-----</span>
        <li v-for="(item, idx) in items" :key="idx">{{item.MeterNo}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name:'one01',
    data(){
      return {
        msg: '123',
        overviews:[],
        items:[
          {MeterNo: "50005445",  Longitude: "110.457323"},
          {MeterNo: "50005445",Longitude: "110.457323"}
        ]
      }
    },
    methods:{
      getData () {
        var self = this;
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(function (response) {
            console.log(response.data)
            self.overviews=response.data.bpi;
          })
          .catch(function (error) {
            console.log(error);
            this.errored = true
          })
      }
    },
    mounted () {this.getData();}
  }
</script>
