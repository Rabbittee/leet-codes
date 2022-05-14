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
public:
    ListNode* middleNode(ListNode* head) {
        
        vector<ListNode*> nodesVector;
        int middleSite = 0;
        
        while(head) {
            nodesVector.push_back(head);
            head = head->next;
        }
        
        middleSite = nodesVector.size()/2;
        
        return nodesVector[middleSite];
    }
};