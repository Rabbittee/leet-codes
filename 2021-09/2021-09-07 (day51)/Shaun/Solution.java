class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        HashMap<Integer,Integer> dictA = new HashMap<Integer,Integer>();
		int[] answer;
		ArrayList al = new ArrayList();
		
		for(int element:nums1){
			if(dictA.containsKey(element)){
				dictA.replace(element, dictA.get(element)+1);
				continue;
			}
			dictA.put(element, 1);
		}
		
		for(int i=0;i<nums2.length;i++){
			if(dictA.containsKey(nums2[i])){
				if(dictA.get(nums2[i])>0){
					dictA.replace(nums2[i], dictA.get(nums2[i])-1);
					al.add(nums2[i]);
				}
			}
		}
        answer = new int[al.size()];
		for(int i=0;i<answer.length;i++){
			answer[i]=(int) al.get(i);
		}
        return answer;
    }
}