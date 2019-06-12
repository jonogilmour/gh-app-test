'use strict';

const { CacheStrategy } = require('./cacheStrategy');

/**
 * @class RequestCache
 * @classdesc A cache strategy for getting/setting values in the request cache.
 */
class RequestCache extends CacheStrategy {
    /**
     * Builds a new strategy.
     *
     * @param {Request} request - The Hapi request object.
     */
    constructor(request) {

    }

    /**
     * Gets a value from the request cache.
     *
     * @param {String|Number} key - The cache key to look up in the cache.
     * @returns {Any|undefined} The value from the cache, or undefined if it doesn't exist.
     */
    async get(key) {

    }

    /**
     * Sets a value in the request cache
     *
     * @param {String|Number} key - The cache key to set in the cache.
     * @param {Any} value - The value to set in the cache against the key. Must not be undefined.
     */
    async set(key, value) {
    }

    /**
     * Verifies that a value from the cache exists. Any cache value that is undefined is not valid.
     *
     * @param {Any} value - The value to verify.
     * @returns {Boolean} False if the value is undefined, otherwise true.
     */
    verify(value) {
    }
}

module.exports = {
    RequestCache
};
