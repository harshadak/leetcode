/*
LeetCode Problem 1: Two Sum
https://leetcode.com/problems/two-sum/
*/

// Brute force solution for the Two Sum problem

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// Efficient O(n) solution using a hash map

// Store each number’s index; check if diff exists.

var twoSum = function(nums, target) {
    const sumMap = {};
    for (let i = 0; i < nums.length; i++) {

        let diff = target - nums[i];
        if (sumMap[diff] !== undefined) {
            return [sumMap[diff], i];
        }

        sumMap[nums[i]] = i;
    }
};
