class Solution:
    def firstUniqChar(self, s: str) -> int:
        
        # solution 1
        sav_s = {}
        for i in range(len(s)):
            if s[i] in sav_s:
                sav_s[s[i]] = -1
            else:
                sav_s[s[i]] = i
        
        min_idx = 1e5
        for k in sav_s.keys():
            if -1 < sav_s[k] < min_idx:
                min_idx = sav_s[k]
        if min_idx == 1e5:
            return -1
        else:
            return min_idx
        
        
        '''
        # solution 2
        # slow don't use it
        if len(s)==1:
            return 0
        sav_s = []
        for i in range(len(s)-1):
            for j in range(i+1,len(s)):
                if s[i]==s[j]:
                    sav_s.append(s[i])
                    break # break early, try the next s[i]
            if not s[i] in sav_s:
                return i
        if not s[i+1] in sav_s:
            return i+1
        else:
            return -1
        ''' 
                
