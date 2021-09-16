function strStr(haystack: string, needle: string): number {
    if (needle === '') {
        return 0;
    }
    
    let point = 0;
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[point]) {            
            if (point === needle.length - 1) {
                return i - needle.length + 1;
            }
            point++;
            continue;
        }
        i -= point;
        point = 0;
    }
    return -1;
};