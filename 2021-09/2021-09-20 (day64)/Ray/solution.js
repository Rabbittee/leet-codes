/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let aheadCount = nums.length - k + 1;
    let queue = nums.splice(0, k);
    let answer = [];
    let answerCount = 0;
    let maxElement = Math.max(...queue);
    let shiftElement = 0;
    let pushElement = 0;
    
    while(answerCount !== aheadCount) {
        answer.push(maxElement);
        shiftElement = queue.shift();
        pushElement = nums[answerCount];
        queue.push(pushElement);
        maxElement = maxElement > pushElement ? maxElement : pushElement;
        
        answerCount++;
        
        if (shiftElement === maxElement && !queue.includes(maxElement)) {
            maxElement = Math.max(...queue);
        }
        
    }
    return answer;
};