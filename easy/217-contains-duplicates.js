/*
LeetCode Problem 217: Contains Duplicate
https://leetcode.com/problems/contains-duplicate/
*/

var containsDuplicate = function (nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            return true;
        }

        map[nums[i]] = 1;
    }

    return false;
};