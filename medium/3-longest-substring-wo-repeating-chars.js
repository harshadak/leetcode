/* LeetCode Problem 3: Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let maxLen = 0;
    let subSet = new Set();

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        while (subSet.has(char)) {
            subSet.delete(s[left]);
            left++;
        }

        subSet.add(char);

        const windowLen = right - left + 1;
        if (windowLen > maxLen) {
            maxLen = windowLen;
        }
    }

    return maxLen;
};