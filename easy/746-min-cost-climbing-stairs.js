/*
LeetCode Problem 746: Min Cost Climbing Stairs
https://leetcode.com/problems/min-cost-climbing-stairs/
*/

// Using an array O(n) space complexity solution
var minCostClimbingStairs = function (cost) {
    const dp = [];
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};

// Without using an array O(1) space complexity solution
var minCostClimbingStairs = function (cost) {
    let prev2 = cost[0];
    let prev1 = cost[1];

    for (let i = 2; i < cost.length; i++) {
        const current = cost[i] + Math.min(prev2, prev1);
        prev2 = prev1;
        prev1 = current;
    }

    return Math.min(prev1, prev2);
};