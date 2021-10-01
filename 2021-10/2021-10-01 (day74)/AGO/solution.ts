function allPathsSourceTarget(graph: number[][]): number[][] {
  return tracking(graph, 0, [0]);
};
function tracking(graph: number[][], index: number, path: number[]): number[][] {
  if (index === graph.length - 1) return [path];

  let prev = [...path];
  let result: number[][] = new Array();

  for (const i of graph[index]) {
    result = result.concat(tracking(graph, i, prev.concat(i)));
  }
  return result;
}