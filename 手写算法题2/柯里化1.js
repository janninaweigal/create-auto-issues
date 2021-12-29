// ** 第一种：固定传入参数，参数够了才执行 **

function curry(fn, ...saveArg) {

  // saveArg 后面传入得值
  return function (...args) {
    const all = [...saveArg, ...args];
    if (fn.length <= all.length) {
      return fn(...all)
    } else {
      return curry(fn, ...all)
    }
  }
}

const sum = (a, b) => {
  return a + b;
}

const plus = curry(sum)

console.log(plus(1)(2))