var matrixReshape = function (mat, r, c) {
  // 行
  const m = mat.length;
  // 列
  const n = mat[0].length;
  // 面积不相等，直接返回 原始矩阵
  if (m * n != r * c) {
    return mat;
  }
  const ans = new Array(r).fill(0).map(() => {
    return new Array(c).fill(0)
  })
  for (let x = 0; x < m * n; ++x) {
    // x/c  相当于换行了
    // x%c  对应行的下标
    // c  指的是要构成的 列数
    ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n]
  }
  return ans;
};

mat = [[1, 2], [3, 4]], r = 1, c = 4
matrixReshape(mat,r,c)