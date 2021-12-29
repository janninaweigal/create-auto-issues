var search = function (nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((r + l) / 2)
    console.log(mid, l, r)
    if (nums[mid] < target) {
      l = mid + 1
    } else if (nums[mid] > target) {
      r = mid - 1
    } else {
      return nums[mid]
    }
  }
  return -1;
};

search([-1, 0, 3, 5, 9, 12], 9)