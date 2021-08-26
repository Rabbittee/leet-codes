class Solution:
    def longestPalindrome(self, s: str) -> str:
        # the answer is the string itself when the string length is smaller than 2.
        if len(s) < 2:
            return s
        
        # Set the record of the largest length of between two indexs.
        maxLengthIndexs = [0,0]
        
        # Set the loop to check every single case until the last element in string.
        for i in range(len(s)-1):
            subString = self.getRepeatIndexs(s, i, len(s)-1)
            if maxLengthIndexs[1] - maxLengthIndexs[0] < subString[1] - subString[0]:
                maxLengthIndexs = [i for i in subString]
        
        return s[maxLengthIndexs[0]:maxLengthIndexs[1]+1]
    
    # Set the base case which meets the  same as the target character to run recursives.
    def getRepeatIndexs(self, targetString: str, targetIndex:int, lastIndex:int) -> list:
        # I considered about if I got a string which the first letter is the same as the last letter but not palindromic string, it will drop the possible answer. So I add the palindromic checker in the condition.
        if targetString[targetIndex] == targetString[lastIndex] and self.checkPalindromic(targetString[targetIndex:lastIndex+1]):
            return [targetIndex, lastIndex]
        return self.getRepeatIndexs(targetString, targetIndex, lastIndex-1)
    
    # Checking the target string is the palndromic string or not.
    def checkPalindromic(self, target: str) -> bool:
        return target == target[::-1]
    
    