class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        def binary(nl, target, left, right):
            if left > right:
                return -1
            mid = (left+right) // 2
            if target == nl[mid]:
                return mid
            if target > nl[mid]:
                return binary(nl, target, mid + 1, right)
            if target < nl[mid]:
                return binary(nl, target, left, mid - 1)
        i = 1
        count = 1
        while i < len(nums):
            index = binary(nums, nums[i], 0, i-1)
            if index > -1:
                del(nums[i])
                continue
            count += 1
            i += 1
        return count
