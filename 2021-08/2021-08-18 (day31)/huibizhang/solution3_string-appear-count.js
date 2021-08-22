/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const keys = new Set(nums)
    let s = ` ${nums.join(' ')} `

    for (key of keys) {
        if(s.match(new RegExp(`\\s${key}\\b`,'g')).length===1){
        return key
        }
    }
};