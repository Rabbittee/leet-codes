/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function(triangle) {
    
    let triangleLength = triangle.length;
    
    for (let i = triangleLength - 2 ; i > -1 ; i--) {
        for (let j = 0 ; j <= i ; j++) {
            
            let left = triangle[i+1][j];
            let right = triangle[i+1][j+1];
            
            triangle[i][j] =  (left < right) ? (triangle[i][j] + left) : (triangle[i][j] + right);
        }
    }
    
    return triangle[0][0];
};

// Runtime: 64 ms, faster than 99.73% of JavaScript online submissions for Triangle.
// Memory Usage: 39.5 MB, less than 63.86% of JavaScript online submissions for Triangle.