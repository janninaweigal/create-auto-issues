var merge = function (intervals) {
  // 先排序
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  // [1,2]  [2,3]
  // [3,5]  [4,5]
  const res = [intervals[0]];

  for (let i = 1, len = intervals.length; i < len; i++) {
    if (res[res.length - 1][1] < intervals[i][0]) {
      res.push(intervals[i])
    } else {
      res[i - 1][1] = Math.max(res[i - 1][1], intervals[i][1])
    }
  }
  return res;
};

merge([[1, 3], [2, 6], [8, 10], [15, 18]])