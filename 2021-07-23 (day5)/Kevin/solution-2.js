// Big O(log n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // 頭
    let start = 0;
    // 尾
    let end = nums.length;
    // 中間
    let mid;

    // 先判斷是否在頭尾，是則回傳頭或尾
    if (nums[0] >= target) return 0;
    if (nums[end] <= target) return end + 1;

    // * 原陣列對切，比大小，找到可以回傳為止
    while (start < end) {
        // * 取中間值，(無條件捨去法)
        mid = start + Math.floor((end - start) / 2);
        // * 因為取中間值是無條件捨去法，所以當 `start === mid`，代表傳入值在現在比對的兩個位置中間
        if (start === mid) {
            // * 回傳比該數大的 index => `end` (此時 start + 1 = mid)
            return end;
        }
        // * 代表陣列中有與傳入目標相同的數字
        if (nums[mid] === target) {
            // * 回傳該數 index => `mid`
            return mid;
        }
        if (nums[mid] > target) {
            // * 代表要往陣列左邊找
            end = mid;
        }
        if (nums[mid] < target) {
            // * 代表要往陣列右邊找
            start = mid;
        }
    }
};
