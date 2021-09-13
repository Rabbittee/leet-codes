/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    
    let nowSandWiches = sandwiches.shift();
    let nowStudent;
    let queueCount = 0;
    
    while(queueCount !== students.length) {
        
        nowStudent = students.shift();
        
        if (nowStudent === nowSandWiches) {
            nowSandWiches = sandwiches.shift();
            queueCount = 0;
        } else {
            students.push(nowStudent);
            queueCount++;
        }
    }
    return queueCount;
};