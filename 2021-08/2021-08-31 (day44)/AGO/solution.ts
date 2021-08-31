function getRow(rowIndex: number): number[] {
    let result: number[] = new Array();
    for(let i=0;i<=rowIndex;i+=1){
        let temp = 1;
        let next = 1;
        for(let j = 1;j<i;j+=1){
            temp = result[j];
            result[j] = next+result[j];
            next = temp;
        }
        result.push(1);
        console.log(result);
    }
    return result;
};