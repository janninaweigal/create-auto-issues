function debounce(fn, delay) {
  let time = null;
  return function () {
    clearTimeout(time)
    time = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}


function sleep() {
  console.log(111)
}

const fn = debounce(sleep, 3000)

fn()
fn()
fn()
fn()
fn()
fn()