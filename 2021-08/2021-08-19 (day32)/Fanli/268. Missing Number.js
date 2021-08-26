function missingNumber(nums) {
    return (((nums.length+1)/2) * nums.length) - nums.reduce((a,b)=>a+b)
}