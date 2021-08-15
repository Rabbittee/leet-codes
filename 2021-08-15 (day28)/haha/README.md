question : [easy] 26. Remove Duplicates from Sorted Array

solution :
if hash table not has value push nums[i] to be only key and this.count add 1,  
hash table will like { 'value': index },
get hash table's values ex: [1,1,2], hash = { '1': 0, '2': 2 },
let tableVal get nums real data like tableVal = [ 0, 2 ] => [ 1, 2],
sort my result and if it is negative number return (a - b),
assign result to set nums
