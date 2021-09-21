function maxSlidingWindow(nums: number[], k: number): number[] {
    let q: number[] = new Array();
    let result: number[] = new Array();
    
    for(let i = 0; i < nums.length; i += 1){
        // pop all smaller element in queue
        while(q && q[q.length - 1] < nums[i]){
            q.pop();
        }
        
        // push new element into queue;
        q.push(nums[i]);

        // remove max value while it out of window
        if(i >= k && q[0] === nums[i - k]) q.shift();
        
        // start push max value into result array since window moving from k - 1
        if (i >= k - 1) {
            result.push(q[0]);
        }
    }
    return result;
};