
var buildTree = function (preorder, inorder) {
  // todo 优化点,可以先把inorder弄成索引map
  const m = preorder.length;
  const n = inorder.length;
  return build(preorder, 0, m - 1, inorder, 0, n - 1)
};


// 主要用到的方法

function build(preorder, pLeft, pRight, inorder, inLeft, inRight) {
  if (pRight < pLeft || inRight < inLeft) {
    return null;
  }
  const rootVal = preorder[pLeft];
  // 查找出pIndex
  const pIndex = inorder.indexOf(rootVal);
  // 构建root
  const root = new TreeNode(rootVal)
  // 递归构造左右子树
  root.left = build(
    preorder,
    pLeft + 1,
    pIndex - inLeft + pLeft,
    inorder,
    inLeft,
    pIndex - 1
  )
  root.right = build(
    preorder,
    pIndex - inLeft + pLeft + 1,
    pRight,
    inorder,
    pIndex + 1,
    inRight
  )
  return root;
}
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


console.log(buildTree([1, 2, 3], [2, 3, 1]))

// const node = new TreeNode(1)
// const node2 = new TreeNode(2)
// const node3 = new TreeNode(3)
// const node4 = new TreeNode(4)

// node.left = node2
// node.right = node3

// node3.left = node4

// console.log(node.length)
