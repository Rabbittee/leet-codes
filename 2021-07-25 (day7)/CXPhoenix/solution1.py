class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = []
        while len(nums1) and len(nums2):
            if nums1[0] < nums2[0]:
                nums.append(nums1.pop(0))
            else:
                nums.append(nums2.pop(0))
        
        if not len(nums1):
            nums.extend(nums2)
        if not len(nums2):
            nums.extend(nums1)
        
        if len(nums) % 2:
            return float(nums[len(nums)//2])
        return (nums[len(nums)//2] + nums[len(nums)//2 - 1]) / 2
