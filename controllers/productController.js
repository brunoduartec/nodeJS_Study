var Product = require('../models/product');

// Display list of all Products.
exports.product_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Product list');
};

// Display detail page for a specific Product.
exports.product_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Product detail: ' + req.params.id);
};


// Creates a product
exports.product_detail_create = function (req, res) {
    res.send('NOT IMPLEMENTED: Product detail Listing: ' + req.params.id);
}

// Updates a product
exports.product_detail_update = function (req, res) {
    res.send('NOT IMPLEMENTED: Product detail Update: ' + req.params.id);
}


