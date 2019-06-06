'use strict';

const { CacheStrategy } = require('./cacheStrategy');

/**
 * @class MockCache
 * @classdesc A dummy cache strategy for use in tests where the caching strategy is not important. Allows the verify
 * function to be overridden.
 */
class MockCache extends CacheStrategy {
    /**
     * Builds a new strategy.
     *
     * @param {Object} [cache] - Some initial cache object to attach. Defaults to an empty object.
     * @param {Function} [verify] - Verify function, to replace the default behaviour if needed.
     */
    constructor(cache = {}, verify) {
        super();
        this.cache = cache;
        this.scope = 'Dummy';
        if (verify) {
            this._verify = verify;
        }
    }

    /**
     * Gets a value from the dummy cache.
     *
     * @param {String|Number} key - The cache key to look up in the cache.
     * @returns {Any|undefined} The value from the cache, or undefined if it doesn't exist.
     */
    async get(key) {
        return this.cache[key];
    }

    /**
     * Sets a value in the dummy cache
     *
     * @param {String|Number} key - The cache key to set in the cache.
     * @param {Any} value - The value to set in the cache against the key. Must not be undefined.
     */
    async set(key, value) {
        this.cache[key] = value;
    }

    /**
     * Verifies that a value from the cache exists. Any cache value that is undefined is not valid.
     *
     * @param {Any} value - The value to verify.
     * @returns {Boolean} False if the value is undefined, otherwise true.
     */
    verify(value) {
        if (this._verify) {
            return this._verify(value);
        }
        return value !== undefined;
    }
}

module.exports = {
    MockCache
};
