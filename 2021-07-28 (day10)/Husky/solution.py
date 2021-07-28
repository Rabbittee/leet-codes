class Solution:
    def intToRoman(self, num: int) -> str:
        roman = [
            (1, 'I'), (5, 'V'),
            (10, 'X'), (50, 'L'),
            (100, 'C'), (500, 'D'),
            (1000, 'M'), (5000, '')
        ]

        output = ''
        base = 10

        while(num > 0):
            mod = num % base
            num -= mod
            digit = ''

            one = roman[0]
            five = roman[1]

            if mod < one[0]*4:
                times = mod//one[0]
                digit += one[1]*times
            elif mod < five[0]:
                digit += one[1] + five[1]
            elif mod < one[0]*9:
                times = mod//one[0] - 5
                digit += five[1] + one[1]*times
            else:
                digit += one[1] + roman[2][1]

            output = digit + output
            base *= 10
            roman = roman[2:]

        return output
