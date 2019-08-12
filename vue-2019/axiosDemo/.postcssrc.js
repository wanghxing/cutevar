// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "postcss-pxtorem": {
            "rootValue": 16, //结果为： 设计稿元素尺寸 / 16， 比如元素宽320px, 最终页面会换算成 20 rem
            "propList": ["*"]
        },
        "autoprefixer": {}
    }
}