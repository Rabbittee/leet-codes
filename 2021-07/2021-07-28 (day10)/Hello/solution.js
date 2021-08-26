import { assertEquals } from "https://deno.land/std@0.103.0/testing/asserts.ts";

const map = {
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

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  let result = "";

  for (const char in map) {
    const value = map[char];

    while (num >= value) {
      result += char;
      num -= value;
    }
  }

  return result;
}

// === test ===
Deno.test("Test intToRoman", () => {
  [
    { test: 3, expected: "III" },
    { test: 4, expected: "IV" },
    { test: 9, expected: "IX" },
    { test: 58, expected: "LVIII" },
    //
  ].forEach(({ test, expected }) => {
    const actual = intToRoman(test);

    assertEquals(
      actual,
      expected,
      `intToRoman(${test}) return ${actual} but expect: ${expected}`
    );
  });
});
