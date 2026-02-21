/**
 * Problem understanding:
 * - We are creating a time-limited cache
 * - Each key-value pair expires after a given duration (ms)
 * - Methods:
 *   - set(key, value, duration): add key with expiration, return true if key existed
 *   - get(key): return value if not expired, else -1
 *   - count(): return number of non-expired keys
 *
 *  process:
 * - Use an object `cache` to store keys
 * - Each key stores:
 *   - val: the actual value
 *   - timer: a setTimeout reference for expiration
 * - On set:
 *   - If key exists → clear old timer, overwrite value, return true
 *   - If key doesn’t exist → add key, start timer, return false
 * - On get:
 *   - Return value if exists, else -1
 * - On count:
 *   - Return the number of keys in cache
 */

var TimeLimitedCache = function() {
    this.cache = {}; // store key: { val, timer }
};

// set 
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let result = false;

    // Check if key already exists
    if (this.cache.hasOwnProperty(key)) {
        result = true;

        // Clear the previous timer
        clearTimeout(this.cache[key].timer);
    }

    let ref = this; // for use inside setTimeout

    // Start new timer to delete key after duration
    let timeoutId = setTimeout(function() {
        delete ref.cache[key];
    }, duration);

    // Store value and timer
    this.cache[key] = { val: value, timer: timeoutId };

    return result; // true if key existed, false otherwise
};

// get 
TimeLimitedCache.prototype.get = function(key) {
    if (!this.cache.hasOwnProperty(key)) return -1; // expired or not found
    return this.cache[key].val; // return stored value
};

// count 
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cache).length; // number of active keys
};

// Example Usage 
let cache = new TimeLimitedCache();

// Add key=1 with value=42, duration 100ms
console.log(cache.set(1, 42, 100)); // false → new key

// Retrieve before expiration
console.log(cache.get(1)); // 42

// Count active keys
console.log(cache.count()); // 1

// After 150ms, key=1 expires
setTimeout(function() {
    console.log(cache.get(1)); // -1 → expired
    console.log(cache.count()); // 0 → empty
}, 150);
