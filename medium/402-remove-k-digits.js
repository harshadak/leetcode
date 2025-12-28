/**
Leetcode Problem 402: Remove K Digits
https://leetcode.com/problems/remove-k-digits/
*/

var removeKdigits = function (num, k) {
    let numStack = [];

    // Iterate the entire string to form the numStack
    for (let i = 0; i < num.length; i++) {
        let currDigit = num[i];

        // Pop from numStack while k > 0 and top of stack is greater than current digit
        while (k > 0 && numStack.length > 0 && numStack[numStack.length - 1] > currDigit) {
            numStack.pop();
            k--;
        }

        numStack.push(currDigit);
    }

    // Pop numStack from the end if k > 0
    while (k > 0 && numStack.length > 0) {
        numStack.pop();
        k--;
    }

    let res = numStack.join('');

    // remove trailing 0's from result string
    let idx = 0;
    while (idx < res.length && res[idx] === '0') {
        idx++;
    }
    res = res.slice(idx);

    return res.length === 0 ? '0' : res;
};