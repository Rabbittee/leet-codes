1. string length has to be even to have match.
2. loop from s[0], if the element is the left half, push it to a new array
3. then look for the next element, if s[i+1] is the right half, then check if the last element in array (arr[arr.length-1]) is the left half. If yes, remove it from array using pop()
4. if all have match, array should be empty and return true
