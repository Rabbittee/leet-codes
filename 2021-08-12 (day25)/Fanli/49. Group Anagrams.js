//HashMap
function groupAnagrams(strs) {
    let map = new Map()
    strs.forEach(str => {
        let strKey = str.split("").sort().join("")
        if (map.has(strKey)) map.get(strKey).push(str)
        else map.set(strKey, [str])
    })
    return [...map.values()]
}