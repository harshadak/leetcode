/*
LeetCode Problem 657. Robot Return to Origin
https://leetcode.com/problems/robot-return-to-origin/
*/

var judgeCircle = function (moves) {
    let x = 0;
    let y = 0;

    for (const move of moves) {
        switch (move) {
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;
            case "L":
                x--;
                break;
            case "R":
                x++;
                break;
        }
    }

    if (x === 0 && y === 0) {
        return true;
    } else {
        return false;
    }
};