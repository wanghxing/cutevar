// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from './rem'
import axios from 'axios';

import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)

Vue.config.productionTip = false

// 配置Vue原型 （在任何组件中都可以正常使用axios）
Vue.prototype.$http = axios; //全局定义axios $http
// Vue.prototype.$EventBus = new Vue()  //全局定义事件总线$EventBus

// 引入mockjs
require('./mock.js')

// 全局自定义指令
Vue.directive("focus", {
    inserted: function(el) {
        el.focus();
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

// news里用,也可写在Newslist.vue里
// 常用的时间整理过滤器 getYMD
Vue.filter('getYMD', function(input) {
    return input.split(' ')[0];
})