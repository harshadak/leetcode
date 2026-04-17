/*
    Leetcode 70. Climbing Stairs
    https://leetcode.com/problems/climbing-stairs/
*/

// Using an array O(n) space complexity solution
var climbStairs = function (n) {
    const dp = [];
    dp[1] = 1; // 1 way to climb 1 stair (take 1 step)
    dp[2] = 2; // 2 ways to climb 2 stairs (take 1+1 steps or take 2 steps)

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Without using an array O(1) space complexity solution
var climbStairs = function (n) {
    if (n === 1 || n === 2) return n;

    let prev1 = 2;
    let prev2 = 1;

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};