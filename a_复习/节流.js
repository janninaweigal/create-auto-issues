function throttle(fn, delay) {
  let prev = Date.now();
  return function () {
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(this, arguments)
      prev = Date.now();
    }
  }
}
function fn() {
  console.log('节流')
}
const obj = throttle(fn, 1000)

const timer = setInterval(() => {
  obj()
}, 1000);

setTimeout(() => {
  clearInterval(timer)
}, 5000);