/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1 = sort(nums1);
    nums2 = sort(nums2);
    let result = [];
    for (num of nums2) {
        const indexOf = binarySearch(num, nums1);
        if (indexOf !== -1) {
            result.push(nums1.splice(indexOf, 1));
        }
    }
    return result;
};

const sort = ary => ary.sort((a, b) => a - b);

function binarySearch(target, ary, start = 0, end = ary.length - 1) {
    if (ary.length === 0) return -1;
    const mid = start + Math.floor((end - start) / 2);

    if (ary[mid] === target) return mid;
    if (end === mid) return -1;

    if (ary[mid] > target) {
        return binarySearch(target, ary, start, mid);
    } else {
        return binarySearch(target, ary, mid + 1, end);
    }
}
