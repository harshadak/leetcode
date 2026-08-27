/*
    Leetcode 36. Valid Sudoku
    https://leetcode.com/problems/valid-sudoku/
*/

var isValidSudoku = function (board) {

    // Check rows
    for (let row = 0; row < board.length; row++) {
        const rowMap = new Map();

        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === '.') {
                continue;
            }

            if (rowMap.has(board[row][col])) {
                return false;
            }

            rowMap.set(board[row][col], 1);
        }
    }

    // Check columns
    for (let col = 0; col < board.length; col++) {
        const colMap = new Map();

        for (let row = 0; row < board.length; row++) {
            if (board[row][col] === ".") {
                continue;
            }

            if (colMap.has(board[row][col])) {
                return false;
            }

            colMap.set(board[row][col], 1);
        }
    }

    // Check 3 x 3 sub-boxes
    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxCol = 0; boxCol < 9; boxCol += 3) {
            const boxMap = new Map();

            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    if (board[boxRow + row][boxCol + col] === ".") {
                        continue;
                    }

                    if (boxMap.has(board[boxRow + row][boxCol + col])) {
                        return false;
                    }

                    boxMap.set(board[boxRow + row][boxCol + col], 1);
                }
            }
        }
    }
    return true;
};