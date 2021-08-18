/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  brackets = ["()", "{}", "[]"];
  bracketsStart = brackets.map((bracket) => bracket[0]).join("");
  bracketsMatch = brackets.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});

  stack = "";
  for (let char of s) {
    if (bracketsStart.includes(char)) {
      stack += bracketsMatch[char];
      continue;
    } else if (stack.length === 0) {
      return false;
    } else if (char === stack.slice(-1)) {
      stack = stack.slice(0, -1);
      continue;
    }
    return false;
  }
  return stack.length === 0;
};

const test_cases = ["()"];

test_cases.forEach((c) => {
  bool = isValid(c);
  console.log(`${c}: \t${bool}`);
});
