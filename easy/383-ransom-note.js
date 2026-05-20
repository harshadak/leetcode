/*
Leetcode Problem 383. Ransom Note
https://leetcode.com/problems/ransom-note/
*/

var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;

    const ransomMap = {};

    for (const letter of ransomNote) {
        ransomMap[letter] = (ransomMap[letter] || 0) + 1; // {a:2}
    }

    for (const letter of magazine) {
        if ((ransomMap[letter] !== undefined) && (ransomMap[letter] > 0)) {
            ransomMap[letter]--;
        }
    }

    return Object.values(ransomMap).every(val => val === 0);
};