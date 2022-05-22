# Daily Temperatures

## Solution

1. Push index of current temperatures into stack
2. Move to next day and compare temperatures in stack
3. If larger than temperatures in tack. Pop out the index, `current index - stack[stackIndex]` will got count of days for larger temperature day since that time.
4. Store the result into res[stack[stackIndex]], because that mean we find result of that day.

### Complexity

- Space complexity

  Declared 2 array length of n, `f(n) = 2n = O(n)`

- Time complexity

There is 2 for loop, but actually inner loop would not execute more than `N` times.
Because the max length of stack is `N` and the condition of inner loop is depend on length.
So the really execute times is `2N`

`f(n) = 2n = O(n)`
  
