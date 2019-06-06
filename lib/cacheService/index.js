'use strict';

const AsyncLock = require('async-lock');
const { DEFAULT_LOGGER } = require('../container/constants');
/**
 * @module cacheService
 * @description Handles loading/saving values from/to caches.
 */

const lock = new AsyncLock();

/**
 * Acquires an asynchronous lock under a particular key, until the done() function is called. This is used to lock
 * potentially dangerous code blocks from being run concurrently in asynchronous execution.
 *
 * Any function that tries to acquire a lock under the same key will be queued and will run only after the previous lock
 * is released.
 *
 * @param {Object} obj - An object.
 * @param {String} obj.key - The unique key to lock down.
 * @returns {Promise<Function>} A promise that acquires the lock, and resolves to a function 'done' that will release
 *  the lock when called.
 */
const acquireLock = ({ key }) => (
    new Promise(resolve => {
        lock.acquire(key, done => {
            resolve(() => {
                done(null, {});
            });
        });
    })
);

/**
 * @class CacheService
 * @classdesc Handles the caching of values using different strategies to get/set/verify cache values. Handles
 * concurrency in the scenario that two calls are made for the same non-existent cache value by blocking the second
 * call, using a promise which is resolved when the cache value is ready. This prevents duplicate calls being made.
 * @hideconstructor
 */
class CacheService {
    /**
     * Gets a value from the cache. If a cache miss occurs, the value is built and saved to the cache as well.
     *
     * @param {Object} obj - An object.
     * @param {CacheStrategy} obj.cache - The caching cache object to use to get/set/verify cache values.
     * @param {String} obj.key - The unique cache key that maps to the cached value.
     * @param {Function} obj.build - Used to create the value on a cache miss.
     * @param {Container} obj.container - Universal dependency container.
     * @returns {Any} The cached value.
     */
    static async get({ cache, key, build, container }) {
        const existingValue = await cache.get(key);
    }
}

module.exports = {
    CacheService
};
