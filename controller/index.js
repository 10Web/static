'use strict';

var config = require('../config');

/**
 * @api /
 * @description 用于社团首页的内容
 */
exports.homepage = function (req, callback) {
  callback(null, {
    tpl: 'homepage.html',
    data: {
      prefix: config.prefix === '/' ? '' : config.prefix
    }
  }, 'html');
};

/**
 * @api /about
 * @description 用于社团介绍的内容
 */
exports.about = function (req, callback) {
  callback(null, {
    tpl: 'about.html',
    data: {
      prefix: config.prefix === '/' ? '' : config.prefix
    }
  }, 'html');
};

/**
 * @api /opensource
 * @description 用于介绍社团的开源项目
 */
exports.opensource = function (req, callback) {
  callback(null, {
    tpl: 'opensource.html',
    data: {
      prefix: config.prefix === '/' ? '' : config.prefix
    }
  }, 'html');
};

/**
 * @api /:name
 * @description 用于处理未监听的界面
 */
exports.error = function (req, callback) {
  callback(null, {
    tpl: 'error.html',
    data: {
      prefix: config.prefix === '/' ? '' : config.prefix
    }
  }, 'html');
};
