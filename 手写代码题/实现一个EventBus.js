// 组件通信，一个触发与监听的过程
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  // 监听事件
  addEventListener(type, listener) {
    if (!this.events.has(type)) {
      this.events.set(type, listener)
    }
  }

  // 触发事件
  emit(type) {
    const args = [...arguments].slice(1)
    const handle = this.events.get(type)
    handle.apply(this, args)
  }
}

// 测试
const emitter = new EventEmitter();
// 监听事件
emitter.addEventListener('add', (value, value2) => {
  console.log(value, value2)
})
// 触发
emitter.emit('add', 123, 4444)