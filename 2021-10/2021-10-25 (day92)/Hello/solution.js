function inorder(fn, root) {
  let prev = undefined;

  function traverse(root) {
    if (!root) return;

    traverse(root.left);

    if (prev) {
      fn(prev, root);
    }

    prev = root;

    traverse(root.right);
  }

  traverse(root);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDiffInBST(root) {
  let diff = Infinity;

  inorder((prev, root) => {
    diff = Math.min(diff, root.val - prev.val);
  }, root);

  return diff;
}
