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
  let link = head;
  while(link!=null&&link.next!=null) {
      if(link.next.val===link.val) {
          link.next=link.next.next;
      }else{
          link=link.next;
      }
      
  }
  return head;
};