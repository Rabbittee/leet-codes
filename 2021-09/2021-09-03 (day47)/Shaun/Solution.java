public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if(headA==null || headB==null) return null;
        
        ListNode a = headA;
        ListNode b = headB;
        while(a !=null){
            b = headB;
            while(b !=null){
                if(a==b)return a;
                if(a.next==b.next){
                    return a.next;
                }  
            b = b.next;
            }
        a = a.next;
        }
        return null;
    }
}