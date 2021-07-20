--------- Without converting to String -------

1. Will change the value of x, so let num = x at first
2. negative number will always not palindrom, so if x is negative return false
3. Check if x is inside the sign range
4. Use whilte loop to reverse the number. Get the last digit by getting the remainder of x % 10, and move the last digit to the next by \*10.
5. compare num and revNum

---------Convert to String -------------

1. Will change the value of x, so let num = x at first
2. negative number will always not palindrom, so if x is negative return false
3. Check if x is inside the sign range
4. Convert x to string str1 and reverse the string by for loop.
5. compare str2 and str1
