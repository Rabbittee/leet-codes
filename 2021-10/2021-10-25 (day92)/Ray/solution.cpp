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
    vector<int> stack;
    void recursive (TreeNode* root) {
        if (root->left) {
            recursive(root->left);
        }
        
        stack.push_back(root->val);
        
        if (root->right) {
            recursive(root->right);
        }
    }
    int minDiffInBST(TreeNode* root) {
        recursive(root);
        int diff = stack.back() ;
        for (int i = 1 ; i < stack.size() ; i++) {
            diff = diff > (stack[i] - stack[i-1]) ? (stack[i] - stack[i-1]) : diff;
        }
        return diff;
    }
};