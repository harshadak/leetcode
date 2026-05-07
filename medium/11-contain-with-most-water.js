/*
LeetCode Problem 11: Container With Most Water
https://leetcode.com/problems/container-with-most-water/
*/

var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = -1;

    while (left < right) {

        const minHeight = Math.min(height[left], height[right]);
        const area = minHeight * (right - left);
        console.log('area = ', area);
        maxArea = Math.max(area, maxArea);

        if (height[right] <= height[left]) right--;
        else if (height[left] <= height[right]) left++;
        else break;
    }

    return maxArea;
};