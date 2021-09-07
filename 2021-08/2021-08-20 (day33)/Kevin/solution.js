/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    const set = new Set()
    let i = 0
    while(true){
        if(set.has(nums[i])) return nums[i] 
        set.add(nums[i])
        i++
    }
};