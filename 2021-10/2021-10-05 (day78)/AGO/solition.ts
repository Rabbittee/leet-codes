function findContentChildren(g: number[], s: number[]): number {
    let content = 0;
    s.sort((a,b)=>a-b);
    g.sort((a,b)=>a-b);
    
    while(s.length > 0){
        if(s[0] >= g[0]){
          content +=1;
          g.shift();
        }
        s.shift();
    }
    return content;
};