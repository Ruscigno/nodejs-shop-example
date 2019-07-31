const path = require('path');

const express = require('express');

const produtcsController = require('../controllers/products');

const router = express.Router();

router.get('/', produtcsController.getProducts);

module.exports = router;
