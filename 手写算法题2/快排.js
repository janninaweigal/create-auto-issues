
// 快速排序的核心思想是分治：选择数组中某个数作为基数，通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数都比基数小，另外一部分的所有数都都比基数大，然后再按此方法对这两部分数据分别进行快速排序，循环递归，最终使整个数组变成有序。
// 他的平均时间复杂度是O(nlogn) ，最差时间复杂度是O(n ^ 2) 。他的核心思想是选定一个基准值x，将比x小的值放到左边，比x大的值放到右边。
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  // 基准
  const base = arr.splice(mid, 1)[0];
  // 定义左右数组
  const left = [];
  const right = [];
  // 比基准大的放右边，比基准小得放左边
  for (const num of arr) {
    if (num < base) {
      left.push(num)
    } else {
      right.push(num)
    }
  }
  // 递归
  return quickSort(left).concat([base], quickSort(right))
}

console.log(quickSort([6, 7, 8, 1, 3, 4, 6]))