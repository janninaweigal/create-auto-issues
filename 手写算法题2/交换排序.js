function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 找出最小值的索引
    let minInx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minInx] > arr[j]) {
        minInx = j
      }
    }
    // 是否最小值 跟当前索引一样，不是则交换
    if (minInx != i) {
      [arr[minInx], arr[i]] = [arr[i], arr[minInx]]
    }
  }
  return arr;
}

console.log(sort([6, 4, 77, 1, 5, 6]))