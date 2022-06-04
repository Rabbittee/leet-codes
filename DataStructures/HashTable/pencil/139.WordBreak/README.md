 # Solution(haven't solve...)

At first, I think this question want me check, is the `s` string can seperated completed with `wordDict`?

So my first solution is use `Arrays.prototype.includes` to check: is the `s` has the word in `wordDict` or not?
If there is the same word in `s`, then replace that word to empty string `""`.
At last, if there is still has word, that mean: this `s` can't seperated completed by `wordDict`, so return `false`.

But this solution has a mistake in input: `["a", "b", "bbb", "bbbb"]`

Until this test case, I felt I have a mistake on realize this question, maybe I need to reverse my method, use `wordDict`'s word to match `s`'s word, although the word in `wordDict` it's not `false`, the situation of `false` is the first letter in that word is match, but the continue word can't match. That's the `false` situation.


