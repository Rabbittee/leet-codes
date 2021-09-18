class RecentCounter {
    List<Integer> list;
    public RecentCounter() {
        list = new ArrayList<Integer>();
    }
    public int ping(int t) {
        list.add(t);
        int min = t-3000;
        int count = 0;
        for (Integer num : list) {
            if (num >= min && num <= t) {
                count++;
            }
        }
        return count;
    }
}