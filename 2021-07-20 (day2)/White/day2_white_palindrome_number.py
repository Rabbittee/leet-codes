class Solution:
    def isPalindrome(self, x: int) -> bool:
        # 先排除負數
        if x >= 0:
            # 計算出字串長度、字串中間位置
            string_len = int(len(str(x)))
            first_tail = int(len(str(x))/2)
            
            # 判斷是否為奇數
            if(string_len %2== 1):
                # 如果只有單一字元就一定是回文
                if(string_len==1):
                    return True
                else:
                    # 否則就記錄右半部起始位置 因為是奇數所以要加1
                    second_start = first_tail+1   
            else:
                # 如果是偶數 右半部起始位置不用加1
                second_start = first_tail

            # 取得左半部字串    
            left_part = str(x)[0:first_tail]
            # 取得右半部反轉後字串
            right_part = ''.join(reversed(str(x)[second_start:]))
            
            # 比較左右半部字串內容
            if(left_part == right_part):
                return True
            else:
                return False
        else:
            return False