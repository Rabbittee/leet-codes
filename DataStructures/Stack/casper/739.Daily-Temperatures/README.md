3. Stack
===


[1614. Maximum Nesting Depth of the Parentheses](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/)


We use a stack array to store the index of the number.

To get the result, we iterate over the input integer array and check if the stack is not empty and the number is smaller than the number found by the index of the top value in the stack, if true we put the diff or the index and pop the stack, otherwise, put the index into the stack.

### Solution

```go
func dailyTemperatures(temperatures []int) []int {
    stack := make([]int, 0)
    result := make([]int, len(temperatures))
    for i, v := range temperatures {
        for len(stack) != 0 && temperatures[stack[len(stack)-1]] < v {
            result[stack[len(stack)-1]] = i - stack[len(stack)-1]
            stack = stack[:len(stack)-1]
        }
        stack = append(stack, i)
    }
    return result
}
```

### Time complexity

There is a nested for loop inside the for loop, and in the worst case, every element will be pushed and popped once, so the time complexity is `O(2n)` = `O(n)`.


### Space complexity

We malloc a result array and a stack array, the result array initialized the capacity with the input length and the maximum length of the stack will not be larger than the input.
