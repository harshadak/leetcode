/*
605. Can Place Flowers
https://leetcode.com/problems/can-place-flowers/
*/

var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;

    for (let i = 0; i < flowerbed.length; i++) {
        const left = (i === 0) ? 0 : flowerbed[i - 1];
        const right = (i === flowerbed.length - 1) ? 0 : flowerbed[i + 1];

        if (flowerbed[i] === 0 && left === 0 && right === 0) {
            flowerbed[i] = 1;
            n--;
            if (n === 0) return true;
        }
    }

    return n === 0;
};