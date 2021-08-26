class Solution {
public:
    bool hasCycle(ListNode *head) {
        unordered_map<ListNode* , int>mem;
        while(head)
        {
            if(mem[head->next]>0) return true;
            mem[head]++;
            head = head->next;
        }
        return false;
    }
};