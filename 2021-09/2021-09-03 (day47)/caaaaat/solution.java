public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
	int lenA = 0, lenB = 0;
	ListNode tempA = headA, tempB = headB;
	while (tempA != null) {
		tempA = tempA.next;
		lenA++;
	}
	while (tempB != null) {
		tempB = tempB.next;
		lenB++;
	}
	int diff = lenA - lenB;
	tempA = headA;
	tempB = headB;
	if (diff > 0) {
		while (diff > 0) {
			tempA = tempA.next;
			diff--;
		}
	} else {
		while (diff < 0) {
			tempB = tempB.next;
			diff++;
		}
	}
	while(tempA != null && tempB != null) {
		if (tempA != tempB) {
			tempA = tempA.next;
			tempB = tempB.next;
		} else {
			return tempA;
		}
	}
	return null;
}