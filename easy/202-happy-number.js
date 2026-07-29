/*
LeetCode 202. Happy Number
https://leetcode.com/problems/happy-number/
*/

var isHappy = function (n) {
    // n = 19
    // 1 + 81 = 82
    // 64 + 4 = 68
    // 36 + 64 = 100
    // 1 + 0 + 0 = 1

    // n = 2
    // 4 + 0 = 4
    // 16 + 0 = 16
    // 1 + 36 = 37
    // 9 + 49 = 58
    // 25 + 64 = 89
    // 64 + 81 = 145
    // 1 + 16 + 25 = 42
    // 16 + 4 = 20
    // 4 + 0 = 4 --> cycle repeats

    const seen = new Set();

    while (n !== 1) {
        let squareSum = digitSquareSum(n);
        if (seen.has(squareSum)) {
            return false;
        } else {
            seen.add(squareSum);
            n = squareSum;
        }
    }

    if (n === 1) {
        return true;
    }

    function digitSquareSum(num) {
        const digitArray = String(num).split('').map(Number);
        const result = digitArray.reduce((acc, num) => (
            acc += num * num
        ), 0);

        return result;
    }
};