class Solution:
    def gen_hash(self, nums) -> dist:
        hash_map = {}
        for n in nums:
            if n in hash_map:
                hash_map[n] += 1
            else:
                hash_map[n] = 1

        return hash_map

    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        hash_1 = self.gen_hash(nums1)

        output = []
        for n in nums2:
            if n in hash_1 and hash_1[n] > 0:
                hash_1[n] -= 1
                output.append(n)

        return output
