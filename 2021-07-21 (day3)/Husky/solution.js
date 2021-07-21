/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max_palindrome = s[0]
    for (let i = 0; i < s.length; i++) {
        let endIndex = s.length;
        console.log(s[i])

        if (endIndex - i < max_palindrome.length) {
            break
        }

        while (true) {
            const chars = s.slice(i, i + max_palindrome.length).split('').reverse().join('')
            endIndex = s.lastIndexOf(chars, endIndex - 1) + max_palindrome.length - 1
            console.log(chars, endIndex, max_palindrome)
            if (endIndex < 0 || endIndex - max_palindrome.length + i === i) {
                break
            }

            const chars_ = s.slice(i, endIndex + 1)
            const chars__ = chars_.split('').reverse().join('')

            console.log(chars_)
            if (chars_ === chars__ && chars_.length > max_palindrome.length) {
                max_palindrome = chars_
                console.log('123')
                break
            }
        }

        // console.log(endIndex)
    }

    return max_palindrome
};

// const test_cases = ["borcdubqiupahpwjizjjbkncelfazeqynfbrnzuvbhjnyvrlkdyfyjjxn  prfocrmisugizsgvhszooktdwhehojbrdbtgkiwkhpfjfcstwcajiuediebdhukqnroxbgtvottummbypokdljjvnthcbesoyigscekrqswdpalnjnhcnqrarxuufzzmkwizptyvjhpfidgmskuaggtpxqisdlyloznkarxofzeeyvteynluofuhbllyiszszbwnsglqjkignusarxsjvctpgiwnhdufmfpanfwxjwlmhgllzsmdpncbwnsbdtsvrjybynifywkulqnzprcxockbhrhvnwxrkvwumyieazclcviumvormynbryaziijpdinwatwqppamfiqfiojgwkvfzyxadyfjrgmtttvlgkqghgbcfhkigfojjkhskzenlpasyozcsuccdxhulcubsgomvcrbqwakrraesfifecmoztayrdjicypakrrneulfbqqxtrdelggedvloebqaztmfyfkhuonrognejxpesmwgnmnnnamvkxqvzrgzdqtvuhccryeowywmbixktnkqnwzlzfvloyqcageugmjqihyjxhssmhkfzxpzxmgpjgsduogfolnkkqizitbvvgrkczmojxnabruwwzxxqcevdwvtiigwckpxnnxxxdhxpgomncttjutrsvyrqcfwxhexhaguddkiesmfrqfjfdaqbkeqinwicphktffuwcazlmerdhraufbpcznbuipmymipxbsdhuesmcwnkdvilqbnkaglloswcpqzdggnhjdkkumfuzihilrpcvemwllicoqiugobhrwdxtoefynqmccamhdtxujfudbglmiwqklriolqfkknbmindxtljulnxhipsieyohnczddabrxzjmompbtnnxvivmoyfzfrxlufowtqzojfclmatthjtbhotdoheusnpirwicbtyrcuojsdmfcx"]; //
const test_cases = ["babad"] //, "cbbd", "a", "ac", "ccc", "cccc", "aacbcaa"

test_cases.forEach((c) => {
    palindromic = longestPalindrome(c)
    console.log(`${c}: \t${palindromic} `)
})
