//------- Without converting to String-----//
function isPalindrome(x) {
  let num = x;
  let min = Math.pow(-2, 31);
  let max = Math.pow(2, 31) - 1;

  if (x < 0) return false;

  if (x < min || x > max) return 0;

  var revNumber = 0;

  while (x > 0) {
    revNumber = revNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (num === revNumber) {
    return true;
  } else {
    return false;
  }
}

//-------Convert to String -------//

// var isPalindrome = function (x) {
//   let min = Math.pow(-2, 31);
//   let max = Math.pow(2, 31) - 1;

//   if (x < 0) return false;
//   if (x < min || x > max) return 0;

//   let str1 = x.toString();
//   if (str1.length === 1) return true;

//   let str2 = [];

//   for (let i = str1.length - 1; i >= 0; i--) {
//     str2 = [...str2, str1[i]];
//     str2 = str2.join("");
//   }

//   if (str1 === str2) {
//     return true;
//   } else {
//     return false;
//   }
// };

console.log(isPalindrome(121));
console.log(isPalindrome(112));
console.log(isPalindrome(9999999999999999));
console.log(isPalindrome(-121));
