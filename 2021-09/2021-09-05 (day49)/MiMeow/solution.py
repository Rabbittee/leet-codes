class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        # 長度判斷，如果不同長度一定就是 false
        words_list = s.split(' ')
        words_len = len(words_list)
        pattern_len = len(pattern)
        if words_len != pattern_len:
            return False
        
        mapping_dict = dict()
        exsist_check_dict = dict()

        for index, val in enumerate(pattern):
            
            # 如果 patten key 存在
            if val in mapping_dict.keys():
                if mapping_dict[val] != words_list[index]:
                    return False
            else:
                # 檢查有沒有重複值在不同 key 中
                if words_list[index] in exsist_check_dict:
                    if exsist_check_dict[words_list[index]] != val:
                        return False
                else :
                    mapping_dict[val] = words_list[index]
                    exsist_check_dict[words_list[index]] = val

        return True