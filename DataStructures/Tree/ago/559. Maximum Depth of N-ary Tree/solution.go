/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func maxDepth(root *Node) int {
    if root == nil { return 0 }
    ans := 0
    for _, child := range root.Children { ans = max(ans, maxDepth(child)) }
    return ans + 1
}

func max(a, b int) int {
    if a > b { return a }
    return b
}