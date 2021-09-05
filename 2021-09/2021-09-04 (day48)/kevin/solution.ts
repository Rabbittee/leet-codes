function isIsomorphic(s: string, t: string): boolean {
    let index: number = 0;
    while (index < s.length) {
        const firstIndex: number = firstRepeatAlphabet(s, index);
        if (firstIndex === -1) {
            if (firstRepeatAlphabet(t, index) !== -1) return false;
        } else {
            if (t[firstIndex] !== t[index]) return false;
        }
        index++;
    }
    return true;
}

function firstRepeatAlphabet(letter: string, index: number): number {
    return letter.slice(0, index).indexOf(letter[index]);
}
