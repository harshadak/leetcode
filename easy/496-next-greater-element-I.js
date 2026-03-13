/*
Leetcode Problem 496: Next Greater Element I
https://leetcode.com/problems/next-greater-element-i/
*/

// Solution I
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

// Solution II
var nextGreaterElement = function (nums1, nums2) {
    const numObj = {};
    const ans = [];
    const stack = [];

    for (const num of nums2) {

        while (stack.length > 0 && num > stack[stack.length - 1]) {
            const top = stack.pop();
            numObj[top] = num;
        }

        stack.push(num);
    }

    for (const s of stack) {
        numObj[s] = -1;
    }

    for (const num of nums1) {
        ans.push(numObj[num]);
    }

    return ans;
};