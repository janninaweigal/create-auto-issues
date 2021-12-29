console.log("1a.2a.3a".replace(/a/,'b'))
console.log("1a.2a.3a".replace(/a/g,'b'))

console.log(/a/i.exec('Ab'))

console.log(/world$/m.test('hello\nworld'))
console.log(/^world$/m.test('hello\nworld'))