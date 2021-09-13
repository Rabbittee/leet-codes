class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        xdict = Counter(students)
        for s in sandwiches:          
            if xdict[s] != 0:
                xdict[s] -= 1
            else:
                break
        return sum(xdict.values())