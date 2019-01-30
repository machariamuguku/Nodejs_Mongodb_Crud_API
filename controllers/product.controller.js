const Product = require('../models/product.model');

// test controller
exports.test = function (req, res) {
    res.send('Greetings from the test controller!!');
};

// create product controller
exports.product_create = function (req, res, next) {
    var product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

// read products controller
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

// update products controller
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

// delete products controller
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};