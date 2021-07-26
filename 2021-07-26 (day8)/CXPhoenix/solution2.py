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
            'IV': 4,
            'IX': 9,
            'XL': 40,
            'XC': 90,
            'CD': 400,
            'CM': 900
        }
        result = 0
        cursor = 0
        while cursor < len(s)-1:
            if roman.get(s[cursor]+s[cursor+1]):
                result += roman.get(s[cursor]+s[cursor+1])
                cursor += 2
            else:
                result += roman.get(s[cursor])
                cursor += 1
        if cursor <= len(s)-1:
            result += roman.get(s[len(s)-1])
        return result
