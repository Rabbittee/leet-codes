class Solution {
public:
    int reverse(int x) {
        int reverse = 0; // init result
        while(x!=0){     // loop until there is no digit to caculate
            // 1. get the last digit for compute
            int lastDigit = x % 10;
            // 2. remove last digit of input int
            x = x / 10;
            // 3. check if this time caculate result will out bound, return 0 and break loop
            if(reverse > INT_MAX/10 || ( reverse == INT_MAX/10 && lastDigit > INT_MAX % 10) ){
                reverse = 0;
                break;
            }
            if(reverse < INT_MIN/10 || (reverse == INT_MIN/10 && lastDigit < INT_MIN % 10)){
                reverse = 0;
                break;
            }
            // 4. padding previous result and insert last digit
            // in the loop it will look like this
            // (1) origin: 123 =>12, result: 0 => 0*10+3 = 3
            // (2) origin: 12 => 1 , result: 3 => 3*10+2 = 32
            reverse = reverse * 10 + lastDigit;
        }
        return reverse;
    }
};