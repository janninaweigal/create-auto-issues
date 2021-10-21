class Promise {
  constructor(fn) {
    // pending  fulfilled rejected
    this.status = 'pending'
    this.value = undefined

    // 成功的时候
    const resolve = (value) => {
      if (this.status == 'pending') {
        this.state = 'fulfilled'
        this.value = value;
      }
    }

    // 失败的时候
    const reject = (value) => {
      if (this.status == 'pending') {
        this.state = 'rejected'
        this.value = value
      }
    }

    // 自动执行函数
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    switch (this.state) {
      case 'fulfilled':
        onFulfilled(this.value);
        break;
      case 'rejected':
        onRejected && onRejected(this.value);
        break;
      default: break;
    }
    return this;
  }
}

// 测试
new Promise((resolve, rejected) => {
  rejected(3)
  resolve(3)
}).then(value => {
  console.log(value)
}).then(value => {
  console.log(value)
})