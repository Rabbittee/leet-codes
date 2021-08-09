class NestedIterator:
    def __init__(self, nestedList: [NestedInteger]):
        # flatten first and save to res
        def flatten(nestedList,res):
            if not type(nestedList) is list:
                # this is the final element, no matter it is an int or list
                if nestedList.isInteger():
                    res.append(nestedList.getInteger())
                else:
                    flatten(nestedList.getList(),res)
                return
            
            for lst in nestedList:
                if lst.isInteger():
                    res.append(lst.getInteger())
                for i_lst in lst.getList():
                    flatten(i_lst,res)

        res = []
        flatten(nestedList,res)
        self.res = res
        
    def next(self) -> int:
        val = self.res[0]
        del self.res[0]
        return val
    
    def hasNext(self) -> bool:
        if len(self.res)!=0:
            return True
        return False
