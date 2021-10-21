
// Function.prototype.mybind = function (context) {
//   // 判断调用者是否是函数
//   if (typeof this !== 'function') {
//     throw new TypeError('not Function')
//   }
//   // 如果为空，则指向window
//   // context = context || window
//   // 获取函数
//   context.fn = this;
//   // 获取参数
//   const args = [...arguments].slice(1)

//   return function F() {
//     let result
//     if (this instanceof F) {
//       // 处理函数使用new情况
//       result = new context.fn(...args, ...arguments)
//     } else {
//       // 获取结果
//       result = context.fn(...args, ...arguments)
//     }
//     // 删除副作用
//     delete context.fn
//     return result
//   };
// }


Function.prototype.mybind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let _this = this
  let arg = [...arguments].slice(1)
  return function F() {
    // 处理函数使用new的情况  
    if (this instanceof F) {
      return new _this(...arg, ...arguments)
    } else {
      return _this.apply(context, arg.concat(...arguments))
    }
  }
}
// 测试
const obj = {
  name: 'linbin',
  getName: function () {
    return this.name + ' | ' + [...arguments].join();
  }
}
let newObj = {
  name: 'linliqin'
}
// const xx = obj.getName.mybind(newObj, '123')
// console.log(xx('love'))

// 使用new的情况
const xx = obj.getName.mybind(newObj, '123')
const result = new xx('love')
console.log(result.constructor('3333'))