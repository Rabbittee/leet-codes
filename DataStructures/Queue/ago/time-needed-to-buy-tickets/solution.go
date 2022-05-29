func timeRequiredToBuy(tickets []int, k int) int {
    ans := tickets[k];
    for i := 0; i < len(tickets); i += 1 {
        if(i < k) {
            if tickets[i] > tickets[k] {
                ans += tickets[k]
            } else {
            ans += tickets[i]
            }
        }
        if(i > k) {
            if tickets[i] >= tickets[k] {
                ans += tickets[k] -1
            } else {
            ans += tickets[i]
            }
        }
    }
    return ans;
}