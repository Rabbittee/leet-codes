	public int countStudents(int[] students, int[] sandwiches) {
        if (students == null || students.length == 0) return 0;
        if (sandwiches == null || sandwiches.length == 0) return students.length;
        Queue<Integer> stu = new LinkedList<>();
        for (int student : students) {
            stu.offer(student);
        }
        for (int i = 0; i < sandwiches.length; i++) {
            if (stu.isEmpty()) {
                return 0;
            }
            int size = stu.size();
            boolean like = false;
            for (int s = 0; s < size; s++) {
                int poll = stu.poll();
                if (poll != sandwiches[i]) {
                    stu.offer(poll);
                } else {
                    like = true;
                    break;
                }
            }
            if (!like) {
                return size;
            }
        }
        return stu.size();
    }