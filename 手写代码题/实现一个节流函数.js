// 在规定时间内只触发一次
function throttle(fn, delay) {
  let prev = Date.now()
  return function () {
    const context = this;
    const cur = Date.now();

    if (cur - prev >= delay) {
      // 执行
      fn.apply(context, arguments)
      prev = Date.now();
    }
  }
}