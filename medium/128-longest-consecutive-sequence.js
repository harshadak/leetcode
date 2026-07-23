/*
LeetCode Problem 128. Longest Consecutive Sequence
https://leetcode.com/problems/longest-consecutive-sequence/
*/

var longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let currentLength = 0;
    let maxLength = 0;

    numSet.forEach(num => {
        currentLength = 1;
        let current = num;

        if (!numSet.has(num - 1)) {
            while (numSet.has(current + 1)) {
                current = current + 1;
                currentLength++;
            }
            maxLength = Math.max(currentLength, maxLength);
        }
    });

    return Math.max(currentLength, maxLength);
};