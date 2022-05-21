class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        // Initalize answer array
        vector<int> answer(temperatures.size(), 0);
        // stack element : (tempearture, inputIndex)
        stack<pair<int,int>> acculmateDays;
        
        for (int i = 0 ; i < temperatures.size() ; i++) {
            while (!acculmateDays.empty() && (temperatures[i] > acculmateDays.top().first)) {
                answer[acculmateDays.top().second] = i - acculmateDays.top().second;
                acculmateDays.pop();
            }
            acculmateDays.push(make_pair(temperatures[i], i));
        }
        
        return answer;
    }
};