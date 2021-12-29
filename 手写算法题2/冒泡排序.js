// 冒泡/排序
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // 从第一个元素开始，比较相邻的两个元素，前者大则交换
    // len-i-1 , 获得后续数组遍历的范围
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr;
}


//测试
console.log(bubbleSort([2, 3, 1, 5, 4])) // [1, 2, 3, 4, 5]