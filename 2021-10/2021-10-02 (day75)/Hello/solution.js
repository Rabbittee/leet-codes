function combination(rest, active = "", results = new Set()) {
  if (!rest.length) {
    active && results.add(active);

    return [];
  }

  combination(rest.slice(1), active.concat(rest[0]), results);
  combination(rest.slice(1), active, results);

  return [...results];
}

const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);

const countBy = (arr) => (a) => arr.filter((b) => a === b).length;

const repetition = (arr) => [...new Set(arr)].map(countBy(arr));

const permutation = (n, repetition) =>
  factorial(n) / repetition.map(factorial).reduce(Math.imul);

/**
 * @param {string} tiles
 * @return {number}
 */
function numTilePossibilities(tiles) {
  tiles = Array.from(tiles).sort().join("");

  return combination(tiles).reduce(
    (sum, item) => sum + permutation(item.length, repetition(Array.from(item))),
    0
  );
}
