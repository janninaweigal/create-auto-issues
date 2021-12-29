
function maxRequest(fn, maxNum) {
  return new Promise((resolve, reject) => {
    function help(index) {
      Promise.resolve(fn()).then(value => {
        resolve(value)
      }).catch(err => {
        if (index > 1) {
          console.log('出错')
          help(index - 1)
        } else {
          reject(err)
        }
      })
    }
    help(maxNum)
  })
}


maxRequest(function () {
  return Promise.reject(11)
}, 3).then(res => {
  console.log(res)
})