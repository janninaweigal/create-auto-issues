console.log(/\ban\b/.test('an apple'))
console.log(/an\b/.test('an apple'))
console.log(/\ban\b/.test('anapple'))
console.log(/an\b/.test('aanapple'))
console.log(/an\b/.test('aan apple'))

console.log(/\ban/.test('b an apple'))