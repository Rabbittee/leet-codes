# Construct Quad Tree

1. Calculate the middle of grid, split it to 4 squares.
2. Check if all data in squares are same, if true, it is leaf node and return
3. It is not leaf node, so we need to go further into next 4 pieces square.

## Time complexity O(n^3)
## Space complexity O(n)