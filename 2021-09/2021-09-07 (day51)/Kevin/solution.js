/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const result = [];
    for (num of nums1) {
        const repeatNum = nums2.indexOf(num);
        if (repeatNum !== -1) {
            result.push(nums2.splice(repeatNum, 1));
        }
    }
    return result;
};
