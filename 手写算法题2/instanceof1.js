// 思路：右边变量的原型存在左边变量的原型链上
function instance(l, r) {
  let left = l.__proto__;
  const right = r.prototype;
  while (true) {
    if (left == null) {
      break;
    }
    if (left == right) {
      return true;
    }
    left = left.__proto__
  }
  return false;
}
const a = 123
console.log(instance(a, Number))
