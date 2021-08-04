/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let yIndex = 0
    let length = matrix.length
    let offset = length - 1
    
    while( yIndex < length ){
        matrix[yIndex].forEach( (each, xIndex) => {
            if( xIndex < Math.ceil(length/2) && yIndex < Math.floor(length/2) ){
                
                [ 
                    matrix[xIndex][offset - yIndex], 
                    matrix[offset - yIndex][offset - xIndex],
                    matrix[offset - xIndex][yIndex],
                    matrix[yIndex][xIndex]
                ] =
                [ 
                    matrix[yIndex][xIndex], 
                    matrix[xIndex][offset - yIndex],
                    matrix[offset - yIndex][offset - xIndex],
                    matrix[offset - xIndex][yIndex]
                ]
            }   
        })
        yIndex++
    }
    
};