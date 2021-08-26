### js

1. integer to char array
2. check half array

```javascript
var isPalindrome = function (x) {
  const MAX = 2 ** 31;

  if (x < 0 || x > MAX - 1) {
    return false;
  }

  const xStr = x.toString();
  return xStr
    .split("")
    .slice(0, parseInt(xStr.length / 2))
    .every((v, i) => v === xStr[xStr.length - 1 - i]);
};
```

### py

1. Zen of Python...

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or x > 2 ** 31 - 1:
            return False

        x_str = str(x)
        return x_str == x_str[::-1]

```
