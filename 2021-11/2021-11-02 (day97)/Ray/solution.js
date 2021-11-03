var canConstruct = function(ransomNote, magazine) {
    let recordNote = ransomNote.split("").sort();
    let recordMag = magazine.split("").sort();
    let count = 0;
    for (let i = 0 ; i < recordMag.length ; i++) {
        if(recordNote[count] === recordMag[i]) {
            count++;
        }
    }
    return count === recordNote.length;
};