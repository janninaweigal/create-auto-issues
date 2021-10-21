// 柯里化函数的定义：将多参数的函数转换成单参数的形式
// 实现的原理：利用闭包原理在内部形成一个不销毁的作用域，将需要预先处理内容都存储在这个不销毁的作用域中，并且返回一个最少参数函数。

// 第一种：固定传入参数，参数够了才执行
// 柯里化函数，返回一个被处理过的函数
function curry(fn, ...saveArg) {
  // 记录已有参数
  // const saveArg = [...arguments].slice(1)
  return function (...curArg) {
    // 接受的新参数
    // const curArg = [...arguments]
    let all = [...saveArg, ...curArg]
    if (fn.length <= all.length) {
      // 如果参数够了的话，直接执行
      return fn(...all)
    } else {
      return curry(fn, ...all)
    }
  }
}

let sum = (a, b, c, d) => {
  return a + b + c + d;
}
var sumPlus = curry(sum)
console.log(sumPlus(1, 2, 3, 4))
console.log(sumPlus(1)(2)(3)(4))
console.log(sumPlus(1, 2)(3)(4))
console.log(sumPlus(1, 2, 3)(4))
