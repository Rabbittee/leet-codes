# Solution

See the question , I get some idea:
- let number unsigned
- fetch out characters and conbine it reverse
- add sign for result of reverse
- Maybe input and ouput will be return 0 which size over than int32.

full of my code:
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let sign = x<0
    let reverseString = ""
    
    if(sign){
        x = 0 - x
    }
    
    for(digit of x.toString()){
        reverseString = digit + reverseString
    }

    const result = (sign?-1:1)*Number(reverseString)

    if(x< -1*Math.pow(2,31) || x > ((Math.pow(2,31) - 1))){
        return 0
    }else if (result< -1*Math.pow(2,31) || result > ((Math.pow(2,31) - 1))) {
        return 0
    }

    return result
};
```