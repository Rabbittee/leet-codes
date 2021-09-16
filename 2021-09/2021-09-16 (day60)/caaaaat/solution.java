class Solution {
    public int strStr(String haystack, String needle) {
        if(!haystack.contains(needle)){return -1;}
        if(needle.length()== 0){return 0;}

        char[] main = haystack.toCharArray(), from = needle.toCharArray();
        for (int i = 0; i <= main.length - from.length; i++) {
            int j;
            for (j = 0; j < from.length; j++) {
                if (main[i + j] != from[j])
                    break;
            }
            if (j == from.length)
                return i;
        }
        return -1;
    }
}