// 箭头函数，没有arguments
function test01() {
  console.log(arguments)
}

const test02 = () => {
  console.log(arguments)
}

// const test03 = (arguments) => {
//   console.log(arguments)
// }

// test01(222)
// test02(111)
// const b = new test02(); // 错误，箭头函数不能作为构造函数，所以不能使用new
// console.log(b)
// test03()