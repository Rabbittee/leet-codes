#### Idea: Sorting all left/right parenthesis except the wrapping (outest one).

* Key #1. Valid parenthesis = (.........)  

For example:  
> n=2; parenthesis to be sorted: ( "()" )
  
> n=3; parenthesis to be sorted: ("(())")


* Key #2. Check if the parenthesis is valid by setting: "(" = 1 and ")" = -1, when accumulated value <0, then return False  
> "())"   -> False  
> "()("   -> True (may not finish yet)  
> "()())" -> False  
> "()()()" -> True  


* Add to result when all the left/right parenthesis are used and it is a valid parenthesis.


