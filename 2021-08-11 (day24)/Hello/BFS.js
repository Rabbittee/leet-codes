function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root, queue = [root.left, root.right]) {
  const left = queue.shift();
  const right = queue.shift();

  if (!left && !right) {
    return queue.length > 0 ? isSymmetric(root, queue) : true;
  }

  if (!left || !right || left.val !== right.val) return false;

  if (left.left || right.right || left.right || right.left) {
    queue.push(left.left, right.right, left.right, right.left);
  }

  return isSymmetric(root, queue);
}
