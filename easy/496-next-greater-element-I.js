/*
Leetcode Problem 496: Next Greater Element I
https://leetcode.com/problems/next-greater-element-i/
*/

var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let obj = {};
    let res = [];

    for (let i = 0; i < nums2.length; i++) {
        let current = nums2[i];

        while (stack.length > 0 && current > stack[stack.length - 1]) {
            let key = stack[stack.length - 1];
            stack.pop();
            obj[key] = current;
        }

        stack.push(current);
    }

    while (stack.length > 0) {
        let key = stack[stack.length - 1];
        obj[key] = -1;
        stack.pop();
    }

    for (let i = 0; i < nums1.length; i++) {
        let current = nums1[i];
        res.push(obj[current]);
    }

    return res;
};