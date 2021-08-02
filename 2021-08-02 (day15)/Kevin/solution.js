/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let result, bigger, smaller;

    if (l1 === null && l2 === null) return null;

    if (l1 === null || l2 === null) {
        smaller = l1 !== null ? l1 : l2;
        bigger = null;
    } else {
        bigger = l1.val > l2.val ? l1 : l2;
        smaller = l1.val > l2.val ? l2 : l1;
    }

    result = smaller;
    result.next = mergeTwoLists(smaller.next, bigger);
    return result;
};
