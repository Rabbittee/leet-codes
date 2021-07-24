class Solution
{
public:
    int searchInsert(vector<int> &nums, int target)
    {
        int start = 0;
        int end = nums.size();
        for (int i = 0; i < end; i++)
        {
            if (nums[start] == target)
                return start;
            if (nums[(start + end) / 2] > target)
                end = (start + end) / 2;
            else
                start = (start + end) / 2;
        }
        if (nums[start] < target)
            return start + 1;
        else
            return start;
    }
};