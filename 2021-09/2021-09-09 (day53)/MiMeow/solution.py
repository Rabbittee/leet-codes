class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        number_string = ''
        number_new = []

        # list 用字串串起來
        for number in digits:
            number_string += str(number)

        # 字串轉數字，數字 +1
        number_string = str(int(number_string) + 1)

        # 每一個位元拆開成新的 list
        for number in number_string:
            number_new.append(number)
            
        return number_new