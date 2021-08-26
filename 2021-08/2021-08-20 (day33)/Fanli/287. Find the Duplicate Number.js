function findDuplicate(nums) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        let key = nums[i]
        if(!map.has(key)) map.set(key,1)
        else {
            return key
        }
    }
}