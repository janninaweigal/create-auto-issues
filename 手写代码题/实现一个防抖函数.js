function debounce(fn, delay) {
  let time = null;
  // 
  return function () {
    const args = arguments;
    const that = this;
    clearTimeout(time)
    time = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}

function fn() {
  console.log('防抖')
}

// const xx = debounce(fn, 1000)
// xx()
// xx()
// xx()
// xx()
// xx()