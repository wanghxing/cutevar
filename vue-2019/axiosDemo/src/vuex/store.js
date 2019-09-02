import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 设置属性
// 1. 现在我们store.js文件里增加一个常量对象。
const state = {
    count: 1,
    count2: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ]
}

// 改变属性状态
// 4. 在store.js文件中加入两个改变state的方法。
const mutations = {
    add(state) {
        state.count++;
    },
    reduce(state) {
        state.count--;
    },
    incrementBy(state, payload) {
        state.count += payload.amount
    },
    reduceBy(state, n) {
        state.count -= n;
    }
}

// 获取属性的状态
const getters = {
    count2: function(state) {
        return state.count2 += 100;
    },
    doneTodos: state => {
        return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    }
}

// 应用mutations
const actions = {
    /* increment(context) {
        context.commit('increment')
    }, */
    /* increment(commit) {
        commit('increment')
    }, */
    incrementAsync({ commit }) {
        setTimeout(() => {
            commit('increment')
        }, 1000)
    },
    actionA({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('someMutation')
                resolve()
            }, 1000)
        })
    },
    actionB({ dispatch, commit }) {
        return dispatch('actionA').then(() => {
            commit('someOtherMutation')
        })
    },
    addAction(context) {
        context.commit('add', 10)
    },
    reduceAction({ commit }) {
        // commit('reduce')
        setTimeOut(() => {
            commit('reduce')
        }, 3000);
        console.log('我比reduce提前执行');
    }
}

// 2. 用export default 封装代码，让外部可以引用
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})