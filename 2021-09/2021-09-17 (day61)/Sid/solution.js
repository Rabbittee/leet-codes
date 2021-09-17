/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber, result = '') => {
  columnNumber--
  const char = String.fromCharCode((columnNumber % 26) + 65)

  if (columnNumber < 26) return char + result

  return convertToTitle(Math.trunc(columnNumber / 26), char + result)
}
