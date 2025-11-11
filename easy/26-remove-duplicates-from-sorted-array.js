/*
LeetCode Problem 26: Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

// Removes duplicates from a sorted array in-place and returns the new length
// Key idea: Use two pointers, one for iterating through the array (fast) and one for tracking the position of unique elements (slow).
var removeDuplicates = function (nums) {
    if (nums.length === 1) return 1;

    let slow = 0;

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
};