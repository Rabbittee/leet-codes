#### Idea: carefully tracking all the root values by recursion and check if the left node < root, and the right node > root.

#### optimization: 1. save node and its LR into hash instead of two lists; 2. when traversing the tree, track the min,max value of the "nodes", this should provide a shortcut to the left/right v.s. root comparision instead of going over a list.


#### Sorry run out of time for today, it is slow I know.



![][fig]

[fig]:./fig/fig1.png

