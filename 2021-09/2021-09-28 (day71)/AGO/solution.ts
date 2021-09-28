function arrayPairSum(nums: number[]): number {
    let result = 0;
    
    nums.sort((a,b) => a-b);
    while(nums.length != 0){
        result += Math.min(nums.shift(), nums.shift());     
    }
    return result;
};