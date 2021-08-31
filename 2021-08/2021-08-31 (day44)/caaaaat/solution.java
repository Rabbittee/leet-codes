class Solution {
    public List<Integer> getRow(int rowIndex) {
        ArrayList<Integer> last=new ArrayList<Integer>();
        last.add(1);
        if(rowIndex==0)
            return last;
        for(int i=1;i<=rowIndex;i++){
            ArrayList<Integer> tmp=new ArrayList<Integer>();
            tmp.add(1);
            for(int j=1;j<i;j++){
                tmp.add(last.get(j)+last.get(j-1));
            }
            tmp.add(1);
            last=tmp;
        }
        return last;
    }
}