/*
LeetCode Problem 242: Valid Anagram
https://leetcode.com/problems/valid-anagram/
*/

// Add characters from `s` in a map and check if those characters exist in t and decrement the count. If count of all keys is 0, it is an anagram.

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let anagramMap = {};

    for (let i = 0; i < s.length; i++) {
        if (anagramMap[s[i]] !== undefined) {
            anagramMap[s[i]]++;
        } else {
            anagramMap[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (anagramMap[t[i]] !== undefined) {
            anagramMap[t[i]]--;
        }
    }

    // return Object.keys(anagramMap).every(key => anagramMap[key] === 0);
    return Object.values(anagramMap).every(val => val === 0);
};