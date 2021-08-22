class Solution:
    def intToRoman(self, num: int) -> str:
        symbol = ["M", "CM", "D", "CD", "C", "XC",
                  "L", "XL", "X", "IX", "V", "IV", "I"]
        value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        answer = ''

        for i in range(len(value)):
            while num >= value[i]:
                answer = answer + symbol[i]
                num = num - value[i]

        return answer
