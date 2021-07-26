const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let result = 0;
  let index = s.length - 1;

  while (0 <= index) {
    const current = map[s[index]];
    const next = map[s[index - 1]];

    if (current > next) {
      result += current - next;

      index -= 1;
    } else {
      result += current;
    }

    index -= 1;
  }

  return result;
}

function main() {
  [
    { test: "III", expect: 3 },
    { test: "XII", expect: 12 },
    { test: "XXVII", expect: 27 },
    { test: "IV", expect: 4 },
    //
  ].forEach(({ test, expect }) => {
    const result = romanToInt(test);

    console.assert(
      result === expect,
      `romanToInt(${test}) \
        return ${result} \
        expect ${expect}`
    );
  });
}

main();
