# Daily Temperatures

## Concept - Monotonic Stack

A Monotonic stack is a stack that every elements be increasing or decreasing order.

So Monotonic stack have some behavior:

1. the item behind always bigger (less) than previous one.
2. because FIFO, we can assume that the top item is the largest (lowest) one.

## Pseudocode

```
for each temperatures
	if current temperature less than the top temperature in the stack
		pop one stack
		result list with the difference between current index and prev index
    keep checking until stack is empty

  push current index into stack
```

## Performance

We have loop through every temperatures and also the stack we pushed,
but the stack actually depends on the same temperatures list,
the worst case is only the last item bigger the first item,
which we have to loop list twice, which is `2n`.

Time complexity: `O(n)` which `n` depends on temperatures length

There are only two variables: `result list` and `stack` both depend on temperatures length.

Space complexity: `O(n)`
