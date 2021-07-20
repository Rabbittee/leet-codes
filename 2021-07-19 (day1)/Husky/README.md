### 01. number to string to number

```python
class Solution:
    def reverse(self, x: int) -> int:
        max_value = 2**31

        reversed_str = str(x)[::-1]
        try:
            reversed_num = int(reversed_str)
        except:
            reversed_num = -int(reversed_str[:-1])

        return reversed_num if -max_value <= reversed_num <= max_value - 1 else 0
```

### 02. modulo

```python
class Solution:
    def reverse(self, x: int) -> int:
        max_value = 2**31
        sign = x > 0
        x = abs(x)
        y = 0

        while(x != 0):
            y = y*10 + x % 10
            x = x//10

            if y < -max_value or y >= max_value:
                return 0

        return y if sign else -y
```

### 03. js

```javascript
var reverse = function (x) {
  let MAX = Math.pow(2, 31);
  if (x === 0) {
    return 0;
  }

  let ans = Math.abs(x)
    .toString()
    .split("")
    .map((_, i, x_) => x_[x_.length - 1 - i])
    .join("");

  ans = x > 0 ? ans - 0 : 0 - ans;

  return ans >= -MAX && ans < MAX ? ans : 0;
};
```
