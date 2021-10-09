class Solution:
    def contain(self, height, start, end):
        return min(height[start], height[end])*(end - start)
    
    def maxArea(self, height: List[int]) -> int:
        start = 0
        end = len(height) - 1
        max_contain = 0
        
        while start < end:
            max_contain = max(max_contain, self.contain(height, start, end))
            
            if height[start] > height[end]:
                end -= 1
            else:
                start += 1

        return max_contain
