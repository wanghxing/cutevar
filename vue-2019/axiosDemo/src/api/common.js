import axios from "axios"
import Vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// 响应拦截器
axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

// 封装axios的post请求
export function fetch_get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export function fetch_post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export default {
    JH_news_g(url, params) {
        return fetch_get(url, params = {});
    },
    JH_news(url, params) {
        return fetch_post(url, params = {});
    }
}