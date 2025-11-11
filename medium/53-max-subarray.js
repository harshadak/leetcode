/*
LeetCode Problem 53: Maximum Subarray
https://leetcode.com/problems/maximum-subarray/
*/

// Kadane's algorithm - Compare current sum + current value with current value to set current sum. Compare current sum with max sum to set max sum. O(n) solution

var maxSubArray = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let maxSum = nums[0];
    let currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if ((currSum + nums[i]) < nums[i]) {
            currSum = nums[i];
        } else {
            currSum += nums[i];
        }

        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
};