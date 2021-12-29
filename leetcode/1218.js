var longestSubsequence = function (arr, difference) {
  let res = 0
  let map = new Map();
  for (let i = 0, len = arr.length; i < len; i++) {
    map.set(arr[i], (map.get(arr[i] - difference) || 0) + 1)
    res = Math.max(res, map.get(arr[i]))
  }
  return res;
};
// console.log(longestSubsequence([1, 2, 3, 4], 1))
// console.log(longestSubsequence([1, 3, 5, 7], 1))

console.log(longestSubsequence([1, 3, 5, 7], 2))