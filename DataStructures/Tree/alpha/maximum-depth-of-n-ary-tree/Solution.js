/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  let depth = 0;
  if (!root) return depth;

  for (let child of root.children) {
    depth = Math.max(depth, maxDepth(child));
  }

  return depth + 1;
};
