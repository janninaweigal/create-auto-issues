var maxProfit = function (prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let profit = 0;
  for (const price of prices) {
    if (minPrice > price) {
      // 寻找到最小值
      minPrice = price
    } else if (price - minPrice > profit) {
      // 找到收益最多的
      profit = price - minPrice
    }
  }
  return profit
};

maxProfit([7, 1, 5, 3, 6, 4])