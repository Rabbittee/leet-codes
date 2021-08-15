class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if(nums.size() == 0)
            return 0;
        
        /// set a cursor first point to position duplicate
        int cursor = 0;
        // find the index not duplicate withh cursor
        int compare = 1;
        int length = 1;
        while(compare != nums.size()){
            // if duplicate, try next one.
            if(nums[cursor] == nums[compare]){
                compare++;
            // if not, move cursor to next and set value just found not duplicate
            // and add length
            }else if (nums[cursor] < nums[compare]){
                nums[++cursor] = nums[compare];
                length++;
            }
        }
        return length;
    }
};