/*
LeetCode Problem 350: Intersection of Two Arrays II
https://leetcode.com/problems/intersection-of-two-arrays-ii
*/

var intersect = function (nums1, nums2) {
    const freqMap = {};
    const result = [];

    for (const num of nums1) {
        if (freqMap[num] !== undefined) {
            freqMap[num]++;
        } else {
            freqMap[num] = 1;
        }
    }

    for (const num of nums2) {
        if ((freqMap[num] !== undefined) && freqMap[num] > 0) {
            result.push(num);
            freqMap[num]--;
        }
    }

    return result;
};