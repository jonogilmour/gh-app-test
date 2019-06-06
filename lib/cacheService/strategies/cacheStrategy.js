'use strict';

/**
 * @class CacheStrategy
 * @classdesc Cache strategy interface. A strategy must implement all methods/properties to be considered valid.
 */
class CacheStrategy {
    constructor() {
        this.scope = '';
    }

    get() {}

    set() {}

    verify() {}
}

module.exports = {
    CacheStrategy
};
