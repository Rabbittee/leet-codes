# Solution

### ideas:

1. Notice to rules, all of signs are paired is `TRUE`.
2. String length out of range or not have even count of char.
3. If string head char is `ends`, failed.
4. Put the all `starts` you get into a list to make a stack.
5. If current char is `ends`, comparing with `starts` in stack. if paired , `starts` removed from stack.
6. To proof all `starts` are compared with `ends`, stack size must be zero.

---

### full codes:

```java
class Solution {
    public boolean isValid(String s) {
      if(s.isEmpty() || s.length()>Math.pow(10,4) || s.length()%2!=0)
        return false;
      
      String starts = "({[", ends = ")}]";
      boolean valid = false, get_head = false;
      ArrayList<String> header = new ArrayList<String>();
      
      for(int i=0;i<s.length();i++){
        String current = s.charAt(i) + "";
        
        if (starts.indexOf(current)!=-1) {
          header.add(current);
        } else if (ends.indexOf(current)!=-1) {
          if (header.size()>0) {
            if (starts.indexOf(header.get(header.size()-1)) == ends.indexOf(current)) {
              valid = true;
              header.remove(header.size()-1);
              continue;
            }
          }
          
          valid = false;
          break;
        } else {
          valid = false;
          break;
        }
      }
      
      return valid && header.size()==0;
    }
}
```