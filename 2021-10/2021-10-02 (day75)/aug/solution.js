/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const res = new Set();

  function compose(tiles, str = '') {
    if (!tiles.length) return;

    for (let i = 0; i < tiles.length; i++) {
      const cur = str + tiles[i];

      // this might be unnecessary.
      if (!res.has(cur)) {
        res.add(cur);
        compose(tiles.substring(0, i) + tiles.substring(i + 1), cur);
      }
    }
  }

  compose(tiles);

  return res.size;
};

/**
 * https://leetcode.com/problems/letter-tile-possibilities/
 * 1079. Letter Tile Possibilities
 *
 * Runtime: 84 ms, faster than 80.18% of JavaScript online submissions for Letter Tile Possibilities.
 * Memory Usage: 44.5 MB, less than 63.06% of JavaScript online submissions for Letter Tile Possibilities.
 */
