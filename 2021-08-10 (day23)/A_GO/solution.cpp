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
    bool isValidBST(TreeNode* root) {
        vector<int> list; // store array of value it should be ordered by asc
        return travelAndCheck(root,list);
    }
    // root[input]
    // list[output] a sorted array
    bool travelAndCheck(TreeNode *root, vector<int>& list){
        bool result = true;
        // go to deepest of left child.
        if(root->left != nullptr){
            result = travelAndCheck(root->left, list);
            if (result == false)
                return false;
        }
        // start to check, the value of last on in list shold smaller than root->val
        if(list.size()>0){
            if(root->val <= list.back()){
              return false;
            }
        }
        list.push_back(root->val);
        // check right node val shold bigger than root->val as last value of list
        if(root->right != nullptr){
            if (result == false)
                return false;
            if(list.back() >= root->right->val){
                return false;
            }
            // go into right child node
            result = travelAndCheck(root->right, list);
        }
        return result;
    }
};