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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  function helper(node) {
    if (!node) return;
    helper(node.left);
    arr.push(node.val);
    helper(node.right);
  }
  const arr = [];
  helper(root);

  const first = new TreeNode(arr.shift());
  let cur = first;
  while (arr.length) {
    cur.right = new TreeNode(arr.shift());
    cur = cur.right;
  }
  return first;
};

/**
 * https://leetcode.com/problems/increasing-order-search-tree/
 * 897. Increasing Order Search Tree
 *
 * Runtime: 68 ms, faster than 97.96% of JavaScript online submissions for Increasing Order Search Tree.
 * Memory Usage: 40.2 MB, less than 29.25% of JavaScript online submissions for Increasing Order Search Tree.
 */
