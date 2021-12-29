function deepClone(arg) {
  // 普通类型,直接返回
  if (typeof arg != 'object') {
    return arg
  }
  // 如果是空的，直接返回
  if (arg === null) {
    return arg;
  }
  // 如果是日期格式
  if (arg instanceof Date) { return new Date(arg) }
  // 如果是正则格式
  if (arg instanceof RegExp) {
    return new RegExp(arg)
  }
  const obj = arg instanceof Array ? [] : {};
  for (const key in arg) {
    if (arg.hasOwnProperty(key)) {
      obj[key] = typeof arg[key] == 'object' ? deepClone(arg[key]) : arg[key]
    }
  }
  return obj
}


console.log(deepClone(123))
console.log(deepClone({ a: { b: null } }))
console.log(deepClone({ a: { b: new Date() } }))
console.log(deepClone({ a: { b: /\d/ } }))