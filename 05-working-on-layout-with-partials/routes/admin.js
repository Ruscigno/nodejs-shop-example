const path = require('path');

const express = require('express');

const produtcsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', produtcsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', produtcsController.postAddProduct);

module.exports = router;