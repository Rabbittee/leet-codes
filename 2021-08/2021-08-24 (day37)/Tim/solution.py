def maxProfit(self, prices: List[int]) -> int:
        # buy low, sell high
        st_idx = 0
        find_st = True
        find_ed = False
        profit = 0
        prices.append(0)  
        for i in range(len(prices)-1):
            if find_st:
                if prices[i+1]>prices[i]:
                    st_idx = i # i is the local minumum
                    find_st = False
                    find_ed = True
                    continue
                
            if find_ed:
                if prices[i+1]<prices[i]:
                    profit += (prices[i]-prices[st_idx])
                    find_st = True
                    find_ed = False
                
        return profit
