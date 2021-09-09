class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        return [int(s) for s in str(int(''.join([str(i) for i in digits])) + 1)]
