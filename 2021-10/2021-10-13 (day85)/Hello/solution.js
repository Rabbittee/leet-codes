/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root, sum = 0) {
  if (!root) return sum;

  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val;
  }

  return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}
