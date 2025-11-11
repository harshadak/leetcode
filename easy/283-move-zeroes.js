/*
LeetCode Problem 283: Move Zeroes
https://leetcode.com/problems/move-zeroes/
*/

// Moves all zeroes in the array to the end while maintaining the order of non-zero elements
// Key idea: Use two pointers, one for reading through the array (r) and one for writing non-zero elements (w).
var moveZeroes = function (nums) {
    let w = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            nums[w] = nums[r];
            w++;
        }
    }

    for (let i = w; i < nums.length; i++) {
        nums[i] = 0;
    }
};