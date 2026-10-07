/* LeetCode Problem 22: Generate Parentheses
https://leetcode.com/problems/generate-parentheses/
*/

var generateParenthesis = function (n) {
    // 3 open and 3 close parenthesis
    const result = [];
    backtrack('', 0, 0);
    return result;

    function backtrack(currString, openCount, closeCount) {
        if (currString.length === n * 2) {
            result.push(currString);
        }

        if (openCount < n) {
            backtrack(currString + '(', openCount + 1, closeCount);
        }

        if (closeCount < openCount) {
            backtrack(currString + ')', openCount, closeCount + 1);
        }
    }
};