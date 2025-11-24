const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

// Using res.render() to render Pug templates instead of res.sendFile()
// The template file is located at views/shop.pug
router.get('/', (req, res, next) => {
  res.render('shop');
});

module.exports = router;
