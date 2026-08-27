/*
    Leetcode 88. Merge Sorted Array
    https://leetcode.com/problems/merge-sorted-array/
*/

var merge = function (nums1, m, nums2, n) {
    let nums1Ind = m - 1;
    let nums2Ind = n - 1;
    let insertInd = nums1.length - 1;

    while (nums2Ind >= 0) {
        if (nums1Ind >= 0 && nums1[nums1Ind] > nums2[nums2Ind]) {
            nums1[insertInd] = nums1[nums1Ind];
            nums1Ind--;
        } else {
            nums1[insertInd] = nums2[nums2Ind];
            nums2Ind--;
        }
        insertInd--;
    }
};