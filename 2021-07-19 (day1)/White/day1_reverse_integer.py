class Solution:
    def reverse(self, x: int) -> int:
        if x >= 0:
            answer = int(''.join(reversed(str(x))))
        else:
            answer = int('-{}'.format(int(''.join(reversed(str(x)[1:])))))
        
        test = lambda y : y if (-2**31 < y < 2**31-1) else 0
        return test(answer)