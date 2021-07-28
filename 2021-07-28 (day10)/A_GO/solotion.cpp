class Solution
{
public:
  string intToRoman(int num)
  {
    // init roman string and int value map
    vector<string> roman = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
    vector<int> integers = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    // init result
    string result = "";
    for (int i = 0; i < roman.size(); i++)
    {
      // get q of num / intger
      int q = num / integers[i];
      // get rest value
      num %= integers[i];
      // add roman value
      for (int j = 0; j < q; j++)
      {
        result += roman[i];
      }
    }
    return result;
  }
};
