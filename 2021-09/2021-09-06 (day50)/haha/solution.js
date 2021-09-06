/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {}
    nums.forEach((el)=>{
        hash[el] ? hash[el]+=1 : hash[el] = 1
    })
    let max = Math.max(...Object.values(hash))
    return getKeyByValue(hash, max)
};

function getKeyByValue(obj, val) {
  return Object.keys(obj).find(key => obj[key] === val);
}