

function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    // 保留当前的数值
    const target = arr[j];
    // 判断之前的数是否有大于当前数值，有则交换，没有退出
    while (j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j - 1];
      j--
    }
    // 把最小值赋值
    arr[j] = target
  }
  return arr;
}

sort([4, 6, 7, 1, 12, 6])