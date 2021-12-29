var merge = function (nums1, m, nums2, n) {
  let maxLen = m + n

  let p = m - 1
  let q = n - 1

  while (p >= 0 || q >= 0) {
    let temp;
    if (p == -1) {
      temp = nums2[q--]
    } else if (q == -1) {
      temp = nums1[p--]
    } else if (nums2[q] > nums1[p]) {
      temp = nums2[q--]
    } else {
      temp = nums1[p--]
    }
    nums1[--maxLen] = temp
  }
};
// const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// console.log(merge(nums1, m, nums2, n))

const nums1 = [0], m = 0, nums2 = [1], n = 1
console.log(merge(nums1, m, nums2, n))