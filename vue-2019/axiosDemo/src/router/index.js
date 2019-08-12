import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Demo01 from '@/components/Demo01'
import Page01 from '@/views/Page01'

/* import Home from '@/containers/home/index'
import List from '@/containers/list/index'
import Detail from '@/containers/detail/index'
import Person from '@/containers/person/index' */

// 还有一种方法我们可以动态配置路由，来确定那些路由需要缓存哪些不需要缓存，这样的话就需要修改route文件下的index.js文件：
const Home = resolve => require(['@/containers/home/index'], resolve);
const List = resolve => require(['@/containers/list/index'], resolve);
const Detail = resolve => require(['@/containers/detail/index'], resolve);
const Person = resolve => require(['@/containers/person/index'], resolve);

import Count from '@/views/Count'
import Mdemo from '@/views/methodsandcomputed/methods'
import Cdemo from '@/views/methodsandcomputed/computed'

import componentTongxin from '@/views/tongxin/componentTongxin'
import bus from '@/views/tongxin/bus'
import bus2 from '@/views/tongxin/bus2'
import busER from '@/views/tongxin/busER'
import vmodel from '@/views/tongxin/vmodel'

// $emit的用法
import emitdemo from '@/views/emitdemo'



Vue.use(Router)

export default new Router({
    routes: [{
            // 内容在当前页显示 (本页我用于显示目录)
            path: '/',
            name: 'hello',
            component: Hello
        },
        {
            path: '/demo01',
            name: 'axios-demo',
            component: Demo01
        },
        {
            path: '/page01', //带参数 /page01/:id
            name: 'page01',
            component: Page01,
            // 嵌套路由 子路由 只列一下 不操作了
            /* children: [{
                    path: "router-a",
                    component: routerA
                },
                {
                    path: "router-b",
                    component: routerB
                },
                {
                    path: "router-c",
                    component: routerC
                }
            ] */
        },
        // 一个首页列表页详情页栗子
        {
            path: '/home',
            name: 'Home',
            component: Home
        }, {
            path: '/list',
            name: 'List',
            component: List
        }, {
            path: '/detail', // params方式：/detail/:id/:name
            name: 'Detail',
            component: Detail,
            meta: {
                keepAlive: true // 需要被缓存
            }
        }, {
            path: '/person',
            name: 'Person',
            component: Person
        },
        // vuex
        {
            path: '/vuex-count',
            name: 'Count',
            component: Count
        },
        // methods & props
        {
            path: '/methods-demo',
            name: 'mdemo',
            component: Mdemo
        },
        // computed
        {
            path: '/computed-demo',
            name: 'cdemo',
            component: Cdemo
        },
        // 父子组件通信
        {
            path: '/component-tongxin',
            name: 'componentTongxin',
            component: componentTongxin
        },
        // 非父子组件通信
        {
            path: '/bus',
            name: 'bus',
            component: bus
        },
        // 非父子组件通信2
        {
            path: '/bus2',
            name: 'bus2',
            component: bus2
        },
        // 非父子组件通信2 第二个例子
        {
            path: '/buser',
            name: 'buser',
            component: busER
        },
        // 在自定义组件上使用v-model
        {
            path: '/vmodel',
            name: 'vmodel',
            component: vmodel
        },
        // 这里插一段$emit的用法
        {
            path: '/emit-demo',
            name: 'emit-demo',
            component: emitdemo
        }
    ]
})