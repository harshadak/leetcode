/*
LeetCode Problem 349: Intersection of Two Arrays
https://leetcode.com/problems/intersection-of-two-arrays/
*/

// Use a set to store unique values from nums1. Iterate through unique values of nums2 and check if they exist in the set. If they do, add to result array.

var intersection = function (nums1, nums2) {
    let resArr = [];
    let set = new Set(nums1);
    let uniqueNums2 = [...new Set(nums2)];

    for (num of uniqueNums2) {
        if (set.has(num)) {
            resArr.push(num);
        }
    }

    return resArr;
};