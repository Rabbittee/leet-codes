/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph, index = 0, path = [index], paths = []) {
  if (index === graph.length - 1) {
    paths.push(path);

    return paths;
  }

  for (const next of graph[index]) {
    allPathsSourceTarget(graph, next, path.concat(next), paths);
  }

  return paths;
}
