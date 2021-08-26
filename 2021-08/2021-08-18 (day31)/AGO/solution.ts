function singleNumber(nums: number[]): number {
    let result:number;
    nums.forEach(e => {
        result ^= e;
    });
    return result;
};