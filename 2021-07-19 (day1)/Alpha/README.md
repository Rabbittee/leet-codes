# Solution

**first void the ans is end of answer and void maximum value max.** 
```javascript
let ans = '';
let max = Math.pow(2,31)
```
**second use if else to judge input number in which range**
```javascript
if(x===0) {
  return 0
}else if(x>0) {

}else if(x<0) {

}
```
**third if the input is not 0, if is greater than 0, then first change number to string, and use for loop to reverse string,final change string to number and judge if value is not greater than maximum then return answer**

**fourth if the input is not 0, if is less than 0, then first let it to be a positive number, then change number to string, and use for loop to reverse string, final change string to number and judge if value is not greater than maximum then return answer be a negative number**
