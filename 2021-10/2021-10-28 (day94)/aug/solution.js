/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const [[a, b], [c, d]] = edges;

  if (a === c || a === d) return a;
  return b;
};

/**
 * https://leetcode.com/problems/find-center-of-star-graph/
 * 1791. Find Center of Star Graph
 *
 * Runtime: 108 ms, faster than 92.96% of JavaScript online submissions for Find Center of Star Graph.
 * Memory Usage: 54.2 MB, less than 56.69% of JavaScript online submissions for Find Center of Star Graph.Memory Usage: 54.3 MB, less than 50.18% of JavaScript online submissions for Find Center of Star Graph.
 */
