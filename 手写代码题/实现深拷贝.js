function deepClone(obj) {
  if (typeof obj != 'object') {
    return obj
  }
  let res = obj instanceof Array ? [] : {}
  for (let i in obj) {
    // 判断对象是否包含特定的自身(非继承)属性
    if (obj.hasOwnProperty(i)) {
      res[i] = typeof obj[i] == 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return res;
}

const obj = {
  name: 'linbim',
  content: {
    a: 1,
    b: 2
  }
}
const newObj = deepClone(obj)
obj.content.a = 1111
console.log(obj, newObj)