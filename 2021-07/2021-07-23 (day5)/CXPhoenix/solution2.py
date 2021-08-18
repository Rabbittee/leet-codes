class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        def searchHelper(l: int, r: int):
            mid = (r + l) // 2
            if r <= l:
                if target > nums[l]:
                    return l+1
                else:
                    return l
            if target > nums[mid]:
                return searchHelper(mid+1, r)
            else:
                return searchHelper(l, mid-1)
        return searchHelper(0, len(nums)-1)
        