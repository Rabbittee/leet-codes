class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        t = pattern
        s = s.split(' ')
        if len(s) != len(t):
            return False
        
        hash_s = {}
        hash_t = {}
        for i, (s_, t_) in enumerate(zip(s, t)):
            if s_ not in hash_s:
                hash_s[s_] = i
                if t_ in hash_t:
                    return False
                hash_t[t_] = i
            else:
                if t_ not in hash_t:
                    return False
                if hash_s[s_] != hash_t[t_]:
                    return False

        return True
