/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map()
    nums.forEach((el, index) => {
        // if each one has in map, delete it
        if (map.has(el)) map.delete(el)
        // or not add it
        else map.set(el, index)
    })
    return [...map.keys()]
};