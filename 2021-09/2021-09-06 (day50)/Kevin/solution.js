/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = {};

    nums.forEach(num => {
        if (!map[num]) {
            map[num] = 1;
        } else {
            map[num] += 1;
        }
    });

    let maxKey = null;
    for (let key in map) {
        maxKey = map[key] > (map[maxKey] || 0) ? key : maxKey;
    }
    return maxKey;
};
