function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) {
      return null;
    }
    // because we cant change origin node, so store it
    let a = headA;
    let b = headB;
  
    // combine a and b and until if a equals b
    // if it has connect, return will at a node
    // if not return will be null which means it is end
    while (a !== b) {
      a = a === null ? headB : a.next;
      b = b === null ? headA : b.next;
    }
    return b;
  }