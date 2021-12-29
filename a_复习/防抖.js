
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

function fn() {
  console.log('防抖')
}
const obj = debounce(fn, 1000)
obj()
obj()
obj()
obj()
