// 思路：右边变量的原型存在左边变量的原型链上
function instanceOf(left, right) {
  let leftVal = left.__proto__
  let rightVal = right.prototype
  while (leftVal) {
    if (leftVal == rightVal) {
      return true;
    }

    leftVal = leftVal.__proto__
  }
  return false;
}

// const left = '1'
// console.log(instanceOf(left, Number))

const obj = {
  a: 1
}
console.log(instanceOf(obj, Object))