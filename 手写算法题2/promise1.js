console.log(1)
setTimeout(() => {
  console.log(7)
  Promise.resolve(9).then(res => {
    console.log(res)
  })
})

new Promise(resolve => {
  console.log(4)
  resolve(5)
}).then(res => {
  console.log(res)
})

setTimeout(() => {
  console.log(6)
});
console.log(8)