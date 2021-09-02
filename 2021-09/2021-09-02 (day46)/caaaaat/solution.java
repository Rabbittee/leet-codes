class Solution {
    public boolean isAnagram(String s, String t) {
        char[] sArray =s.toCharArray();
        char[] tArray = t.toCharArray();
        Arrays.sort(sArray);
        Arrays.sort(tArray);
        String ssortedArray = new String(sArray);
        String tsortedArray = new String(tArray);
        if(ssortedArray.equals(tsortedArray)){
            return true;
        }else{
            return false;
        }
    }
}