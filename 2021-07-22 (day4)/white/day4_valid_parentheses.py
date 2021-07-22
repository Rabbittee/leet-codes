class Solution:
    def isValid(self, s: str) -> bool:
        # 題目要求的長度範圍
        if (1<= len(s) <= 10**4) :
            # 括號們用dict兩兩配對
            pairs = {'(':')', '[':']','{':'}'}
            stack = []
            
            for char in s:
                # 如果讀到的字元是屬於 dict的 key值(即左括號) 放進stack備用
                if char in pairs.keys():
                    stack.append(char)
                else:
                    # 如果是右括號 把stack裡的東西拿出來比較
                    if stack:
                        if pairs.get(stack.pop()) != char:
                            return False
                    else:
                        return False
            # 正確情況下字元全數讀完後 stack必須為空
            return True if not stack else False