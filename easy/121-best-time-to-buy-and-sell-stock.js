/*
LeetCode Problem 121: Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

// Compare each value in the array with minPrice to set minPrice. Subtract minPrice from each value to calculate max profit.

var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        if ((prices[i] - minPrice) > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};