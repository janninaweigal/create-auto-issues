class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach(sub => sub.update())
  }
}

// 递归遍历所有对象
function observe(obj) {
  // 判断类型
  if (!obj || typeof obj != object) {
    return
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

// 配套
function defineReactive(obj, key, val) {
  // 递归子属性
  observe(val)
  let dp = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      // 2.
      if (Dep.target) {
        dp.addSub(Dep.target)
      }
      return val;
    },
    set(newVal) {
      if (val != newVal) {
        val = newVal
        // 2.
        dp.update();
      }
    }
  })
}


Dep.target = null;

function update(value) {
  document.querySelector('div').innereText = value
}

// Watcher 类
class Watcher {
  constructor(obj, key, cb) {
    // 将Dep.target 指向自己
    // 然后 触发属性的getter 添加监听
    // 最后将 Dep.target 置空
    //  -----> 收集依赖
    Dep.target = this;
    this.cb = cb;
    this.obj = obj;
    this.key = key;
    this.value = obj[key];
    Dep.target = null;
  }
  update() {
    // 获取新值
    this.value = this.obj[this.key];
    // 调用
    this.cb(this.value)
  }
}

// 执行
let data = { name: 'yck' }
observe(data);
// 模拟解析到 {{name }} 触发的操作
new Watcher(data, 'name', update);
data.name = 'yyy'