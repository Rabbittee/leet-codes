function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

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
