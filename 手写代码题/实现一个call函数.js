
Function.prototype.mycall = function (context) {
  // 判断调用者是否是函数
  if (typeof this !== 'function') {
    throw new TypeError('not Function')
  }
  // 如果为空，则指向window
  context = context || window
  // 获取函数
  context.fn = this;
  // 获取参数
  const args = [...arguments].slice(1)
  // 获取结果
  const result = context.fn(...args)
  // 删除副作用
  delete context.fn
  return result;
}

// 测试
const obj = {
  name: 'linbin',
  getName: function () {
    return this.name;
  }
}
let newObj = {
  name: 'linliqin'
}
const xx = obj.getName.mycall(newObj)
console.log(xx)