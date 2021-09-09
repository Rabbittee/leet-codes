class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = Counter(nums1) & Counter(nums2) 
        return list(result.elements())