const {add, mul} = require('./util.js') //commonJS
import {add2,mul2} from './info.js'     //ES6

console.log('commonJS => sum = ' + add(10,20));
console.log('commonJS => mul = ' + mul(30,80));

console.log('commonJS => sum2 = ' + add2(80,20));
console.log('commonJS => mul2 = ' + mul2(50,80));
