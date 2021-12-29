// 目标者
class Subject {
  constructor(name) {
    this.name = name;
    this.observers = [];
  }
  // 添加 订阅者
  add(observer) {
    this.observers.push(observer)
  }
  // 通知
  notify() {
    this.observers.forEach(o => o.update())
  }

}

// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }
  // 触发的回调
  update() {
    console.log(`${this.name}，更新了！`)
  }
}

const sub = new Subject('目标者')

const ob1 = new Observer('观察者1');
const ob2 = new Observer('观察者2');
sub.add(ob1);
sub.add(ob2);

sub.notify()