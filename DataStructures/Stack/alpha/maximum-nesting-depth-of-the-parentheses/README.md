# Maximum Nesting Depth of the Parentheses

## Solution

### Step 1

Declare an empty array as a stack.
Declare an array which is contains s split.
Declare a size will be final anser.
Because of input is VPS, so we don't need to check string's format.

### Step 2

Check array elements. If element is ( that means is a beginer so we can push in to stack.
If element is ) that means is end of this pair, so we can pop up stack.

### Step 3

Then if element is ( again, we can check stack length if larger than size, then it will be size

### Complexity

- Space complexity

  two array `O(2n)`,
  size `O(1)`.

- Time complexity

  for loop `O(n)`
