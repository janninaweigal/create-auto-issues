function throttle(fn, delay) {
  let pre = Date.now();
  return function () {
    const cur = Date.now();
    if (cur - pre >= delay) {
      fn.apply(this, arguments)
      pre = Date.now()
    }
  }
}

function sleep() {
  console.log(11111)
}

const fn = throttle(sleep, 2000)
fn();
fn();
fn();
fn();
fn();
fn();