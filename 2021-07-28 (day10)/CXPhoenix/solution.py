class Solution:
    def intToRoman(self, num: int) -> str:
        case={
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX',
            10: 'X',
            40: 'XL',
            50: 'L',
            90: 'XC',
            100: 'C',
            400: 'CD',
            500: 'D',
            900: 'CM',
            1000: 'M'
        }
        roman = ''
        now = 1
        while num > 0:
            tmp = ''
            n = (num % 10)*now
            if case.get(n):
                tmp += case.get(n)
            else:
                if n > (5 * now):
                    tmp += case.get(5*now)
                    n -= 5*now
                tmp += case.get(now)*(n//now)
            roman = tmp + roman
            now *= 10
            num //= 10
        return roman
