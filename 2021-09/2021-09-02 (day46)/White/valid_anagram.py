class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        char_list = {}
        for char in s:
            if char not in char_list:
                char_list[char] = 1
            else:
                char_list[char] += 1

        for cp in t:
            if cp in char_list:
                char_list[cp] -= 1
            else:
                return False
                
        for k in list(char_list.keys()):
            if char_list[k] == 0:
                del char_list[k]
                
        return char_list == {}
