/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const map = {}
    
    nums.forEach((num) => {
      (map[num]!==undefined)?(delete map[num]):(map[num] = num)
    })
  
    return [...Object.keys(map)]
};