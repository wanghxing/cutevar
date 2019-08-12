import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import router01 from '@/components/router01'
import router02 from '@/components/router02'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
    // mode: 'history',  /*  9-1. mode的设置  */
    routes: [{
        path: '/',
        name: 'HelloWorld',
        components: {
            default: HelloWorld,
            left: router01,
            right: router02
        }
    }, {
        path: '/hi',
        name: 'Hi',
        components: {
            default: Hi,
            left: router02,
            right: router01
        },
        redirect: '/hi/hi1', // 点击Hi页面时，页面跳转到Hi1, redirect起到重定向path的作用
        children: [{
                path: 'hi1',
                name: 'Hi1',
                component: Hi1,
                alias: 'jspang',
                /* meta: {
                    keepAlive: true // 设置缓存 需要被缓存
                } */
            },
            {
                path: 'hi2',
                name: 'Hi2',
                component: Hi2,
                /* meta: {
                    keepAlive: false // 设置缓存 不需要被缓存
                } */
            },
        ]

    }, {
        // path: '/params/:newsId/:newsTitle',
        path: '/params/:newsId(\\d+)/:newsTitle', // 路径里加正则 除数字之外接收不到
        component: Params,
        beforeEnter: (to, from, next) => {
            console.log(to),
                console.log(from),
                next(); //括号内，true或者false或者{ path: '/' }
        }
    }, {
        path: '/goback',
        redirect: '/'
    }, {
        path: '/goParams/:newsId(\\d+)/:newsTitle',
        redirect: '/params/:newsId(\\d+)/:newsTitle'
    }, {
        path: '*', // 9-2. 404页面的设置
        component: Error
    }]
})