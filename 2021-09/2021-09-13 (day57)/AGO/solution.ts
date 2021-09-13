function countStudents(students: number[], sandwiches: number[]): number {
    let skipStudents = 0;
    while(sandwiches.length !== 0){
        if(students[0] === sandwiches[0]){
            students.shift();
            sandwiches.shift();
            skipStudents = 0;
            continue;
        }
        students.push(students.shift());
        skipStudents +=1;
        if(skipStudents == sandwiches.length) break;
    }
    return skipStudents;
};