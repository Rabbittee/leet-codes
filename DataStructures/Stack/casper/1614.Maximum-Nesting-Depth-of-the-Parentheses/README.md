3. Stack
===


[1614. Maximum Nesting Depth of the Parentheses](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/)

From the description, we know the input will follow the VPS rules, every left parenthesis has paired right parentheses.

We use `currentDepth` and `maximumDepth` to record the current depth and the maximum depth.
We iterate the characters in the input string, when the character  equals '(', then we increase the currentDepth and we also compare the currentDepth and the maximumDepth, if the currentDepth is larger then assign the value to the maxDepth, if the character  equals ')', that means the parenthesis is closed, so we decrease the currentDepth.

### Solution

```go
func maxDepth(s string) int {
    currentDepth, maximuxDepth := 0, 0
    for _, c := range s {
        if c == '(' {
            currentDepth += 1
            maximuxDepth = max(maximuxDepth, currentDepth)

        } else if c == ')' {
            currentDepth -= 1
        }
    }
    return maximuxDepth
}

func max(a int, b int) int {
    if a > b {
        return a
    }
    return b
}
```

### Time complexity

We have an iteration to put all nodes into an array, so the time complexity is `O(n)`.

### Space complexity

We don't allocate any new memory: `O(1)`

