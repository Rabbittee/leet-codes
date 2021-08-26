function findJudge(N: number, trust: number[][]): number {
    // create an array to store trust
    const array: number[] = new Array(N).fill(0);
  
    trust.forEach(([a, b]) => {
      // add one trust to a, means he trust one
      array[a - 1]++;
      // minus one trust to a, means he got one trust
      array[b - 1]--;
      console.log(array);
    });
    // find the one who not trust everyone and every one trust him
    const index = array.indexOf(-(N - 1));
    return index !== -1 ? index + 1 : index;
  }