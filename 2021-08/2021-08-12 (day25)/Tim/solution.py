class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # solution 1-- sort the array and use it as the key
        res = {}
        for i in strs:
            k = [ii for ii in i]
            k.sort()
            k = tuple(k)
            if k in res:
                res[k].append(i)
            else:
                res[k] = [i]
            
        return res.values()
    

        '''
        # solution 2-- brute force solution (timeout)
        res = []
        while len(strs)>0:
            tmp_s = []
            tmp_s.append(strs[0])
            if len(strs)==1:
                res.append(tmp_s)
                del strs[0]
                break
            
            new_strs = strs[1:]
            # check strs[0] v.s. strs[1:]
            for chk_s in strs[1:]:
                #print('checking:',strs[0],chk_s)
                # 1. check length
                if len(strs[0])==len(chk_s):
                    # 2. check every word in strs[0] also in chk_s and occurs once
                    chk_s_list = [ii for ii in chk_s]
                    for i in strs[0]:
                        if i in chk_s_list:
                            chk_s_list.remove(i)    
                        else:
                            # early break, cann't find i from chk_s, chk_s is not an anagram of strs[0]
                            break
                    if chk_s_list==[]:
                        tmp_s.append(chk_s)
                        #print('Pass! tmp_s=',tmp_s)
                        new_strs.remove(chk_s)
                    
            strs = new_strs
            res.append(tmp_s)
            
        return res
        '''
        
