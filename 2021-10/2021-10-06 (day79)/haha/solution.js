/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let times = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if(!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1]) {
            times++
            flowerbed.splice(i,1,1)
        }
    }
    return times >= n
};