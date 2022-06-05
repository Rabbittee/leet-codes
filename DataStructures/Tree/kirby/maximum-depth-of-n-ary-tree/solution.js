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
function maxDepth(root) {
  if (!root) return 0;

  let depth = 1;

  for (const child of root.children) {
    depth = Math.max(depth, maxDepth(child) + 1);
  }

  return depth;
}
