class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        stack<TreeNode*> s;
        vector<int> result;
        while(root || !s.empty()){
            // do deep til end of left node
            while(root){
                s.push(root);
                root = root->left;
            }
            // pop out and store in array
            root = s.top();
            s.pop();
            result.push_back(root->val);
            // move root to right
            root= root->right;
        }
        return result;
    }
};