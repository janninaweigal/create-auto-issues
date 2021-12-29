var fourSum = function (nums, target) {
  const len = nums.length;
  // 小于4，直接返回
  if (len < 4) {
    return [];
  }
  // 排序，使用二分法
  nums.sort((a, b) => a - b)
  let ans = []
  for (let j = 0; j < len - 3; j++) {
    // a 去重
    if (j > 0 && nums[j] == nums[j - 1]) {
      continue
    }
    // len -2
    // 3 个数，计算一次
    // 5 个数，计算二次
    for (let i = j + 1; i < len - 2; i++) {
      // b 去重
      if (i > j + 1 && nums[i] == nums[i - 1]) {
        continue
      }
      let l = i + 1, r = len - 1;
      while (l < r) {
        const sum = nums[j] + nums[i] + nums[l] + nums[r];
        if (sum == target) {
          ans.push([nums[j], nums[i], nums[l], nums[r]]);
          // c,d 去重
          while (l < r && nums[l] == nums[++l]);
          while (l < r && nums[r] == nums[--r]);
        } else if (sum < target) {
          // 小了，l需要++
          l++;
        } else {
          // 大了，r需要--
          r--;
        }
      }
    }
  }
  return ans;
};
console.log(fourSum([-3, -1, 0, 2, 4, 5],2))