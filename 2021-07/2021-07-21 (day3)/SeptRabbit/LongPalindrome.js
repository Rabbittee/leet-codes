var longestPalindrome = function (s) {
  if (1 > s.length || s.length > 1000) return 0;
  if (!isAlphanumeric(s)) return 0;
  if (s.length === 1) return s;
  if (s.length === 2 && s[0] !== s[1]) return s[0];

  let strList = [];
  let str;

  for (let i = 0; i < s.length; i++) {
    let strArr = [s[i]];
    for (let j = i + 1; j < s.length; j++) {
      strArr = [...strArr, s[j]];
      str = strArr.join("");
      if (isPalindrome(str)) {
        strList.push(str);
      }
    }
  }

  if (strList.length <= 0) return s[0];

  let temp = 0;
  let max;

  for (let i = 0; i < strList.length; i++) {
    if (strList[i].length > temp) {
      temp = strList[i].length;
      max = strList[i];
    }
  }
  return max;
};

function isAlphanumeric(inputtxt) {
  var letterNumber = /^[0-9a-zA-Z]+$/;
  if (inputtxt.value.match(letterNumber)) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(str) {
  const len = str.length;

  if (len <= 1) return true;
  if (str[0] !== str[len - 1]) return false;

  return isPalindrome(str.slice(1, -1));
}
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("abbabb"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("abcda"));
console.log(
  longestPalindrome(
    "rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip"
  )
);
