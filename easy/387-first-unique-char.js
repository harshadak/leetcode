/* LeetCode Problem 387: First Unique Character in a String
https://leetcode.com/problems/first-unique-character-in-a-string/
*/

var firstUniqChar = function (s) {
    let charMap = new Map();

    for (let char of s) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (charMap.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};