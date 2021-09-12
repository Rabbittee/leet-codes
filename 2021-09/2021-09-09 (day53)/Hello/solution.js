/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  const digit = (digits.pop() || 0) + 1;

  return digit <= 9 ? [...digits, digit] : [...plusOne(digits), 0];
}
