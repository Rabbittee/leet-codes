class Solution:
    def canJump(self, nums: List[int]) -> bool:
        st = nums[0]
        idx = 0
        while True:
            if idx+st>=len(nums)-1:
                return True
            
            if st==0:
                return False
            
            # find the max reachable moves and its idx
            # the moves should also consider its starting index
            tmpmax = -1
            for i,ii in enumerate(nums[idx+1:idx+st+1]):
                if ii+i>tmpmax:
                    tmpmax = ii+i
                    tmpst = ii
                    tmpidx = i+1

            st = tmpst
            idx = idx + tmpidx

