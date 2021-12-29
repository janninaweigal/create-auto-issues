// redux
// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return arg => arg
//   }

//   if (funcs.length === 1) {
//     return funcs[0]
//   }

//   return funcs.reduce((a, b) => (...args) => a(b(...args)))
// }


// function compose(middware) {
//   return function () {
//     dispatch(0);
//     function dispatch(i) {
//       const fn = middware[i];
//       if (!fn) {
//         return null
//       }
//       fn(function next() {
//         dispatch(i+1)
//       })
//     }
//   }
// }

// 支持异步
function compose(middleware) {
  return async function () {
    let args = arguments
    await dispatch(0)
    async function dispatch(i) {
      const fn = middleware[i]
      if (!fn) return null
      await fn(function next() {
        dispatch(i + 1)
      }, ...args)
    }

  }
}
