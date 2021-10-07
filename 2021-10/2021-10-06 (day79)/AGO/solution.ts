function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let plantedCount = 0;

  for (let i = 0; i < flowerbed.length && plantedCount < n; i += 1) {
    if (flowerbed[i] == 0 && // middle
      (i == 0 || flowerbed[i - 1] == 0) && // left checl
      (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) { // right check
      flowerbed[i] = 1;
      plantedCount += 1;
    }
  }

  return plantedCount === n;
};