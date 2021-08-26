class Solution:
    def isValid(self, s: str) -> bool:
        sign = {
            '(':')',
            '{':'}',
            '[':']'
        }
        startSign = ['(', '{', '[']
        endSign = [')', '}', ']']
        
        start = 0
        if s[start] in endSign:
            return False
        for i in range(1, len(s)):
            if s[i] == sign.get(s[start]) and not ((i-start+1)%2) and self.countPair(s[start:i+1]):
                start = i+1
            if start == i:
                continue
            if start > len(s) -1:
                return True
        return False
    
    def countPair(self, s:str) -> bool:
        count = {
            '(':0,
            '{':0,
            '[':0,
            ')':0,
            '}':0,
            ']':0
        }
        for i in s:
            count[i] += 1
            if i == ')' and count.get(i) > count.get('(') or i == '}' and count.get(i) > count.get('{') or i == ']' and count.get(i) > count.get('['):
                return False
        if count.get('(') != count.get(')') or count.get('{') != count.get('}') or count.get('[') != count.get(']'):
            return False
        return True
            