class K(str):
    def __lt__(a, b):
        return a + b > b + a
        
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        
        nums = sorted([str(n) for n in nums], key = K)
        
        return '0' if nums[0] == '0' else ''.join(nums) 
