/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0 || x > 2**31 - 1) {
    return false
  }

  let num = x
  let delta = 0
  while(num>0){
    delta = delta*10 + num%10
    num = Math.floor(num/10)
  }

  return x===delta
};