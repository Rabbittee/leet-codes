/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = head
  
  if (node===null) { return node }
  
  while (node.next!=null) {
    let nextNode = node.next
    
    if (node.val === nextNode.val) {
      node.next = nextNode.next
    } else {
      node = nextNode
    }
  }
  return head
}