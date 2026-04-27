/*
LeetCode Problem 1535: Find the Winner of an Array Game
https://leetcode.com/problems/find-the-winner-of-an-array-game/
*/

var getWinner = function (arr, k) {
    if (k > arr.length) return Math.max(...arr);

    let currentWinner = arr[0];
    let winCount = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentWinner > arr[i]) {
            winCount++;
        } else {
            currentWinner = arr[i];
            winCount = 1;
        }

        if (winCount === k) return currentWinner;
    }
    return currentWinner;
};