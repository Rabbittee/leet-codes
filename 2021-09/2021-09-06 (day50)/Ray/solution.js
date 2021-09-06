/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    // found differ array to make sure the unique
    let differArray = [];
    for (let i = 0 ; i < nums.length ; i++) {
        let differValue = differArray.find((item) => item === nums[i]);
        if (!differValue) {
            differArray.push(nums[i]);
        }
    }
    
    // initial count array
    let countArray = differArray.map((item) => 0);
    
    // Set countArray by using differArray. 
    // If find the value in differArray, refer location's count will be +1.
    for (let i = 0 ; i < nums.length ; i++) {
        let found = differArray.findIndex((item) => item === nums[i]);
        countArray[found]++;
    }
    
    // find the major element in countArray and return the refer element
    for (let i = 0 ; i < countArray.length ; i++) {
        if (countArray[i] > (nums.length / 2)) {
            return differArray[i];
        }
    }
    return -1;
};