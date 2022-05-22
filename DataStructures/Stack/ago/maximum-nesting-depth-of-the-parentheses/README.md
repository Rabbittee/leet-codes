## Solution

Use an array as stack to store data.
When meet a left bracket `(` push it into stack.
Meet a right bracket `)` pop one element from stack.

Check the length every loop, if length larger than max, replace it.

### Time Complexity
The loop run n times, so
`f(n) = O(n)`

### Space Complexity
The max length of stack should be number of bracket pair. Which max is 2/n.
`f(n) = O(n)`