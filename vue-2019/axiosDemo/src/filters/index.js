import Vue from 'vue'

Vue.filter('timestampFormat', function(time, format) {
    var date = new Date(time)
    var map = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var key in map) {
        if (new RegExp(`(${key})`).test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? map[key] : numHelper(map[key]))
        }
    }
    return format
})

function numHelper(num) {
    if (num < 10) {
        return '0' + num
    } else {
        return num + ''
    }
}