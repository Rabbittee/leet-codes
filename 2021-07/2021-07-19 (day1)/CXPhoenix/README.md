# Solution

```python
class Solution:
    def reverse(self, x: int) -> int:
        rx = int(''.join(list(str(x))[::-1]) if x >= 0 else ''.join([list(str(x))[0], *list(str(x))[1:][::-1]]))
        return 0 if (rx >= 2**31 or rx < -2**31) else rx
```
