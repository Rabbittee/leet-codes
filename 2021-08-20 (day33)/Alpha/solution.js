/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let tmp = new Set();
    for(let num of nums) {
        if(tmp.has(num)) {
            return num;
        } else {
            tmp.add(num)
        }
    }
};