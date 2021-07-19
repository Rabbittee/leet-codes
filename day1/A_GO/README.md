# 7. [Reverse Integer](https://leetcode.com/problems/reverse-integer/)

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

# My thought
At first, I wanna use Complement like
```
444 - 123 = 321
99999 - 87787 = 12212 <= I was wrong
```
So here is the answer, if we want to revser an integer,
means let tail digit move to head,

**First**, we get last digit. How to do? **use remainder of 10**
```
12'3' % 10 = 3
-123 % 10 = -3
```
**Second**, we need to let digit previous we got **carry（進位**）, as result * 10, and **add digit this time we get.**
```
result = result * 10 + lastDigit
```

**Third**, to prevent overflow, check before caculte
How to check? if we just result * 10,it will overflow.
so reverse our thought, **let MAX / 10**. And if result > MAX / 10 before we * 10 on it. that will overflow.
**Another expection**, if result * 10 than **plus lastDigit will bigger than MAX.** in this situation, result equals MAX / 10 and **lastDigits bigger than remainder of MAX**. So is negative value.

###example
```C++
const int MAX = 255
const int MIN = -256

int previousValue = 26
// previoustValue * 10 will > 255

int lastDigit = 8;
int remainderOfMax = 255 % 10 // = 5, 5 < 8
previousValue = 25
int result = previous * 10 + 8 // = 258 this will overflow

lastDigit = 5;
```