# Solution

Binary Search

### Algorithm

```
BinarySearch( `nums`, `target`, `start`, `end` ): 
  get `mid` position with `start + (end - start) / 2`

  find value `x` in `nums` with `mid` position

  if `x` equals `target`
    return `mid`

  if `x` < `target`
    return BinarySearch( `nums`, `target`, `start = mid + 1`, `end = end` )

  else
    return BinarySearch( `nums`, `target`, `start = start`, `end = mid` )
```

### Convergence

```
if `start` >= `end` return end
```