/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const stack1 = [root1];
  const stack2 = [root2];

  while (stack1.length > 0 && stack2.length > 0) {
    const leaf1 = getLeaf(stack1);
    const leaf2 = getLeaf(stack2);

    if (leaf1.val !== leaf2.val) return false;
  }

  return stack1.length === 0 && stack2.length === 0;
};

function getLeaf(stack) {
  let node = stack.pop();

  while (node.left || node.right) {
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
    node = stack.pop();
  }

  return node;
}

/**
 * https://leetcode.com/problems/leaf-similar-trees/
 * 872. Leaf-Similar Trees
 *
 * Runtime: 72 ms, faster than 94.35% of JavaScript online submissions for Leaf-Similar Trees.
 * Memory Usage: 40.6 MB, less than 53.04% of JavaScript online submissions for Leaf-Similar Trees.
 */
