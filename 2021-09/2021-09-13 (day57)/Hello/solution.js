/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches, disappoint = 0) {
  if (disappoint === students.length) return disappoint;

  if (students[0] === sandwiches[0]) {
    return countStudents(students.slice(1), sandwiches.slice(1));
  }

  return countStudents(
    [...students.slice(1), students[0]],
    sandwiches,
    disappoint + 1
  );
}
