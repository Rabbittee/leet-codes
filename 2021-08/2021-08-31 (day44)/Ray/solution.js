var getRow = function(rowIndex) {
    let record, i, j;
    let answer = [];
    for (i = 0; i <= rowIndex ; i++) {
        if(i === 0 || i === rowIndex) {
            answer.push(1);
        } else {
            answer.push(1);
            let tempAnswer = [];
            for ( j = 0 ; j < answer.length ; j++) {
                if (j === 0) {
                    tempAnswer.push(1);
                } else {
                    tempAnswer.push(answer[j-1] + answer[j]);   
                }
            }
            answer = [...tempAnswer];
        }
    }
    return answer;
};