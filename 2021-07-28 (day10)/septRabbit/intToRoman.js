var intToRoman = function (num) {
  //List all the Roman letter includin special cases. Must start with the biggest
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (key in roman) {
    const v = roman[key];
    //find num's range from the biggest: M. Substract value of M and add M to the result string.
    //If it's 2000, there will be 2 M.
    while (num > v) {
      num -= v;
      result = result + key;
    }
  }
  return result;
};

console.log(intToRoman(3));
console.log(intToRoman(1994));
