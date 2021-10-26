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
    vector<int> data;
    void recursive(TreeNode* root) {
        // LDR search
        if (root->left) {
            recursive(root->left);
        }
        
        data.push_back(root->val);
        
        if (root->right) {
            recursive(root->right);
        }
    }
    TreeNode* increasingBST(TreeNode* root) {
        recursive(root);
        TreeNode *head = new TreeNode();
        TreeNode *ptr = head;
        for (int i = 0 ; i < data.size() ; i++) {
            TreeNode *newNode = new TreeNode();
            newNode->val = data[i];
            ptr->right = newNode;
            ptr = ptr->right;
        }
        return head->right;
    }
};