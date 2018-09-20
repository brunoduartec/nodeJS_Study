#! /usr/bin/env node

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Product = require('./models/productModel')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var products = []


function productCreate(image_name, product_name, product_price, product_description) {
    productDetail = {
        image_name: image_name,
        product_name: product_name,
        product_price: product_price,
        product_description: product_description
    }

    var product = new Product(productDetail);

    product.save(function (err) {
        if (err) {
            console.log("Failed to add product");
            return
        }
        console.log('New Product: ' + product);
        products.push(product)
    });
}
//(image_name, product_name, product_price, product_description) {

function createProducts(cb) {
    async.parallel([
        function (callback) {
            productCreate('http://localhost:3001/images/banana.jpg', 'Banana', '1', 'Banana nanica', callback);
        },
        function (callback) {
            productCreate('http://localhost:3001/images/abacaxi.jpg', 'Abacaxi', '2', 'Abacaxi macio', callback);
        },
        function (callback) {
            productCreate('http://localhost:3001/images/abacate.jpg', 'Abacate', '10', 'Abacate perto da faze de validade', callback);
        },
        function (callback) {
            productCreate('http://localhost:3001/images/carambola.jpg', 'Carambola', '20', 'Fruta estrela', callback);
        },
        function (callback) {
            productCreate('http://localhost:3001/images/frutapao.jpg', 'Fruta Pão', '5', 'Você deveria experimentar', callback);
        },

    ],
        // optional callback
        cb);
}



async.series([
    createProducts,
],
    // Optional callback
    function (err, results) {
        // if (err) {
        //     console.log('FINAL ERR: ' + err);
        // }
        // else {
        //     console.log('BOOKInstances: ' + bookinstances);

        // }
        // All done, disconnect from database
        mongoose.connection.close();
    });



