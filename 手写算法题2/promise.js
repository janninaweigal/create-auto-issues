class Promise {
  constructor(fn) {
    this.status = 'pending'
    this.result = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      if (this.status == 'pending') {
        this.status = 'fullfilled'
        this.result = value
      }
    }
    const reject = (value) => {
      if (this.status == 'pending') {
        this.status = 'rejected';
        this.reason = value
      }
    }

    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(fullfilled, rejcted) {
    switch (this.status) {
      case 'fullfilled':
        fullfilled(this.result)
        break;
      case 'rejected':
        rejcted(this.reason)
        break;
      default:
        break;
    }
  }
}


// 使用
new Promise(resolve => {
  resolve(111)
}).then(res => {
  console.log(res)
})