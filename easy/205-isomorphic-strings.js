/*
205. Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings/
*/

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    const sToT = new Map();
    const tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (sToT.has(sChar) && (sToT.get(sChar) !== tChar)) return false;
        if (tToS.has(tChar) && (tToS.get(tChar) !== sChar)) return false;

        sToT.set(sChar, tChar);
        tToS.set(tChar, sChar);
    }
    return true;
};