class Solution
{
public:
  bool isSameTree(TreeNode *p, TreeNode *q)
  {
    if (p == nullptr && q == nullptr)
      return true;
    if ((p == nullptr && q != nullptr) || (p != nullptr && q == nullptr))
      return false;
    if (p->val != q->val)
      return false;
    if (!isSameTree(p->left, q->left))
      return false;
    if (!isSameTree(p->right, q->right))
      return false;
    return true;
  }
};