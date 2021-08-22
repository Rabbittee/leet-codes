/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let pointer = head;
    let map = new Map();
    while (pointer) {
        if (map.get(pointer.val) === pointer) {
            return true;
        } else {
            map.set(pointer.val, pointer);
        }
        pointer = pointer.next;
    }
    return false;
};
