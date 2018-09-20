var express = require('express');
var router = express.Router();

var Product = require('../controllers/productController');


/* GET home page. */
router.get('/', Product.product_list)

module.exports = router;
