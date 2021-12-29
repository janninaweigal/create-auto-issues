function instanceOf(prev, next) {
  let left = prev.__proto__;
  let right = next.prototype;
  while (true) {
    if (left == null) {
      break;
    }
    if (left == right) {
      return true;
    }
    left = left.__proto__
  }
  return false;
}