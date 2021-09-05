import java.util.HashMap;

class Solution {
    public boolean wordPattern(String pattern, String s) {
        HashMap dict = new HashMap();
		String[] sepArray = s.split("\\s+");
        if(pattern.length()!=sepArray.length) return false;
        
		for(int i=0;i<pattern.length();i++){
			char charP =pattern.charAt(i);
			String sepS = sepArray[i];
			if(!dict.containsKey(charP)){
				if(!dict.containsValue(sepS)){
					dict.put(charP, sepS);
					continue;
				}else{
					return false;
				} 
			} else {
                if (dict.get(charP).equals(sepS)){
                    continue;
                } else {
                    return false;
                }
            }
		}
        return true;
    }
}