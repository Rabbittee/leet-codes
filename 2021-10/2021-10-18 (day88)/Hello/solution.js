/**
 * @param {TreeNode} root
 * @return {number}
 */
function findTilt(root) {
  let sum = 0;

  function traverse(root) {
    if (!root) return 0;

    const left = traverse(root.left);
    const right = traverse(root.right);

    sum += Math.abs(left - right);

    return root.val + left + right;
  }

  traverse(root);

  return sum;
}
