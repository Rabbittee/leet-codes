class Solution {
public:
    int maxDepth(string s) {
        int maxCount = 0;
        int unMatchCount = 0;
        
        for (char& c : s) {
            if (c == '(') {
                unMatchCount++;
            }
            
            if (c == ')') {
                maxCount = max(unMatchCount, maxCount);
                unMatchCount--;
            }
        }
        
        return maxCount;
    }
};