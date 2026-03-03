/*
    Leetcode 509. Fibonacci Number
    https://leetcode.com/problems/fibonacci-number/
*/

var fib = function (n) {
    const memo = new Map();

    function fibHelper(n) {
        if (n < 2) return n;

        if (memo.has(n)) return memo.get(n);

        const result = fibHelper(n - 1) + fibHelper(n - 2);
        memo.set(n, result);
        return result;
    }

    return fibHelper(n);
};