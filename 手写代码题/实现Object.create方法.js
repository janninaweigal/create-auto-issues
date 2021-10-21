// 将传入的对象作为原型
function create(obj) {
  function F() { }
  F.prototype = obj
  return new F();
}
// Object.create：创建的是空对象，在该对象上没有继承原型链的方法和属性
const obj = create({
  a: 1,
  b: 2
})
console.log(obj.a)