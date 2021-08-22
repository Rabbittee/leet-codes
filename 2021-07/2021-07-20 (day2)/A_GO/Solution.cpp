class Solution {
public:
    bool isPalindrome(int x) {
        // remove nagtive value first
        if (x < 0)
            return false;
        // init a reference to store reverse
        int reverse = 0;
        // tmmp used to caculate
        int temp = x;
        // start to reverse
        while(temp != 0 ){
            // get remainder
            int lastDigit = temp % 10;
            // remove last digit
            temp = temp / 10;
            // create reverse value
            reverse = reverse * 10 + lastDigit;
        }
        // if reverse value equals origin value like 121 == reverse(121)
        // this int is Palindrome
        if (reverse == x){
            return true;
        }
        else{
            return false;
        }
    }
};