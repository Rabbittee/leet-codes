
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> answer = new ArrayList<>();
        if(numRows <= 0){
            return answer;
        }

        answer.add(new ArrayList<>());
        answer.get(0).add(1);

        for(int x = 1;x < numRows ; x++){
            List<Integer> list = new ArrayList<>();
            List<Integer> lastList = answer.get(x-1);
            list.add(1);

            for(int y = 1;y<x;y++){
                int num = lastList.get(y-1)+lastList.get(y);
                list.add(num);
            }
            list.add(1);
            answer.add(list);
        }
        return answer;
    }
}