/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  if (!root) return [];

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}
