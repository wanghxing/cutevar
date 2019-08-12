<template>
  <div class="hello">
    <h1 class="f404">404</h1>
    <h4>{{ msg }}</h4>
    <input class="search" type="text" placeholder="search">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Sorry,not found the page that you are looking for...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.f404 {
  font-size:40px;
}
.search {
  width:50%;
  height:30px;
  padding:5px 10px;
  border-radius:2px;
  outline:none;
  border:1px solid #ccc;
}
</style>
