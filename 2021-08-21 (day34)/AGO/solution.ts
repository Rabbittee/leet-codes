function findKthLargest(nums: number[], k: number): number {
    let pivot = nums[nums.length - 1];
    let i = -1;
    let j = 0;
    while(j < nums.length-1){
        if(nums[j] > pivot){
            i++;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        j++;
    }
    i++;
    nums[nums.length - 1] = nums[i];
    nums[i] = pivot;
    
    // check rank we got;
    const rank = i + 1;
    
    if(rank == k) return pivot;
    if(k > rank) return findKthLargest(nums.slice(i+1), k-rank);
    return findKthLargest(nums.slice(0,i),k);
};

