class Solution:
    def majorityElement(self, nums: List[int]) -> int:

        half = len(nums)//2
        
        for k,v in Counter(nums).items():
            if v > half:
                return k