Function.prototype.myapply = function (context) {
  if (typeof this != 'function') {
    throw new TypeError('not function')
  }
  context = context || window;
  context.fn = this;
  const args = arguments[1]
  let result;
  if (args) {
    result = context.fn(...args)
  } else {
    result = context.fn()
  }
  delete context.fn;
  return result;
}


// 测试
const obj = {
  name: 'linbin',
  getName: function (ext) {
    return this.name + ' | ' + ext;
  }
}
let newObj = {
  name: 'linliqin'
}
const xx = obj.getName.myapply(newObj, ['love'])
console.log(xx)