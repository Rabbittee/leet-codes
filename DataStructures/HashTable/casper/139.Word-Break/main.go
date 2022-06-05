package main

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

func main() {
	println(wordBreak("leetcode", []string{"leet", "code"}))
}
