/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle === "") return 0
    const target = haystack.split(needle)[0]
    return target === haystack ? -1 : target.length
};