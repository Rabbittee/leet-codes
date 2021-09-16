/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    if (!needle) {
        return 0;
    }
    
    let isInside = haystack.includes(needle);
    
    if (isInside) {
        let splitItem = haystack.split(needle);
        return splitItem[0].length;
    }
    
    return -1;
};