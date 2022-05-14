2. # Linked list
===

1. [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

Constraints: 
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

According to the constraints, we know the maximum count of nodes is 100, so we initial an array with 100 sizes to store all of nodes.
We are also using an integer variable to count the number of nodes.
After putting all nodes into the array, we can find the target node by dividing the count by 2.


Here is the solution.
```go
func middleNode(head *ListNode) *ListNode {
	nodeArray := make([]*ListNode,100)
	count := 0

	for head != nil {
		nodeArray[count] = head
		head = head.Next
		count++
	}

	return nodeArray[count/2]
}
```

## Time complexity

We have an iteration to put all nodes into an array, so the time complexity is $$\mathcal{O}(n)$***$.

## Space complexity


We always have a 100 capacity array, no matter how many nodes there are, so the space complexity is $$\mathcal{O}(1)$***$.
