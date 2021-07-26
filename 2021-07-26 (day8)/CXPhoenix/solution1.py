class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        result = 0
        cursor = 0
        while cursor < len(s)-1:
            if s[cursor] == 'I':
                if s[cursor+1] == 'V' or s[cursor+1] == 'X':
                    result += abs(roman[s[cursor+1]]-roman[s[cursor]])
                    cursor += 2
                else:
                    result += roman[s[cursor]]
                    cursor += 1
            elif s[cursor] == 'X':
                if s[cursor+1] == 'L' or s[cursor+1] == 'C':
                    result += abs(roman[s[cursor+1]]-roman[s[cursor]])
                    cursor += 2
                else:
                    result += roman[s[cursor]]
                    cursor += 1
            elif s[cursor] == 'C':
                if s[cursor+1] == 'D' or s[cursor+1] == 'M':
                    result += abs(roman[s[cursor+1]]-roman[s[cursor]])
                    cursor += 2
                else:
                    result += roman[s[cursor]]
                    cursor += 1
            else:
                result += roman[s[cursor]]
                cursor += 1
        if cursor <= len(s)-1:
            result += roman[s[len(s)-1]]
        return result
