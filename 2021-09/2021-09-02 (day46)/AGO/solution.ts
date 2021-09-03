interface IHash{
    [key: string]: number
}
function isAnagram(s: string, t: string): boolean {
    let myMap:IHash = {};
    for(let i=0;i<s.length;i++){
        if(!myMap[s[i]]) myMap[s[i]] = 0;
        myMap[s[i]]++;
    }
    for(let i=0;i<t.length;i++){
        if(!myMap[t[i]]) return false;
        myMap[t[i]] -=1;
        if(myMap[t[i]] < 0) return false;
    }
    for (let key in myMap) {
        if (myMap[key] != 0) return false;         
    }
    return true;
};