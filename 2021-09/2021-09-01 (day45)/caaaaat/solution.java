class Solution {
    public boolean divisorGame(int n) {
        boolean[] dp = new boolean[n+1];
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j < i; j++) {
                if (i % j != 0) continue;
                if (!dp[i - j]) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }
}