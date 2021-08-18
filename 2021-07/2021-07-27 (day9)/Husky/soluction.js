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
    if (head == null || head.next == null) {
        return head
    }

    let new_head = head
    while(new_head.next != null) {
        if (new_head.val !== new_head.next.val) {
            new_head = new_head.next
        } else {
            new_head.next = new_head.next.next
        }
    }
    return head
};