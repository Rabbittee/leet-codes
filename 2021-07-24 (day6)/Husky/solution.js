/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let longest = 0
    let temp = ''
    for (let c of s) {
        const i = temp.indexOf(c)
        if (i > -1) {
            if ( temp.length > longest ) {
                longest = temp.length
            }
            temp = temp.slice(i+1) + c
        } else {
            temp += c
        }
    }

    return temp.length > longest ? temp.length : longest
};