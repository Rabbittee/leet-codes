class Solution
{
public:
    string longestPalindrome(string s)
    {
        int start = 0;
        int maxLength = 1;
        int size = s.length();
        //odd length string progrogress
        for (int i = 0; i < size; i++)
        {
            // if odd length select previous char and next char as start
            int j = i - 1;
            int k = i + 1;
            int length = 1; // count in center char
            // check bound and is if Palindrome, s[j] should equals s[k]
            while (j >= 0 && k < size && s[j] == s[k])
            {
                length = length + 2; // move 2 char, so add 2 char
                j = j - 1;
                k = k + 1;
            }
            // compare length of this time palindrome we get with max length
            // if larger, set start as j
            if (maxLength < length)
            {
                maxLength = length;
                start = j + 1;
            }
        }
        //odd length string progrogress
        for (int i = 0; i < size; i++)
        {
            int j = i - 1;
            int k = i;
            int length = 0; // even legnth string 
            while (j >= 0 && k < size && s[j] == s[k])
            {
                length = length + 2;
                j = j - 1;
                k = k + 1;
            }
            if (maxLength < length)
            {
                maxLength = length;
                start = j + 1;
            }
        }
        return s.substr(start, maxLength);
    };
};
