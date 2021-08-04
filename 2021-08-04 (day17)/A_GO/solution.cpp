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
  ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
  {
    ListNode *sum = l1; // new list store add sum
    ListNode *result = sum; // return reuslt
    int val;
    int carry = 0;
    while (l1 != nullptr || l2 != nullptr || carry != 0)
    {
      if (l1 != nullptr && l2 != nullptr)
      {
        val = l1->val + l2->val;
        l1 = l1->next;
        l2 = l2->next;
      }
      else if (l1 != nullptr)
      {
        val = l1->val;
        l1 = l1->next;
      }
      else if (l2 != nullptr)
      {
        val = l2->val;
        l2 = l2->next;
      }
      else
      {
        val = carry;
        carry = 0;
      }
      val += carry;
      carry = val / 10;
      val %= 10;
      // new node store result
      ListNode *node = new ListNode(val);
      // link to sum
      sum->next = node;
      sum = sum->next;
    }
    // first node will be unused skip it
    return result->next;
  }
};