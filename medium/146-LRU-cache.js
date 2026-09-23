/*
LeetCode Problem 146. LRU Cache
https://leetcode.com/problems/lru-cache/
*/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
        return -1;
    } else {
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
        this.cache.set(key, value);
    } else if (this.cache.size >= this.capacity) {
        const LRUkey = this.cache.keys().next().value;
        this.cache.delete(LRUkey);
        this.cache.set(key, value);
    } else {
        this.cache.set(key, value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */