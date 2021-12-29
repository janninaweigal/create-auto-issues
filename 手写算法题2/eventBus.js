class EventBus {
  constructor() {
    this.map = new Map()
  }
  emit(name) {
    if (this.map.has(name)) {
      const args = [...arguments].slice(1)
      this.map.get(name).forEach(fn => {
        fn(...args)
      })
    }

  }
  on(name, fn) {
    if (this.map.has(name)) {
      this.map.get(name).push(fn)
    } else {
      this.map.set(name, [fn])
    }
  }
}


const bus = new EventBus();
bus.on('some', function (a) {
  console.log(a)
})

bus.emit('some', 111)