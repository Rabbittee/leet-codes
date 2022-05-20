/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let stack = [];
  let array = s.split("");
  let size = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(") {
      stack.push(array[i]);

      if (stack.length > size) {
        size = stack.length;
      }
    } else if (array[i] === ")") {
      stack.pop();
    }
  }

  return size;
};
