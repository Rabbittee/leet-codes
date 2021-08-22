/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let step = 0;
    while (nums.length > 1) {
        // * 切掉!
        nums = nums.slice(getCurrentMax(nums));
        step++;
    }
    return step;

    function getCurrentMax(array) {
        // * 如果最大步數直接到尾端就直接回傳該步數
        if (array[0] >= array.length - 1) return array[0];
        let [maxStep, maxJumpIndex] = [0, 0];

        // * i = 1 是為了可以至少前進一格
        for (let i = 0; i < array[0]; i++) {
            // * `>=` 代表得到的最遠距離都相等時，要取離初始位置最遠的那個位置
            if (array[i + 1] + i >= maxStep) {
                maxStep = array[i + 1] + i;
                maxJumpIndex = i + 1;
            }
        }
        // * 回傳最遠的那個 index
        return maxJumpIndex;
    }
};
