/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const stack = [];
  const result = [];

  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
      continue;
    }

    if (!stack.length) return result;

    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
}
