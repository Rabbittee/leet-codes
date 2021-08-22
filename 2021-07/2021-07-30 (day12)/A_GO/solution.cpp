/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
  int maxDepth(TreeNode *root)
  {
    if (root == nullptr)
      return 0;
    return getDepth(root, 1);
  }
  int getDepth(TreeNode *node, int depth)
  {
    int leftDepth = depth;
    int rightDepth = depth;
    if (node->left != nullptr)
    {
      leftDepth = getDepth(node->left, depth + 1);
    }
    if (node->right != nullptr)
    {
      rightDepth = getDepth(node->right, depth + 1);
    }
    return max(leftDepth, rightDepth);
  }
};