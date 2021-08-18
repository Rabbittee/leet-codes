function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function merge(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  if (l2.val >= l1.val) {
    l1.next = merge(l1.next, l2);
  }

  if (l1.val > l2.val) {
    l2.next = merge(l1, l2.next);
    l1 = l2;
  }

  return l1;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  const mid = Math.floor(lists.length / 2);

  if (mid <= 0) return lists[0] || null;

  return merge(
    // left
    mergeKLists(lists.slice(0, mid)),
    // right
    mergeKLists(lists.slice(mid))
  );
}
