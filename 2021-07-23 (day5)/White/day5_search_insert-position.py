# 先排除特殊情況再使用二分搜尋法決定位置
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if target in nums:
            return nums.index(target)
        if target <= nums[0]:
            return 0
        if target > nums[-1]:
            return nums.index(nums[-1])+1
        
        mid = len(nums)//2
        while len(nums) >= mid > 0:
            if target > nums[mid]:
                if nums[mid+1] > target:
                    return mid+1
                mid = mid + len(nums[mid:])//2
            else:
                if target > nums[mid-1]:
                    return mid          
                mid = mid - len(nums[:mid])//2
