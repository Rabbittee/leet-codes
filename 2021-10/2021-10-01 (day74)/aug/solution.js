/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  return findPath(graph);
};

function findPath(graph, node = 0, arr = [], result = []) {
  if (node === graph.length - 1) {
    result.push([...arr, node]);
    return;
  }

  for (const target of graph[node]) {
    findPath(graph, target, [...arr, node], result);
  }

  return result;
}

/**
 * https://leetcode.com/problems/all-paths-from-source-to-target/
 * 797. All Paths From Source to Target
 *
 * Runtime: 116 ms, faster than 64.83% of JavaScript online submissions for All Paths From Source to Target.
 * Memory Usage: 48.3 MB, less than 12.41% of JavaScript online submissions for All Paths From Source to Target.
 */
