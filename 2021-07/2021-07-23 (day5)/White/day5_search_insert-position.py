# 先排除特殊情況再使用二分搜尋法決定位置
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if target in nums:
            return nums.index(target)
        if target <= nums[0]:
            return 0
        if target > nums[-1]:
            return nums.index(nums[-1])+1

        # 訂正二分搜尋的寫法       
        left = 0
        right = len(nums)

        while right >= left:
            mid = left + (right - left)//2
            print('l:%s r:%s mid:%s [2:%s]' %(left,right,mid,nums[mid]))                        
            if target == nums[mid]:
                return mid
            elif target > nums[mid]:
                left = mid + 1
            elif target < nums[mid]:
                right = mid - 1
        
        return mid+1 if target > nums[mid] else mid
