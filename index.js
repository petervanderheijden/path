const { resolve } = require('path');

/**
 * Create an absolute path to the root directory.
 * @param {string} path - a relative path
 * @returns {string} - absolute path
 */
module.exports = (path) => resolve(path || '')