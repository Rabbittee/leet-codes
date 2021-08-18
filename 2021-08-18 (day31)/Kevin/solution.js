/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const set = new Set()
    for(let i =0; i<nums.length; i++){
        if(set.has(nums[i])){
            set.delete(nums[i])
        }
        else {
            set.add(nums[i], null)
        }
    }
    return set.keys().next().value
};