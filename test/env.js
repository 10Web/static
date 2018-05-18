'use strict';
const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;

process.env.HC_APP_CONFIG = JSON.stringify({
  serverRoot: '',
  appRoot: path.join(__dirname, '../')
});

function genAutoRouter() {
  let appRoot = process.cwd();
  let ctrlPath = path.join(appRoot, './controller');
  let cmd = JSON.stringify(process.argv[0]) + ' ' + path.resolve(require.resolve('api-annotation'), '../bin/api-annotation.js');
  if (!fs.existsSync(ctrlPath)) {
    console.log('[WARN] controller dir not fould, ignore gen auto_router');
    return;
  }

  cmd += ' -o ' + path.join(appRoot, './auto_router.js');
  cmd += ' ' + ctrlPath;
  let res = execSync(cmd, {
    cwd: appRoot,
    timeout: 10000
  }).toString();

  if (/ERROR/.test(res)) {
    console.error('gen_auto_router_failed:', res);
    throw res;
  }
}

genAutoRouter();

module.exports = require('../app');
