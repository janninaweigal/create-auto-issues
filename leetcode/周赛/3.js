var kMirror = function (k, n) {
  let res = 0;

  for (let i = 1; n > 0; i++) {
    if (isPalindrome(i, k)) {
      console.log(i)
      res += i;
      n--
    }
  }
  console.log('====')
  console.log(res)
  return res;
};

//
function isPalindrome(x, k) {
  if (x < 0 || (x !== 0 && x % k === 0)) {
    return false
  } else if (0 <= x && x < k) {
    return true
  }
  let num = 0
  while (x !== 0) {
    num = x % k + num * 10
    x = Math.floor(x / k)
  }
  return Array.from(num + '').reverse().join('') === num + ''
}
// kMirror(2, 5)
kMirror(3, 7)
// kMirror(7, 17)