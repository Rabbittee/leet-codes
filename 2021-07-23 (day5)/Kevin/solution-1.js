// Big O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // * 判斷是不是放頭尾，是則回傳頭或尾
    if (nums[0] > target) return 0;
    if (nums[nums.length - 1] < target) return nums.length;

    // * 跑迴圈判斷該放在哪邊
    for (let i = 0; i < nums.length; i++) {
        // * 與現在位置的值相同則回傳 => 現在位置 `i`
        if (nums[i] === target) {
            return i;
        }
        // * 比現在位置的值大，但比下一個位置的值小，回傳 => 下一個位置 `i+1`
        if (nums[i] < target && nums[i + 1] > target) {
            return i + 1;
        }
    }
};
