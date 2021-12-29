var numFriendRequests = function (ages) {
  //x 将不会向用户发送好友请求
  // 0.5 * ages[x] + 7 < ages[y] <= ages[x]

  // 根据公式 可得：14 <= ages[x]
  const n = ages.length;
  ages.sort((a, b) => {
    return a - b;
  })
  let left = 0, right = 0, ans = 0;
  for (const age of ages) {
    if (age < 15) {
      continue
    }
    while (ages[left] <= 0.5 * age + 7) {
      ++left;
    }
    while (right + 1 < n && ages[right + 1] <= age) {
      ++right;
    }
    ans += right - left;
  }
  return ans;
};

console.log(numFriendRequests([20, 30, 100, 110, 120]))