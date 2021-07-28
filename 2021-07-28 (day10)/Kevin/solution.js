/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const roman = {
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

    const keys = Object.keys(roman);
    let rest = num;

    return keys.reduce((result, key) => {
        const value = roman[key];
        if (rest / value > 0) {
            let count = Math.floor(rest / value);
            rest = rest % value;
            while (count > 0) {
                result += key;
                count--;
            }
        }
        return result;
    }, "");
};
