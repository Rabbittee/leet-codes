function missingNumber(nums) {
    let sum = 0,res = 0
    const len = nums.length
    for (let i = 0; i < len; i++) {
        sum += nums[i]
    }
    res = (((len+1)/2) * len) - sum
    return res
}