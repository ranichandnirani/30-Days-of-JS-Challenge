/**
 * Problem understanding:
 * - We need to implement an EventEmitter class
 * - It supports:
 *   1. subscribe(eventName, callback)
 *   2. emit(eventName, args?)
 * - Multiple callbacks can be subscribed to the same event
 * - emit should call all callbacks in order and return their results
 * - subscribe should return an object with an unsubscribe() method
 *
 *  process:
 * - Each event name should map to a list of callbacks
 * - A Map is ideal for storing eventName → callbacks
 * - unsubscribe should remove only the specific callback
 * - emit should safely handle events with no listeners
 *
 * Approach:
 * - Use a Map to store event listeners
 * - On subscribe:
 *   - Create an array if event does not exist
 *   - Push the callback into the array
 *   - Return an unsubscribe function
 * - On emit:
 *   - If no listeners, return empty array
 *   - Call each listener with spread arguments
 *   - Collect and return results
 *
 * Time Complexity:
 * - subscribe: O(1)
 * - emit: O(n) where n = number of listeners
 * - unsubscribe: O(n)
 *
 * Space Complexity:
 * - O(n) for storing listeners
 */

class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, callback) {
        // Initialize event if it doesn't exist
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        const listeners = this.events.get(eventName);
        listeners.push(callback);

        // Return unsubscribe handler
        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    emit(eventName, args = []) {
        // No listeners → return empty array
        if (!this.events.has(eventName)) {
            return [];
        }

        const listeners = this.events.get(eventName);
        const result = [];

        // Execute all listeners
        for (const listener of listeners) {
            result.push(listener(...args));
        }

        return result;
    }
}

// Examples 

// Example 1
const emitter1 = new EventEmitter();
console.log(emitter1.emit("firstEvent")); // []
emitter1.subscribe("firstEvent", () => 5);
emitter1.subscribe("firstEvent", () => 6);
console.log(emitter1.emit("firstEvent")); // [5, 6]

// Example 2
const emitter2 = new EventEmitter();
emitter2.subscribe("firstEvent", (...args) => args.join(","));
console.log(emitter2.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]

// Example 3
const emitter3 = new EventEmitter();
const sub = emitter3.subscribe("firstEvent", (...args) => args.join(","));
console.log(emitter3.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
sub.unsubscribe();
console.log(emitter3.emit("firstEvent", [4, 5, 6])); // []

// Example 4
const emitter4 = new EventEmitter();
const s1 = emitter4.subscribe("firstEvent", x => x + 1);
emitter4.subscribe("firstEvent", x => x + 2);
s1.unsubscribe();
console.log(emitter4.emit("firstEvent", [5])); // [7]
