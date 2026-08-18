/*
    Leetcode 733. Flood Fill
    https://leetcode.com/problems/flood-fill/
*/

var floodFill = function (image, sr, sc, color) {
    let originalColor = image[sr][sc];
    if (originalColor === color) return image;

    function recursiveFloodFill(row, col) {
        if (row < 0 || col < 0 || row >= image.length || col >= image[0].length) return;
        if (image[row][col] !== originalColor) return;

        image[row][col] = color;

        recursiveFloodFill(row + 1, col); //  down
        recursiveFloodFill(row - 1, col); // up
        recursiveFloodFill(row, col - 1); // left
        recursiveFloodFill(row, col + 1); // right
    }

    recursiveFloodFill(sr, sc);
    return image;
};