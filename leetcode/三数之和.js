var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  // 数目不够
  if (nums == null || len < 3) {
    return ans;
  }
  // 排序，以便于收缩数组
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    // 当前数字大于0，则三数之和肯定大于0
    if (nums[i] > 0) {
      break;
    }
    // 去重
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) {
        ans.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          // 去重
          l++;
        }
        while (l < r && nums[r] == nums[r - 1]) {
          // 去重
          r--;
        }
        // 下一个数
        l++;
        r--;
      } else if (sum < 0) {
        l++
      } else {
        r--;
      }
    }
  }
  return ans;
};


threeSum([-1, 1, 1, 0, 0, 4, 4, -4, 0])