
function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {};
  for (const key in obj) {
    // 判断对象是否包含特定的自身(非继承)属性。
    if (obj.hasOwnProperty(key)) {
      copy[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return copy;
}