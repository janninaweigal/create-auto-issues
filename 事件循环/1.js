async function t() {
  console.log(0)
  await delay(1000)
  console.log(1)
}

const delay = (time) => {
  //原理 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(123)
    }, time)
  }).then(res => {
    console.log(res)
  })
}
t();