var express = require('express');
var router = express.Router();

var Product = require('../controllers/productController');


/* GET home page. */
router.get('/', Product.product_list)

/* GET product listing. */
router.get('/products', Product.product_list);
/* POST create product. */
router.post('/products', Product.product_detail_create);


// GET request for one Product.
router.get('/product/:id', Product.product_detail);
// PUT update a product
router.put('/product/:id', Product.product_detail_update);

module.exports = router;
