/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let hash = {}
    let count = 0
    let table = [...nums] // call by refrence
    // if hash table not has value push nums[i] to be only key 
    for (let i = 0; i < table.length; i++) {
        if (hash[table[i]] === undefined) {
            hash[table[i]] = i
            count++ // count no double array length
        }
    }
    // get hash table's values ex: [1,1,2], hash =  { '1': 0, '2': 2 } 
    let tableVal = Object.values(hash)
    //let tableVal get nums real data
    for (let i = 0; i < tableVal.length; i++) {
        tableVal[i] = nums[tableVal[i]]
    }
    // sort 
    let result = tableVal.sort((a, b) => {
        return a - b
    })
    // assign value to set nums
    Object.assign(nums, result)
    return count
}