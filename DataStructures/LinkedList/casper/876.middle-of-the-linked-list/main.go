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
