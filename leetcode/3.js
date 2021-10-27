var nextBeautifulNumber = function (n) {
  let start = n + 1;
  while (n > 0) {
    if (hasBalance(start, n)) {
      // 是否是平衡数
      return start
    }
    start++;
  }
  return start;
};

function hasBalance(num, n) {
  if (num < 10 && n == 1) {
    return false;
  }
  let map = new Map()
  while (num > 0) {
    const key = num % 10
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
    num = Math.floor(num / 10)
  }
  let flag = true
  for (let key of map.keys()) {
    if (key != map.get(key)) {
      flag = false;
      break;
    }
  }
  return flag
}
// console.log(nextBeautifulNumber(1))
// console.log(nextBeautifulNumber(1000))
console.log(nextBeautifulNumber(3000))