function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (!inorder.length) return;

  const node = preorder.shift();
  const index = inorder.indexOf(node);

  return new TreeNode(
    node,
    buildTree(preorder, inorder.slice(0, index)),
    buildTree(preorder, inorder.slice(index + 1))
  );
}
