/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    const dataTable = new Object;

    for(let i = 0; i < nums.length; i++) {

        const currentValue = nums[i];

        if(dataTable[currentValue]) {
            return true;
            break;
        };
        dataTable[currentValue] = true;
    }
    return false;
};
