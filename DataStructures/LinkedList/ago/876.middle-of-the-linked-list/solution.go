/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func middleNode(head *ListNode) *ListNode {
    fast, slow := head, head;
    
    for (fast != nil && fast.Next != nil){
        fast = fast.Next.Next
        slow = slow.Next
    }
    
    return slow
}