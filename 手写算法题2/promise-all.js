function all(promises) {
  const len = promises;
  let result = []
  let count = 0
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then(res => {
        result.push(res)
        count++
        if (count == len) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}


