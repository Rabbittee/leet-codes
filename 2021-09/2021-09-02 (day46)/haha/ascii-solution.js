/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) { return false; }
    const sum = (str) => {
        let addAll = 0
        for(let i=0; i < str.length ; i++){
            addAll += str.charCodeAt(i)
        }
        return addAll
    }
    if(sum(s) !== sum(t)) return false
    else  return sameSumCheckValue(s,t)
  };
  
  function sameSumCheckValue (s, t) {
      return s.split('').sort().join() === t.split('').sort().join()
  }