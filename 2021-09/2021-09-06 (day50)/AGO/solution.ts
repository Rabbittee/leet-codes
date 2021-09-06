function majorityElement(nums: number[]): number {
    interface count {
        [key: number]: number;
    }
    
    let countMap = {};
    let majorLength = nums.length/2;
    
    for(let num of nums){
        if(!countMap[num]) countMap[num] = 0;
        countMap[num]+=1;
        if(countMap[num] > majorLength) return num;
    }
    return 0;
};