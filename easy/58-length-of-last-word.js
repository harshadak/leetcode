/*
Leetcode Problem 58. Length of Last Word
https://leetcode.com/problems/length-of-last-word/
*/

var lengthOfLastWord = function (s) {
    // Naive approach – Time O(N) Space O(N)
    
    // const strArray = s.split(' ');

    // const resultArr = strArray.filter(str => str !== '');
    // return resultArr[resultArr.length - 1].length;

    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
        } else if (length > 0 && s[i] === ' ') {
            return length;
        }
    }

    return length;
};