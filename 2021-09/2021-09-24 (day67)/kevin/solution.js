/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    // early return 
    if(n<2) return n
    
    let nums = [0, 1]
    let max = -Infinity
    
    for(let i =0; i<=n; i++){
        // get `nums[i]` by `helper()` if `nums[i]` is not include in `nums`
        if(nums[i] === undefined) nums[i] = helper(i, nums)
        // compare current max number with `nums[i]` 
        max = Math.max(max, nums[i])
    }
    
    return max
};


function helper(n, nums = [0, 1]){
    if(nums[n] !== undefined) return nums[n]
    
    nums[n] = n%2 === 0
        ? helper(n/2, nums)
        : helper((n-1)/2, nums) + helper((n-1)/2 + 1, nums)
    
    return nums[n]
}