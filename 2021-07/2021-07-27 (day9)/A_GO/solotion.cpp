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
class Solution
{
public:
  ListNode *deleteDuplicates(ListNode *head)
  {
    // create a list node store result
    ListNode *result = head;
    // because of head possiblity point to nullptr when duplicate so need to check head and next of check is nullpyr
    while (head != nullptr && head->next != nullptr)
    {
      // check if duplicate point head to next of next
      if (head->val == head->next->val)
      {
        head->next = head->next->next;
      }
      else
      {
        head = head->next;
      }
    }
    return result;
  }
};