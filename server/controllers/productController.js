var Product = require('../models/productModel');


// Display list of all Products.
exports.product_list = function (req, res) {
    Product.find({}).sort("product_name").exec(function (err, products) {
        res.json(products);
    });
};

// Display detail page for a specific Product.
exports.product_detail = function (req, res) {
    Product.find({ _id: req.params.id }, function (err, product) {
        res.json(product);
    });
};


// Creates a product
exports.product_detail_create = function (req, res) {
    var jsonParsed = req.body;

    var productInstance = new Product({
        image_name: jsonParsed.image_name,
        product_name: jsonParsed.product_name,
        product_price: jsonParsed.product_price
    });

    // Save the new model instance, passing a callback
    productInstance.save(function (err) {
        if (err) return handleError(err);
        // saved!
    });
}

// Updates a product
exports.product_detail_update = function (req, res) {
    var jsonParsed = req.body;

    Product.find({ _id: jsonParsed._id }, function (err, product) {

        product.image_name = jsonParsed.image_name;
        product.product_name = jsonParsed.product_name;
        product.product_price = jsonParsed.product_price;

        product.save(function (err) {
            if (err) return handleError(err);
            // saved!
        });
    })
}


