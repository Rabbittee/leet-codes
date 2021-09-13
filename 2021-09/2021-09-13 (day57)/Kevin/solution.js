/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches, failedTimes = 0) {
    if(students[0] === sandwiches[0]){
        students.shift()
        sandwiches.shift()
        failedTimes = 0
    } else {
        students.push(students.shift())
        failedTimes += 1
    }
    
    if(failedTimes === students.length) return failedTimes
    
    return countStudents(students, sandwiches, failedTimes)
};