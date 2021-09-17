/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let str = '';

  while (columnNumber > 0) {
    // the decimal number of the char
    let char = columnNumber % 26;

    // letter Z
    if (char === 0) char = 26;

    // next
    columnNumber = (columnNumber - char) / 26;

    // translate to letter
    str = String.fromCharCode(char + 64) + str;
  }
  return str;
};
