/*
LeetCode 200. Number of Islands
https://leetcode.com/problems/number-of-islands/
*/

var numIslands = function (grid) {
    let islandCount = 0;

    const dfs = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] !== '1') {
            return;
        } else {
            grid[row][col] = '0';
            dfs(row - 1, col) // up
            dfs(row + 1, col) // down
            dfs(row, col - 1) // left
            dfs(row, col + 1) // right
        }
    };

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                islandCount++;
                dfs(row, col);
            }
        }
    }

    return islandCount;
};