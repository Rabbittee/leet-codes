/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

function hasChildren(grid) {
  const len = grid.length;
  const val = grid[0][0];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (val != grid[i][j]) return true;
    }
  }

  return false;
}

function split(grid) {
  return function ([fromX, toX, fromY, toY]) {
    const child = [];
    for (let i = fromX; i < toX; i++) {
      const row = [];

      for (let j = fromY; j < toY; j++) {
        row.push(grid[i][j]);
      }

      child.push(row);
    }
    return child;
  };
}

function node(val, isLeaf, children) {
  return new Node(val, isLeaf, ...children);
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
function construct(grid) {
  const len = grid.length;
  const isLeaf = !hasChildren(grid);

  const children = isLeaf
    ? [null, null, null, null]
    : [
        [0, len / 2, 0, len / 2],
        [0, len / 2, len / 2, len],
        [len / 2, len, 0, len / 2],
        [len / 2, len, len / 2, len],
      ]
        .map(split(grid))
        .map(construct);

  return node(grid[0][0], isLeaf, children);
}
