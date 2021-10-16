/**
 * @param {TreeNode} root
 * @return {Generator}
 */
function* traverse(root) {
  if (!root.left && !root.right) {
    yield root.val;
  }

  if (root.left) yield* traverse(root.left);
  if (root.right) yield* traverse(root.right);
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2) {
  const gen1 = traverse(root1);
  const gen2 = traverse(root2);

  let item1 = gen1.next();
  let item2 = gen2.next();

  while (!item1.done && !item2.done) {
    if (item1.value !== item2.value) return false;

    item1 = gen1.next();
    item2 = gen2.next();
  }

  return item1.done && item2.done;
}
