var largestNumber = function(nums) {
    
    nums = nums.map((item) => `${item}`);
    let answerStack = [];
    
    for (let i = 0 ; i < nums.length ; i++) {
        
        let flag = 0;
        let index = 0;
        
        while(flag === 0) {
            
            let recordLeft = nums[i] + (answerStack[index] || "");
            let recordRight = (answerStack[index] || "") + nums[i];
            
            if (recordLeft >= recordRight) {
                flag = 1;
                answerStack.splice(index, 0, nums[i]);
            } else {
                index++;
            }
        }
    }
    
    if ((answerStack.find((item) => item !== "0")) === undefined) {
        return "0";
    }
    return answerStack.join("");
    
};