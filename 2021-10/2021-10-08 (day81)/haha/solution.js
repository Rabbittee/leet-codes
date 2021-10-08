/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let Rstr = '' , Lstr = '', group = 0
    for(let el of s){
        el === 'R' ?  Rstr+=el : Lstr+=el
        if(Rstr.length === Lstr.length) {
            group++
            Rstr = '' 
            Lstr = ''
        }
    }
    return group
};