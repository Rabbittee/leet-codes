# Check input First
```python 
  # use Python slice notation
    if x > 0:
      res = int(str(x)[::-1])
    else:
      res = -1 * int(str(abs(x))[::-1])
```
# Check output isn't overflow
```python 
    if res > 2**31 or res < -2**31:
        res = 0
```
