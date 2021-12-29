function throttle(fn, delay) {
  let cur = Date.now();
  return function () {
    const last = Date.now();
    if (last - cur >= delay) {
      fn.apply(this, arguments)
      cur = Date.now();
    }
  }
}