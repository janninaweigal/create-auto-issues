var inorderTraversal = function (root) {

  let res = []
  const inorder = (root) => {
    if (root == null) {
      return;
    }
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res;
};


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
const node = new TreeNode(1)
const node1 = new TreeNode(2)
const node2 = new TreeNode(3)

node.right = node1;
node1.left = node2


console.log(inorderTraversal(node))