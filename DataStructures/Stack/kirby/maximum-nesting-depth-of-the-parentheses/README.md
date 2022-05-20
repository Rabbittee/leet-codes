# Maximum nesting depth of the parentheses

## Pseudocode

```
for each character in input string
	if character is open parenthese
		add one stack length
		if stack length large than max depth, set max depth = current stack length
	if character is close parenthese
		sub one stack length
```

## Performance

We check every character one by one
Time complexity: `O(n)` which `n` depends on string length

There are only two variables: `stack length` and `max depth` which both are number.
number size will not change during runtime.
Space complexity: `O(1)`
