class Solution {
    public int majorityElement(int[] nums) {
		int majorNum=0;
		int record=0;

		HashMap<Integer,Integer> dict = new HashMap();
		for(int i:nums){
			if(dict.containsKey(i)){
				dict.replace(i, dict.get(i)+1);				
			}else dict.put(i, 1);
			
			if(dict.get(i)>record){
				record=dict.get(i);
				majorNum=i;
			}
		}
		return majorNum;
    }
}