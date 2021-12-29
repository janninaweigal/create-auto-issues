// 仅跟着b 的a
// 不能匹配括号里的内容
console.log(/a(?=b)/.exec('ab'))
console.log(/a(?=b)/.exec('ac'))

// 仅不跟着b 的a
console.log(/a(?!b)/.test('ab'))//false
console.log(/a(?!b)/.test('ac'))//true