/*
Leetcode Problem 118. Pascal's Triangle
https://leetcode.com/problems/pascals-triangle/
*/

var generate = function (numRows) {
    if (numRows === 1) return [[1]];
    let result = [[1], [1, 1]];

    while (result.length < numRows) {
        let nextRow = [];
        const prevRow = result[result.length - 1];

        for (let i = 0; i < prevRow.length + 1; i++) {
            if (i === 0 || i === prevRow.length) {
                nextRow.push(1);
            } else {
                nextRow.push(prevRow[i - 1] + prevRow[i]);
            }
        }
        result.push(nextRow);
    }

    return result;
};