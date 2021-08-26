class Solution:
    def __init__(self):
        self.max_palindrome = ''

    def checkPalindrome(self, s: str) -> bool:
        return s == s[::-1]

    def replacePalindrome(self, s: str) -> bool:
        if len(s) > len(self.max_palindrome):
            self.max_palindrome = s

    def findNext(self, s: str, start: int, end: int) -> bool:
        palindromic = s[start:end + 1]
        if self.checkPalindrome(palindromic):
            self.replacePalindrome(palindromic)
            return False
        return True

    def longestPalindrome(self, s: str) -> str:
        self.max_palindrome = s[0]
        for i, char in enumerate(s):
            end_index = len(s)
            if end_index - i < len(self.max_palindrome):
                break

            while True:
                end_index = s.rfind(char, i + 1, end_index)
                if end_index < 0:
                    break

                if len(self.max_palindrome) > end_index - i + 1:
                    break

                next = self.findNext(s, i, end_index)
                if not next:
                    break

        return self.max_palindrome

if __name__ == '__main__':
    solution = Solution()

    test_cases = ["babad", "cbbd", "a", "ac", "ccc", "cccc", "aacbcaa"]

    for case in test_cases:
        palindromic = solution.longestPalindrome(case)
        print(f'{case}: \t{palindromic}')