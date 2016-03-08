'use strict';

const express = require('express'),
  router = express.Router(),
  path = require('path');

const rootPath = path.join(__dirname, '../..'),
  nodeModules = path.join(rootPath, 'node_modules'),
  appPath = path.join(rootPath, 'app'),
  assetspath = path.join(rootPath, 'assets');

router.use(express.static(nodeModules));
router.use(express.static(appPath));
router.use(express.static(assetspath));

module.exports = router;
