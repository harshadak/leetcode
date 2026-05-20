/*
Leetcode Problem 1672: Richest Customer Wealth
https://leetcode.com/problems/richest-customer-wealth
*/

var maximumWealth = function (accounts) {
    let maxWealth = 0;

    for (const account of accounts) {
        const wealth = account.reduce((acc, sum) => acc + sum, 0);
        maxWealth = wealth > maxWealth ? wealth : maxWealth;
    }

    return maxWealth;
};