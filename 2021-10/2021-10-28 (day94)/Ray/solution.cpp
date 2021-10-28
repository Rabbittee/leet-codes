class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        
        vector<int> recordData;
        
        recordData.push_back(edges[0][0]);
        recordData.push_back(edges[0][1]);
        
        int recordValue;
        
        for (int i = 1 ; i < edges.size() ; i++) {
            for (int j = 0 ; j < recordData.size() ; j++) {
                if (recordData[j] == edges[i][0]) {
                    return edges[i][0];
                }
                if (recordData[j] == edges[i][1]) {
                    return edges[i][1];
                }
            }
        }
        
        return recordValue;
    }
};