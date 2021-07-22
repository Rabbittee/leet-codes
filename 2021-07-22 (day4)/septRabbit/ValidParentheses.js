var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arr.push(s[i]);
      //s="{[]}" s[0] arr=["{"], s[1] arr=["{", "["]
    } else if (s[i] === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
      //if found the right half and the previous is left half, remove left half from arr
    } else if (s[i] === "}" && arr[arr.length - 1] === "{") {
      arr.pop();
    } else if (s[i] === "]" && arr[arr.length - 1] === "[") {
      arr.pop();
    } else return false;
  }
  //if arr is empty, means all are match so return true
  return arr.length === 0;
};

// console.log(isValid("([)]"));
console.log(isValid("{[]}"));
// console.log(isValid("{]]}"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(){}}{"));
