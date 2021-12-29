// 基本使用
const a = Symbol('a');
// console.log(a)

// 使用场景，作为属性名
const b = {}
const key = Symbol('key')
const key1 = Symbol('key')
b[key] = 'content'
// console.log(b)
console.log(b[key])
// 每一个 Symbol 的值都是不相等的
console.log(b[key1])

// 写法3
Object.defineProperty(b, key1, { value: 'content2' })
console.log(b[key1])
b[key1] = 444// 不能修改原来值
console.log(b[key1])

// 判断boolean
console.log('是否boolean', 'content' == b[key])

// Symbol 值作为属性名时，该属性是公有属性不是私有属性,可以在类的外部访问
b["aaa"] = 111
// 如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到。
console.log(Object.keys(b)) // 不能这么使用,symbol无法出现
console.log(Object.getOwnPropertySymbols(b)) // 可以这么使用，但是知识输出 symbol 属性
console.log(Reflect.ownKeys(b)) // 输出所有，包括symbol和普通属性


// Symbol 的值是唯一的，所以不会出现相同值得常量，即可以保证 switch 按照代码预想的方式执行。
const COLOR_RED = Symbol("red");
const COLOR_YELLOW = Symbol("yellow");
const COLOR_BLUE = Symbol("blue");
function getName(color) {
  switch (color) {
    case COLOR_RED:
      return 'COLOR_RED'
    case COLOR_YELLOW:
      return 'COLOR_YELLOW'
    case COLOR_BLUE:
      return 'COLOR_BLUE'
  }
  return 'none'
}
console.log(getName(COLOR_BLUE))

// Symbol.for()
// 类似单例模式
let yellow = Symbol("Yellow");
let yellow1 = Symbol.for("Yellow");
yellow === yellow1;      // false

let yellow2 = Symbol.for("Yellow");
yellow1 === yellow2;     // true

// Symbol.keyFor()
const test = Symbol.for('test222')
const test1 = Symbol('text1111')
console.log(Symbol.keyFor(test))
console.log(Symbol.keyFor(test1)) // undefined，只能用于Symbol.for 声明的变量