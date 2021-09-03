/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    const initialB = headB;
    
    while(headA !== null) {
        headB = initialB;
        while(headB !== null) {
            if (headA == headB) {
                return headA;
            }
            headB = headB.next;
        }
        headA = headA.next;
    }
    return null;
};