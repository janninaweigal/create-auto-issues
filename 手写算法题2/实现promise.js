class Promise {
  constructor(fn) {
    this.status = 'pending';
    this.result = undefined;
    this.reason = undefined;
    const resolve = value => {
      if (this.status == 'pending') {
        this.status = 'fullfilled'
        this.result = value;
      }
    }
    const reject = value => {
      if (this.status == 'pending') {
        this.status = 'rejected';
        this.reason = value
      }
    }
    // 执行函数
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFullfilled, onRejected) {
    switch (this.status) {
      case 'fullfilled':
        onFullfilled(this.result)
        break;
      case 'rejected':
        onRejected(this.reason)
        break;
    }
  }
}

new Promise((resolve, reject) => {

}).then(val => {

})