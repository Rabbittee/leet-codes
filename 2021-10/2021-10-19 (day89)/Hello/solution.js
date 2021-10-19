/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isUnivalTree(root) {
  if (!root) return true;

  if (root.left && root.val !== root.left.val) {
    return false;
  }

  if (root.right && root.val !== root.right.val) {
    return false;
  }

  return isUnivalTree(root.left) && isUnivalTree(root.right);
}
