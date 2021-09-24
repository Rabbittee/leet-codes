class Solution:
    
    #=== solution 1. ===
    def getMaximumGenerated(self, n: int) -> int:
        if n<1:
            return n
        
        arr = [0,1]
        for i in range(2,n+1):
            if i%2==0:
                arr.append(arr[i//2])
            else:
                arr.append(arr[i//2]+arr[i//2+1])
                
        return max(arr)

    '''
    #=== solution 2. ===
    def getMaximumGenerated(self, n: int) -> int:
        memory = {0:0,1:1}
        def gen_array(n):
            if n in memory:
                return memory[n]
            
            for ii in range(2,n+1):
                if ii%2==0:
                    memory[ii] = gen_array(ii//2)
                else:
                    memory[ii] = gen_array(ii//2) + gen_array(ii//2+1)
                    
        # boundary case
        if n<1:
            return memory[n]
        gen_array(n)
        return max(memory.values())
    '''
                
            
            
