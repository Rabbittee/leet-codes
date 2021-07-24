class Solution {
public:
    int lengthOfLongestSubstring(string s) {
    int start = 0, tempLength = 0, length = 0;
    unordered_map<char, int> map;// map for stored char count
    for (int end = 0; end < s.length(); end++){
      map[s[end]]++;// record char counts
      while(map[s[end]] > 1){ // if record char count > 0
        map[s[start]]--;// remove fisrt char of substring 
        start++; // move first char to next one
      }
      tempLength = end - start + 1; // count new substring lenght
      length = tempLength > length ? tempLength : length; // if larger than old max length, replace
    }
    return length;
    }
};