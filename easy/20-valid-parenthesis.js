/*
LeetCode Problem 20: Valid Parentheses
https://leetcode.com/problems/valid-parentheses/
*/

// Checks if the input string of parentheses is valid
var isValid = function (s) {
    if (s.length === 1) return false;

    let validMap = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    let validStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            validStack.push(s[i]);
        } else {
            let poppedItem = validStack.pop();
            if (s[i] !== validMap[poppedItem]) {
                return false;
            }
        }
    }
    if (validStack.length === 0) {
        return true;
    } else {
        return false;
    }
};