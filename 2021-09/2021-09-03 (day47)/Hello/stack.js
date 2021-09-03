function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  const stackA = [];
  const stackB = [];

  while (headA.next || headB.next) {
    if (headA.next) stackA.push(headA);
    if (headB.next) stackB.push(headB);

    headA = headA.next || headA;
    headB = headB.next || headB;
  }

  let result;

  if (headA === headB) result = headA;

  while (stackA.length || stackB.length) {
    if (stackA.length) headA = stackA.pop();
    if (stackB.length) headB = stackB.pop();

    if (headA === headB) result = headA;
  }

  return result;
}
