/*
Leetcode Problem 1480: Running Sum of 1d Array
https://leetcode.com/problems/running-sum-of-1d-array
*/

var runningSum = function (nums) {
    let result = [];
    let sum = 0;

    for (const num of nums) {
        sum += num;
        result.push(sum);
    }

    return result;
};