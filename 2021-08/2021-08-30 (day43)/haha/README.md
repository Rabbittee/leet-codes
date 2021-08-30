Day43: [EASY] 118. Pascal's Triangle <br>
<br>
solution: <br>
because the first element value in each of row is 1 ,<br>
and n in row value is previous row [n-1] value + [n] value ,<br>
so we push the first value [1] in answer variable, <br>
then we for loop the numRows and record the previous row ,<br>
and set current row first value is [1] than we for loop each row again, <br>
then we push sum of the previous row [n-1] and previous row [n] in the current row,<br>
and when we end the for loop each row, we push the array in the answer .
