class Solution:
    def isValid(self, s: str) -> bool:
        brackets = ['()', '{}', '[]']
        brackets_start = [bracket[0] for bracket in brackets]
        brackets_match = {}
        for bracket in brackets:
            brackets_match[bracket[1]] = bracket[0]

        stack = [s[0]]
        for char in s[1:]:
            if char in brackets_start:
                stack.append(char)
                continue

            elif len(stack) == 0:
                return False

            elif  brackets_match[char] == stack[-1]:
                stack.pop()
                continue

            return False

        return len(stack) == 0