#### Idea: Sum of the sub-group = sum(arr)/3 = s

* 1. Check the accumulated sum cur_sum step-by-step, when cur_sum=s, reset cur_sum and add 1 to number of sub-groups n.

* 2. When it's done, check if the cur_sum=0, if so, it is due to the last reset where cur_sum=s. 

* 3. Additionally, check if n>=3 (note the sum=0 cases.)



![][fig]

[fig]:./fig/fig1.png

