/* !
 * dtboost-example: app.js
 * Create   : 2017-03-09 15:18:43
 * CopyRight 2017 (c) Alibaba Group
 */
'use strict';

/**
 * app的主入口文件
 */
const Honeybee = require('hc-bee');
const app = new Honeybee();

/**
 * 注意：请务必调用  `app.ready(true)`
 */
app.ready(true);

/**
 * 注意，请务必导出app实例
 */
module.exports = app;
