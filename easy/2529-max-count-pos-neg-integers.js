/*
    Leetcode: 2529. Maximum Count of Positive Integer and Negative Integer
    https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
*/

const nums = [-2, -1, 0, 1, 2, 3];

var maximumCount = function (nums) {

    let left = 0;
    let right = nums.length;

    // Finding first non negative index meaning 0 or positive integer
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < 0) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let firstNonNeg = left; // index of first non negative integer meaning all integers before this index are negative

    left = 0;
    right = nums.length;

    // Finding first positive integer
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] <= 0) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let firstPos = left; // index of first positive integer meaning all integers before this index are non positive

    let negativeCount = firstNonNeg;
    let positiveCount = nums.length - firstPos; // total length - index of first positive integer gives us count of positive integers

    return Math.max(negativeCount, positiveCount);
};

console.log(maximumCount(nums));