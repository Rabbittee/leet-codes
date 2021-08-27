class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        
        sum_cost2 = cost[0] # two steps before the current point
        sum_cost1 = cost[1] # one step 
    
        for i in range(2,len(cost)):
            tmp = sum_cost1
            sum_cost1 = cost[i] + min(sum_cost1,sum_cost2)        
            sum_cost2 = tmp
            
        return min(sum_cost1,sum_cost2)
