function* combination(rest, length, active = "") {
  if (active.length === length) {
    yield active;

    return;
  }

  if (!rest.length) return;

  yield* combination(rest.slice(1), length, active.concat(rest[0]));
  yield* combination(rest.slice(1), length, active);
}

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
function CombinationIterator(characters, combinationLength) {
  const generator = combination(characters, combinationLength);

  let current = generator.next();

  /**
   * @return {string}
   */
  function next() {
    const value = current.value;

    current = generator.next();

    return value;
  }

  /**
   * @return {boolean}
   */
  function hasNext() {
    return !current.done;
  }

  return { next, hasNext };
}
