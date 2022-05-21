class Solution {
public:
    int maxDepth(string s) {
        int maxCount = 0;
        stack<char> container;
        
        for (char& c : s) {
            if (c == '(') {
                container.push(c);
            }
            
            if (c == ')') {
                // Becasue max can't analysis container.size(), use additional parameter equal to it.
                int containerSize = container.size();
                maxCount = max(containerSize, maxCount);
                container.pop();
            }
        }
        
        return maxCount;
    }
};