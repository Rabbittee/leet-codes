/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    // This problem should use backTracking to do.
    const pathLength = nums.length;
    
    let answerStack = [];
    
    const backTrackFunc = (deep, stack) => {
        if (deep === pathLength) {
            answerStack.push(stack);
        }
        
        for (let i = 0 ; i < pathLength ; i++) {
            
            let record = [...stack];
            
            if (record.includes(nums[i])) continue;
            
            record.push(nums[i]);
            
            backTrackFunc(deep+1, record);
        }
        
    }
    
    backTrackFunc(0, []);
    
    return answerStack;
};