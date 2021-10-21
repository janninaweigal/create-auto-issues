// https://blog.csdn.net/weixin_42565137/article/details/87667600
function Person() {

}

const person = new Person();

console.log(person.__proto__ == Person.prototype)

console.log(Person.prototype.constructor == Person)

console.log(Person.prototype.__proto__ == Object.prototype)

console.log(Person.prototype.__proto__.__proto__ == Object.prototype.__proto__)

console.log(null == Object.prototype.__proto__)

console.log(Object.prototype.constructor == Object)

// Person.prototype.constructor 指的就是 Person构造函数
console.log(Person.prototype.constructor.__proto__ == Function.prototype)

console.log(Function.prototype.constructor == Function)

console.log(Function.prototype.constructor.__proto__ == Function.prototype)

console.log(Function.prototype.__proto__ == Object.prototype)

console.log(Object.prototype.constructor.__proto__ == Function.prototype)