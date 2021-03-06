'use strict';

var common = require('./common');

/**
 * Retrieve a localized configuration value or the default if the localization
 * is unavailable.
 *
 * @param {String} configuration value
 * @param {String} language
 * @param {Object} Hexo configuration object
 * @param {String} Hexo locals object
 * @returns {*} localized or default configuration value
 */
exports._c = function _c(value, lang, config, locals) {
  return common._c(value, lang, config, locals.data);
};

/**
 * Retrieve the whole configuration, localized for the given language.
 *
 * @param {String} language
 * @param {Object} Hexo configuration object
 * @param {String} Hexo locals object
 * @returns {*} localized configuration
 */
exports.configuration = function configuration(lang, config, locals) {
  return common.configuration(lang, config, locals.data);
};
