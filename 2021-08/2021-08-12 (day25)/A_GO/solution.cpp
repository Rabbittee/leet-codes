class Solution
{
public:
  vector<vector<string>> groupAnagrams(vector<string> &strs)
  {
    unordered_map<string, vector<string>> anagrams;
    for (int i = 0; i < strs.size(); i++)
    {
      // an array store count of alphabet in str
      int counter[26] = {0};
      for (int j = 0; j < strs[i].length(); j++)
      {
        counter[strs[i][j] - 'a']++;
      }
      // content is store number of alphabet like cab => 1a1b1c
      string content = "";
      for (int k = 0; k < 26; k++)
      {
        content += string(counter[k], k + 'a');
      }
      // a map store same anagrams of words
      anagrams[content].push_back(strs[i]);
    }

    // map to array
    vector<vector<string>> res;
    for (auto anagram : anagrams)
    {
      res.push_back(anagram.second);
    }
    return res;
  }
};