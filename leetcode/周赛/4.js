/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.get(arr[i]).push(i)
    } else {
      map.set(arr[i], [i])
    }
  }
  this.map = map
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  const list = this.map.get(value)
  if (list != undefined) {
    const rIdx = getIdx(list, right);
    const lIdx = getIdx(list, left - 1);
    return rIdx - lIdx;
  }
  console.log(0)
  return 0;
};

function getIdx(list, t) {
  // t 是范围
  let l = 0, r = list.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) >> 1);
    let v = list[mid];
    if (v == t) {
      return mid;
    } else if (v < t) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return r;
}
const rangeFreqQuery = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]);
rangeFreqQuery.query(1, 2, 4); // 返回 1 。4 在子数组 [33, 4] 中出现 1 次。
rangeFreqQuery.query(0, 11, 33);


// const rangeFreqQuery = new RangeFreqQuery([1, 1, 1, 2, 2]);
// rangeFreqQuery.query(0, 1, 2);
// rangeFreqQuery.query(0, 2, 1);
// rangeFreqQuery.query(3, 3, 2);
// rangeFreqQuery.query(2, 2, 1);