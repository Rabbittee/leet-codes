function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  if (l2.val >= l1.val) {
    l1.next = mergeTwoLists(l1.next, l2);
  }

  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    l1 = l2;
  }

  return l1;
}
