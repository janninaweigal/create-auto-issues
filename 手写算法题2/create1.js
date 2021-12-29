

function create(obj) {
  function f() { }
  f.prototype = obj
  return new f()
}
const a = { a: 123 }
const b = create(a)
b.a = 444
console.log(a)
console.log(b)