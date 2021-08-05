class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> output;
        map<int, int> myMap;
        
        for(int i=0;i < nums.size();i++){
            myMap[nums[i]] = i;
        }
        for(int i=0;i < nums.size();i++){
            if(myMap[target-nums[i]] && myMap[target-nums[i]]!=i)
            {
                output.push_back(i);
                output.push_back(myMap[target-nums[i]]);
                break;
            }
        }
        return output;
    }
};