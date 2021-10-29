/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
  const nodes = edges.reduce((acc, [a, b]) => {
    const nodeA = acc[a] ?? [];
    acc[a] = [...nodeA, b];

    const nodeB = acc[b] ?? [];
    acc[b] = [...nodeB, a];

    return acc;
  }, {});

  const visited = new Set();
  function helper(num) {
    visited.add(num);
    const filtered = nodes[num]?.filter((n) => !visited.has(n)) ?? [];
    for (const n of filtered) {
      helper(n);
    }
  }

  helper(start);
  return visited.has(end);
};

/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/
 * 1971. Find if Path Exists in Graph
 *
 * Runtime: 2076 ms, faster than 5.09% of JavaScript online submissions for Find if Path Exists in Graph.
 * Memory Usage: 181 MB, less than 7.58% of JavaScript online submissions for Find if Path Exists in Graph.
 */
