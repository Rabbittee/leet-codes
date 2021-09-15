class Solution:
    def simplifyPath(self, path: str) -> str:

        path = path.replace('//','/')
        
        cur_path = []
        for elem in path.split('/'):
            if elem == '' or elem == '.':
                continue
                
            if elem != '..':
                cur_path.append(elem)
            else:
                if len(cur_path)==0:
                    continue
                    
                cur_path.pop()
                
        return '/'+'/'.join(cur_path)
