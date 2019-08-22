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

Vue.prototype.$http = axios; //全局定义axios $http
// Vue.prototype.$EventBus = new Vue()  //全局定义事件总线$EventBus

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