# Solution

### ideas:
- `-121` reversed is `121-`, not palindrome. So first is reject all negative number.
- Cause by **without convert to string** rule, unsing `mod operator` to get lowest digit of current number and save it to an array.
- run over all digit in array and let the digit you get multiply its digit count - 1. ( For example, number have 3 digits, first digit'll be multiply by 100 , second digit multiply by 10 , and the lastest digit multiply by 1. )


### compelete source code
```javascript
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
```