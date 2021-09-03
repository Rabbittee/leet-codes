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
var getIntersectionNode = function (headA, headB) {
    let [a, b] = [headA, headB];
    let set = new Set();

    while (a) {
        set.add(a);
        a = a.next;
    }
    while (b) {
        if (set.has(b)) return b;
        b = b.next;
    }
    return null;
};
