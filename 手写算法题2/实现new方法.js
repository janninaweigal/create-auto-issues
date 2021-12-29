// 创建一个新对象
// 链接到原型
// 绑定this
// 返回新对象

function createNew() {
  const obj = {};

  const constructor = [].shift.call(arguments)

  obj._proto__ == constructor.prototype;

  // constructor.apply   执行构造函数
  // 传入obj，绑定
  const result = constructor.apply(obj, arguments);

  return typeof result == 'object' ? result : obj;
}
