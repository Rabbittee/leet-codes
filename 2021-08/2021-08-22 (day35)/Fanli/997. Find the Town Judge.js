function findJudge(n, trust) {
    let degrees = Array(n).fill(0)    
    trust.forEach(t=>{
        degrees[t[0]-1]--
        degrees[t[1]-1]++
    })    
    for(let i=0;i<degrees.length;i++){
        if(degrees[i]===n-1) return i+1
    }   
    return -1
}