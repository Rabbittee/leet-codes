function getMaximumGenerated(n: number): number {
    if(n == 0) return 0;
    
    let max = 1;
    let nums = [0, 1];
    
    for(let i = 2;i <= n; i += 1 ){
        const half = Math.trunc(i / 2);
        nums[i] = i % 2 == 0 ? nums[half] : nums[half] + nums[half + 1];
        max = Math.max(max, nums[i]);
    }
    return max;
};