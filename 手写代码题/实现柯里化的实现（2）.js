// 柯里化函数的定义：将多参数的函数转换成单参数的形式
// 实现的原理：利用闭包原理在内部形成一个不销毁的作用域，将需要预先处理内容都存储在这个不销毁的作用域中，并且返回一个最少参数函数。

// 第二种：不固定传入参数，随时执行
function curry(fn, ...saveArg) {
  return function (...args) {
    if (args.length == 0) {
      return fn(saveArg)
    } else {
      return curry(fn, ...saveArg, ...args)
    }
  }
}


let sum = arr => {
  return arr.reduce((a, b) => {
    return a + b;
  })
}

var sumPlus = curry(sum)
console.log(sumPlus(1, 2, 3, 4)())
console.log(sumPlus(1)(2)(3)(4)())
console.log(sumPlus(1, 2)(3)(4)())
console.log(sumPlus(1, 2, 3)(4)())