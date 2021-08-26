/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxl = 1;
  let start = 0;
  const reverse = (s) => {
    return s.split("").reverse().join("");
  };

  if (s.length === 0 || s === reverse(s)) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    if (i - maxl >= 1) {
      if (
        s.slice(i - maxl - 1, i + 1) === reverse(s.slice(i - maxl - 1, i + 1))
      ) {
        start = i - maxl - 1;
        maxl += 2;
      }
    }

    if (i - maxl >= 0) {
      if (s.slice(i - maxl, i + 1) === reverse(s.slice(i - maxl, i + 1))) {
        start = i - maxl;
        maxl += 1;
      }
    }
  }

  return s.slice(start, start + maxl);
};

const test_cases = [
  "borcdubqiupahpwjizjjbkncelfazeqynfbrnzuvbhjnyvrlkdyfyjjxnprfocrmisugizsgvhszooktdwhehojbrdbtgkiwkhpfjfcstwcajiuediebdhukqnroxbgtvottummbypokdljjvnthcbesoyigscekrqswdpalnjnhcnqrarxuufzzmkwizptyvjhpfidgmskuaggtpxqisdlyloznkarxofzeeyvteynluofuhbllyiszszbwnsglqjkignusarxsjvctpgiwnhdufmfpanfwxjwlmhgllzsmdpncbwnsbdtsvrjybynifywkulqnzprcxockbhrhvnwxrkvwumyieazclcviumvormynbryaziijpdinwatwqppamfiqfiojgwkvfzyxadyfjrgmtttvlgkqghgbcfhkigfojjkhskzenlpasyozcsuccdxhulcubsgomvcrbqwakrraesfifecmoztayrdjicypakrrneulfbqqxtrdelggedvloebqaztmfyfkhuonrognejxpesmwgnmnnnamvkxqvzrgzdqtvuhccryeowywmbixktnkqnwzlzfvloyqcageugmjqihyjxhssmhkfzxpzxmgpjgsduogfolnkkqizitbvvgrkczmojxnabruwwzxxqcevdwvtiigwckpxnnxxxdhxpgomncttjutrsvyrqcfwxhexhaguddkiesmfrqfjfdaqbkeqinwicphktffuwcazlmerdhraufbpcznbuipmymipxbsdhuesmcwnkdvilqbnkaglloswcpqzdggnhjdkkumfuzihilrpcvemwllicoqiugobhrwdxtoefynqmccamhdtxujfudbglmiwqklriolqfkknbmindxtljulnxhipsieyohnczddabrxzjmompbtnnxvivmoyfzfrxlufowtqzojfclmatthjtbhotdoheusnpirwicbtyrcuojsdmfcx",
]; //
// const test_cases = ["babad", "cbbd", "a", "ac", "ccc", "cccc", "aacbcaa"];

test_cases.forEach((c) => {
  palindromic = longestPalindrome(c);
  console.log(`${c}: \t${palindromic} `);
});
