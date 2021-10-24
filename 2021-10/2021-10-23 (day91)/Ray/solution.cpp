/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
public:
    vector<int> answer;
    
    vector<int> preorder(Node* root) {
        
        // preorder --> DLR
        // step 1: printf
        // step 2: left
        // step 3: right
        
        if (!root) {
            return answer;
        }
        
        answer.push_back(root->val);
        for (int i = 0 ; i < root->children.size() ; i++) {
            preorder(root->children[i]);
        }
        
        return answer;
    }
};