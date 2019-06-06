'use strict';

const Redis = require('../../redisClient');
const { CacheStrategy } = require('./cacheStrategy');

let _RedisCache;

/**
 * @class RedisCache
 * @classdesc A cache strategy for getting/setting values in the Redis cache.
 */
class RedisCache extends CacheStrategy {
    /**
     * Builds a new strategy
     */
    constructor() {
        if (_RedisCache) { return _RedisCache; }
        super();
        this.scope = 'RedisCache';
        _RedisCache = this;
    }

    /**
     * Gets a value from the Redis cache
     *
     * @param {String|Number} key - The cache key to look up in Redis.
     * @returns {String|null} The serialised value from the cache, or null if it doesn't exist.
     */
    async get(key) {
        return Redis.getAsync(key);
    }

    /**
     * Sets a value in the Redis cache
     *
     * @param {String} key - The cache key to set in the cache.
     * @param {String} value - The serialised value to set in the cache against the key.
     * @returns {Any} See return value of `Redis.setAsync`.
     */
    async set(key, value) {
        return Redis.setAsync(key, value);
    }

    /**
     * Verifies that a value from the Redis cache is valid. Any cache value that is null is not valid.
     *
     * @param {Any} value - The value to verify.
     * @returns {Boolean} False if the value is null, otherwise true.
     */
    verify(value) {
        return value !== null;
    }
}

module.exports = {
    RedisCache
};
