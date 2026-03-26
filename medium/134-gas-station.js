/*
LeetCode Problem 134: Gas Station
https://leetcode.com/problems/gas-station/
*/

var canCompleteCircuit = function (gas, cost) {
    let start = 0;
    let totalTank = 0;
    let currentTank = 0;

    for (let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];
        totalTank += diff;
        currentTank += diff;

        if (currentTank < 0) {
            start = i + 1;
            currentTank = 0;
        }
    }

    return totalTank < 0 ? -1 : start;
};