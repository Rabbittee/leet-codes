/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root, ans = []) {
  if (!root) return [];

  ans.push(root.val);

  for (const child of root.children) {
    preorder(child, ans);
  }

  return ans;
};

/**
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * 589. N-ary Tree Preorder Traversal
 *
 * Runtime: 92 ms, faster than 82.13% of JavaScript online submissions for N-ary Tree Preorder Traversal.
 * Memory Usage: 42.3 MB, less than 51.45% of JavaScript online submissions for N-ary Tree Preorder Traversal.
 */
