/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
    // min heap compare, return small one
    struct less
    {
        bool operator()(const ListNode *left, const ListNode *right) const {
            return left->val > right->val;
        }
    };
    public:
    
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // create a min heap
        priority_queue<ListNode*, vector<ListNode*>, less> minHeap;
        
        // set K elements in to min heap
        for(int i=0;i<lists.size();i++){
            if(lists[i] != nullptr){
                minHeap.push(lists[i]);
            }
        }
        
        // head to store first node for return
        ListNode* head = nullptr;
        
        // last always move to last node of result, will connect next node at here
        ListNode* last = nullptr;
        
        
        while(!minHeap.empty()){
            
            // get the minimun of min heap
            ListNode* min = minHeap.top();
            
            // remove minimun node
            minHeap.pop();
            
            // if it is first time, give a start node to head and set it as last node
            if(head == nullptr){
                head = last = min;
            }else{
                // connect to new node to last and move cursor to last
                last->next = min;
                last = last->next;
            }
            // the node we just remove from a list, push new one into heap for compare
            if(min->next != nullptr){
                minHeap.push(min->next);
            }
        }
        return head;
    }
};