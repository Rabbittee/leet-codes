/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  let n = matrix.length;
  for(i=0; i< n;i++) {
      for(j=i; j< n;j++) {
          if(i !== j) {
              let temp = matrix[i][j]
              matrix[i][j] = matrix[j][i]
              matrix[j][i] = temp
          }
          
      }
  }
  
  for(i=0; i<n; i++) {
      for(j=0;j< n/2;j++) {
          let temp = matrix[i][j]
          matrix[i][j] = matrix[i][n-j-1]
          matrix[i][n-j-1] = temp
      }
  }
};