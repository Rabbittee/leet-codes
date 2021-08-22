class Solution:
    def isPowerOfThree(self, n: int) -> bool:

        # 1. recursion
        if n==1:
            return True
        elif n<1:
            return False
        else:
            return self.isPowerOfThree(n/3)
   
   
        # 2. loop
        if n==1:
            return True
        while n>1:
            n /= 3
            if n==1:
                return True
        return False


        # 3. log
        from math import log10
        if n<1:
            return False
        return (log10(n)/log10(3)).is_integer()


        # 4. check board
        #[3**i for i in range(20)] # 2**31 ~> 3**19 
        return n in [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969, 14348907, 43046721, 129140163, 387420489, 1162261467]
            
        
        # 5. pure math
        return n>0 and 1162261467%n==0

        
        
        
