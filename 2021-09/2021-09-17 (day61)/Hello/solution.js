/**
 * @param {number} columnNumber
 * @return {string}
 */
function convertToTitle(columnNumber) {
  columnNumber -= 1;

  const base = 26;

  const char = String.fromCharCode((columnNumber % base) + 65);

  return base > columnNumber
    ? char
    : convertToTitle(Math.floor(columnNumber / base)) + char;
}
