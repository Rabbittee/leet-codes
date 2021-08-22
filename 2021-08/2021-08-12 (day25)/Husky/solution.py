class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagramsMap = {}
        for s in strs:
            key = ''.join(sorted(s))
            if key in anagramsMap:
                anagramsMap[key].append(s)
            else:
                anagramsMap[key] = [s]

        return [anagrams for anagrams in anagramsMap.values()]