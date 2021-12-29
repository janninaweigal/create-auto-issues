const obj = {
  a: 1,
  b: 2
}
const proxy = new Proxy(obj, {
  get: function (target, key) {
    return target[key]
  },
  set: function (target, key, value) {
    target[key] = value
  }
})

// 正确写法
proxy.a = 123
console.log(obj)
// 错误写法
// obj.a = 123
// console.log(proxy)