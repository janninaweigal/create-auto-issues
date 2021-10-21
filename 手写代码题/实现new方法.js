// 实现new方法
// return new constructor(arguments)
function createNew() {
  // 创建一个空对象
  const obj = {}
  // 找出构造函数
  const constructor = [].shift.call(arguments)
  // 原型链绑定(链接到原型)
  obj.__proto__ = constructor.prototype
  // 绑定 this
  const result = constructor.apply(obj, arguments)
  // 返回新对象
  return typeof result == 'object' ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  // typeof result == 'object' ? result : obj;
  return {
    name: '11',
    age: '22'
  }
}


const obj = createNew(Person, 'linbin', '25')
console.log(obj.name)