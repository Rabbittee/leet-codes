class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        if(sum(nums)==0):
            return '0'

        nums = [str(num) for num in nums]
        #nums = sorted(nums, reverse = True)
        
        for i in range(len(nums)-1):
            for j in range(i+1, len(nums)):
                if int(str(nums[i])+str(nums[j])) <= int(str(nums[j])+str(nums[i])):
                    nums[i], nums[j] = nums[j], nums[i]
        
        return ''.join(nums)
