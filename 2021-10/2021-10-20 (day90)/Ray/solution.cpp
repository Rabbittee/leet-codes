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
class Solution {
    public:
        TreeNode* searchBST(TreeNode* root, int val) {
            TreeNode *ptr = root;
            
            while(ptr) {
                if (val < ptr->val) {
                    ptr = ptr->left;
                } else if (val > ptr->val) {
                    ptr = ptr->right;
                } else {
                    return ptr;
                }
            }
            
            return ptr;
        }
    };