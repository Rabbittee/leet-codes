const { max, floor } = Math;

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n, cursor = 0) {
  if (cursor >= flowerbed.length) return n <= 0;

  const canPlace =
    flowerbed[cursor] === 0 && !flowerbed[cursor - 1] && !flowerbed[cursor + 1];

  if (canPlace) {
    flowerbed[cursor] = 1;
    n -= 1;
  }

  return n > 0 ? canPlaceFlowers(flowerbed, n, cursor + 1) : true;
}
