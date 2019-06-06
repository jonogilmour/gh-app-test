'use strict';

const { CacheStrategy } = require('./cacheStrategy');
const { RequestCache } = require('./requestCache');
const { RedisCache } = require('./redisCache');
const { MockCache } = require('./mockCache');

/**
 * @module cacheStrategies
 * @description A number of different caching strategies for CacheService.
 */
module.exports = {
    CacheStrategy,
    RequestCache,
    RedisCache,
    MockCache
};
