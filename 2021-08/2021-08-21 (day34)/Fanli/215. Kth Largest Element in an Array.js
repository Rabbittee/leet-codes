function findKthLargest(nums, k) {
    return nums.sort((a,b)=>b-a).splice(0,k)[k-1]
};