function mergeTwoLists(l1, l2) {
    let dummy = new ListNode()
    let pointer = dummy
    while(l1&&l2){
        if(l1.val>=l2.val){
            pointer.next = l2
            l2 = l2.next
            pointer = pointer.next
        }else{
             pointer.next = l1
             l1 = l1.next
             pointer = pointer.next
        }
    }
    
    pointer.next= l1||l2
    return dummy.next
}