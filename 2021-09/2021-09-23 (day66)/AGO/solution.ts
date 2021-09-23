function isSubsequence(s: string, t: string): boolean {
    for(let char of t){
        if(char === s[0]){
            s = s.slice(1);
        }
    }
    return s.length === 0;
};