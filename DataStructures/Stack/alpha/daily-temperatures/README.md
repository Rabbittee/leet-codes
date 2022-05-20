# Maximum Nesting Depth of the Parentheses

## Solution

### Step 1

Declare an empty array as a stack.
Declare an array which has temperatures length and initialize all number be zero.

### Step 2

When stack is empty, then we push temperature and index in stack.

### Step 3

If not, then check if current temperature is larger then stack's last temperature,
then check how many elements in stack now, next pop up stack.

### Step 4

If otherwise, then push this current element to stack.

### Complexity

- Space complexity

  two array `O(2n)`

- Time complexity

  for loop and inear loop `O(n^2)`
