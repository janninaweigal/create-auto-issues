// 没传this，就是window
// 参数 不是数组
Function.prototype.myCall = function (context) {
  if (typeof this != 'function') {
    throw new TypeError('不是函数')
  }
  context = context || window;
  // 创建临时函数
  context.fn = this;
  // 获取参数
  const args = [...arguments].slice(1);
  // 获取结果
  const result = context.fn(...args);
  // 删除临时函数
  delete context.fn;
  return result;
}


// 没传this，就是window
// 参数是数组
Function.prototype.myApply = function (context) {
  if (typeof this != 'function') {
    throw new TypeError('不是函数')
  }
  context = context || window;
  // 创建临时函数
  context.fn = this;

  // 获取结果(是否传了参数的判断)
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  // 删除临时函数
  delete context.fn;
  return result;
}

// 返回函数
// 参数不是是数组
Function.prototype.myBind = function (context) {
  if (typeof this != 'function') {
    throw new TypeError('不是函数')
  }
  const that = this;
  // 参数
  const args = [...arguments].slice(1);

  return function F() {
    // 处理函数使用new的情况
    if (this instanceof F) {
      return new that(...args, ...arguments)
    } else {
      return that.apply(context, args.concat(...arguments))
    }
  }
}

function add(name) {
  console.log(name)
}
const args = {
  name: '林斌'
}

const obj = add.myBind(args, '111')
obj()
const newObj = new obj(333);
console.log(newObj)
