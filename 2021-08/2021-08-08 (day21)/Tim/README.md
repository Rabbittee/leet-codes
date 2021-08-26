### Idea: flatten the nestedList first, save it to list and use it by next() and hasNext()
  
> 1. Element in NestedInteger can be (a)non-list or (b)list  
>> If (a), then check if it is just a value/integer by .isInteger()  
>>> YES? append to list  
>>> NO?  continue to  
>>> Finally, since it is non-list, no more elements to loop with, return  

>> If (b), then loop through the list and repeat the step 1  

### Once I have the 1-D list then everything becomes straightforward

#### Some thoughts, can res be done in place (i.e. when calling next() and hasNext())without creating extra memory?


<<<<<<< HEAD
![][fig]


[fig]:./fig/pic1.png

