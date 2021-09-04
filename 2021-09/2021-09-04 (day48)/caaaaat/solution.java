class Solution {
    public boolean isIsomorphic(String s, String t) {
        Map map = new HashMap();
        if(s.length() != t.length() ){
            return false;
        }
        for(int i = 0 ;i <= s.length()-1;i++){
            char chars = s.charAt(i);
            char chart = t.charAt(i);

            if (!map.containsKey(chars)) {
                if (!map.containsValue(chart)) {
                    map.put(chars, chart);
                    continue;
                } else return false;
            }
            else {
                if ((char)map.get(chars) == chart) {
                    continue;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}