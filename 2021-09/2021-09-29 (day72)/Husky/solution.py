class Solution:
    def permute(self, nums: List[int], prefix = []) -> List[List[int]]:
        res = []
        if len(nums) == 1:
            res.append(prefix + [nums[0]])

        for i in range(len(nums)):
            nums_ = nums[:]
            temp = prefix + [nums_.pop(i)]
            
            sub_res = self.permute(nums_, temp)
            res += sub_res
        
        return res
