function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  return isMirror(root.left, root.right);
}

function isMirror(left, right) {
  if (!left && !right) return true;

  if (!left || !right || left.val !== right.val) return false;

  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}
