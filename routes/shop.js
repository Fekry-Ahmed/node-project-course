const path = require('path');

const express = require('express');

const { getProucts } = require('../controllers/products');

const router = express.Router();

router.get('/', getProucts);

module.exports = router;
