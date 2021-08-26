/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map()
    nums.forEach((el, index) => {
        // if each one has in map, delete it, or not add it
        map.has(el) ? map.delete(el) : map.set(el, index)
    })
    return [...map.keys()]
};