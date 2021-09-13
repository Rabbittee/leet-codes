class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int], flag=0) -> int:
        if len(students) == 0:
            return 0

        if students[0] == sandwiches[0]:
            return self.countStudents(students[1:], sandwiches[1:])
        elif flag == len(students):
            return flag
        else:
            return self.countStudents(students[1:] + [students[0]], sandwiches, flag + 1)
