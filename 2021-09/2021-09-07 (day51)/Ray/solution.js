/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let answer = [];
    let flag = null;
    
    nums1.forEach((item1) => {
        if (flag!== null) {
            nums2 = nums2.filter((item, index) => index !== flag);
            flag = null;
        }
        for (let j = 0 ; j < nums2.length ; j++) {
            if (item1 === nums2[j]) {
                flag = j;
                answer.push(item1);
                break;
            }
        }
    })
    return answer;
};