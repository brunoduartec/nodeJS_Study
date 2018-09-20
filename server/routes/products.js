var express = require('express');
var router = express.Router();

// Require controller modules.
var product_controller = require('../controllers/productController');

/* GET users listing. */
router.get('/', product_controller.product_list);

// GET request for one Product.
router.get('/:id', product_controller.product_detail);

// PUT update a product
router.put('/:id', product_controller.product_detail_update);

/* POST create product. */
router.post('/', product_controller.product_detail_create);

module.exports = router;
