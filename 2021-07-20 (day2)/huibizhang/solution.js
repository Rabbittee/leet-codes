/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0){
      return false
    }
    
    let num = x
    let num_array = []
    while(num>0){
    num_array.push( num%10 )
      num = Math.floor(num/10)
    }
    
    num = 0
    num_array.forEach((digit,index) => {
    	num += digit*Math.pow(10,((num_array.length-1)-index))
    })
    
    if(x< -1*Math.pow(2,31) || x > ((Math.pow(2,31) - 1))){
        return 0
    }else{
    	return x===num
    }
};