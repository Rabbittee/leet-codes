class Solution:
    def isValid(self, s: str) -> bool:
        sign = {
            '(':')',
            '{':'}',
            '[':']',
            ')':'(',
            '}':'{',
            ']':'['
        }
        startSign = ['(', '{', '[']
        endSign = [')', '}', ']']
        record = []
        for i in range(len(s)):
            if i == 0 and s[i] in endSign:
                return False
            try:
                if s[i] in endSign and sign[s[i]] != record.pop():
                    return False
            except:
                return False
            if s[i] in startSign:
                record.append(s[i])
        return record == []
