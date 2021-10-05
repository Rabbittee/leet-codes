var findContentChildren = function(g, s) {
    // O ( nlog(n) )
    g = g.sort((a, b) => a-b);
    s = s.sort((a, b) => a-b);
    
    let contentChildren = 0;
    
    // O ( n )
    for (let i = 0 ; i < s.length ; i++) {
        if (g[contentChildren] <= s[i]) {
            contentChildren++;
        }
    }
    return contentChildren;
};