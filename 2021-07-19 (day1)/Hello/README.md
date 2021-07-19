# Solution

Reversing an integer and check before overflow

## Digit Pop and Push

### Pop
```c
pop = x % 10;
x /= 10;
```

### Push
```c
temp = rev * 10 + pop;
rev = temp
```

### Check Overflow

- if `rev > INTMAX / 10` then `temp = rev * 10 + pop`,
then `temp = rev * 10 + pop` is guaranteed to overflow.

- if `rev == INTMAX / 10`, then `temp = rev * 10 + pop` will overflow if `pop > 7`.
​

