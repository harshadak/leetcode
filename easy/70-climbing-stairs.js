/*
    Leetcode 70. Climbing Stairs
    https://leetcode.com/problems/climbing-stairs/
*/

var climbStairs = function (n) {
    const dp = [];
    dp[1] = 1; // 1 way to climb 1 stair (take 1 step)
    dp[2] = 2; // 2 ways to climb 2 stairs (take 1+1 steps or take 2 steps)

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}