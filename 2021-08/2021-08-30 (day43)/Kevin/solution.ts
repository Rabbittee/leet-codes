function generate(numRows: number): number[][] {
    const result: number[][] = [];
    for (let i: number = 0; i < numRows; i++) {
        const currRow: number[] = [];
        currRow[0] = 1;
        currRow[i] = 1;

        if (i > 1) {
            const prevRow: number[] = result[i - 1];
            for (let j: number = 1; j < currRow.length - 1; j++) {
                currRow[j] = prevRow[j] + prevRow[j - 1];
            }
        }

        result.push(currRow);
    }
    return result;
}
