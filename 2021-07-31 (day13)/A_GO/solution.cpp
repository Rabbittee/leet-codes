class Solution
{
public:
  int jump(vector<int> &nums)
  {
    vector<int> stepOfIndex(nums.size(), 10000);
    stepOfIndex[0] = 0;
    for (int i = 0; i < nums.size() - 1; i++)
    {
      for (int index = i + 1; index <= i + nums[i] && index < nums.size(); index++)
      {
        stepOfIndex[index] = min(stepOfIndex[index], stepOfIndex[i] + 1);
      }
    }
    return stepOfIndex[nums.size() - 1];
  }
};