# Design Browser History

## Solution

### Step 1

Create a hash table be a map.

### Step 2

Run loop to check each wordDict element.

### Step 3

Use a function check. If string is empty , it means that run finish so return true.
If map get string return false means not run over return false.
Other rule, means not realy over, has to continue.

### Step 4

To check word if it has. So split string to check if map can get that. then remove the word.
and return check.

If it be true, then return true.

Other rule, then set string which has been removed something and with false.

### Complexity

- Space complexity

  Linked list is `O(1)`,

- Time complexity

  for loop `O(n^2)`
