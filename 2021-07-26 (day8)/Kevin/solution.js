/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const array = s.split("");

    let result = 0;

    for (let i = 0; i < array.length; i++) {
        let current = roman[array[i]];

        if (i === array.length - 1) {
            return result + current;
        }

        const next = roman[array[i + 1]];

        if (current < next) {
            current = current * -1;
        }

        result += current;
    }
};
