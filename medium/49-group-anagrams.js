/*
LeetCode 49. Group Anagrams
https://leetcode.com/problems/group-anagrams/
*/

var groupAnagrams = function (strs) {

    const anagramMap = new Map();
    let result = [];

    for (const s of strs) {
        const sortedStr = s.split('').sort().join('');

        if (anagramMap.has(sortedStr)) {
            anagramMap.get(sortedStr).push(s);
        } else {
            anagramMap.set(sortedStr, [s]);
        }
    }

    for (const value of anagramMap.values()) {
        result.push(value);
    }

    return result;
};