// This is uncorrect solution!
// It can't pass the test case about `s: "bb"`,`wordDict: ["a", "b", "bbb", "bbbb"]`

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    let originString = s;

    for(let i = 0; i < wordDict.length; i++) {
        if(originString.includes(wordDict[i])) {
            originString = originString.replace(wordDict[i], '');
            if(!originString) {originString = s};
        } else {
            return false;
        }
    }
    return true;
};
