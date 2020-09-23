// import {add,mul} from './mathFunction'
// import {height,age,name} from './info'
import Vue from 'vue'

console.log("height = " + height);
console.log("age = " + age);
console.log("name = " + name);

// require('./css/nomal.css');
// require('./less/special.less');
import './css/nomal.css'
import './less/special.less'
document.write('<h2>你好，李银河!</h2>')

//使用vue进行开发
new Vue({
    el:'#app',
    data:{
        massage:'hello webpack!'
    }
})