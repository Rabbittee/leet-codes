/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // flag use string for first add (avoid error).
    let flag = "";
    // final element directly pluse 1.
    digits[digits.length - 1] = digits[digits.length - 1] + 1;

    digits.reverse().forEach((item, index) => {
        // use flag to findout which element need pluse 1.
        if (index === (flag + 1)) {
            item = item + 1;
            digits[index] = item;
        }
        if ((item % 10) === 0 && item !== 0) {
            digits[index] = 0;
            flag = index;
            // if the length become lager than before we can use push(1)
            if (index + 1 === digits.length) {
                digits.push(1);
            }
        }
    })
    return digits.reverse();
};