var singleNumber = function(nums) {
    const result = new Set();
    for(let num of nums) {
        if(result.has(num)) {
            result.delete(num);
        } else {
            result.add(num);
        }
    }
    return [...result][0];
};