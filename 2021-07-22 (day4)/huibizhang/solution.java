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