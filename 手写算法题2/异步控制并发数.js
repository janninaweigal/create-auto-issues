function limitRequest(urls = [], limit = 3) {
  return new rPromise(resolve, rejct => {
    const len = urls.length;
    let count = 0;// 当前进行到第几个任务
    const start = async () => {
      const url = urls.shift();// 取出第一个任务
      if (url) {
        try {
          // 请求接口
          await axios.post(url)
          if (count == len - 1) {
            resolve()
          } else {
            ++count;
            start();
          }
        } catch (e) {
          if (count == len - 1) {
            resolve()
          } else {
            ++count;
            start();
          }
        }
      }
    }

    while (limit > 0) {
      start();
      limit -= 1;
    }
  })
}