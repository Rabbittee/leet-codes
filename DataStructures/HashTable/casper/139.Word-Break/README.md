# 5.Hash Table


[139. Word Break](https://leetcode.com/problems/word-break/)

We use a nested iteration here, from the outer loop, we iterate the input string with it every index and use the inner loop to find all substrings from the index to the end of the index string if there is any substring in the word set, we set true to the matched array.

If the whole input string can be segmented into a space-separated sequence of one or more dictionary words, the last element in matched array should be true, and we return it at the end.

```go
func wordBreak(s string, wordDict []string) bool {
	wordSet := make(map[string]struct{})
	for _, v := range wordDict {
		wordSet[v] = struct{}{} // We use the HashMap as a HashSet here
	}

	matched := make([]bool, len(s)+1)
	matched[0] = true
	for i := 1; i <= len(s); i++ {
		for j := 0; j < i; j++ {
			if !matched[j] {
				continue
			}
			word := s[j:i]
			if _, ok := wordSet[word]; ok {
				matched[i] = true
			}
		}
	}
	return matched[len(matched)-1]
}
```
