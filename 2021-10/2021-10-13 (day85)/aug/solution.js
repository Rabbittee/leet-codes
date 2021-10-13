/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  const queue = [root];
  let sum = 0;

  while (queue.length) {
    const node = queue.shift();
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    } else {
      node.left && queue.push(node.left);
    }
    node.right && queue.push(node.right);
  }

  return sum;
};

/**
 * https://leetcode.com/problems/sum-of-left-leaves/
 * 404. Sum of Left Leaves
 *
 * Runtime: 64 ms, faster than 99.61% of JavaScript online submissions for Sum of Left Leaves.
 * Memory Usage: 40.7 MB, less than 54.47% of JavaScript online submissions for Sum of Left Leaves.
 */
