const express = require('express');
const router = express.Router();

// Require controllers
const product_controller = require('../controllers/product.controller');

// test route
router.get('/test', product_controller.test);
// create route
router.post('/create', product_controller.product_create);
// read route
router.get('/:id', product_controller.product_details);
// update a product route
router.put('/:id/update', product_controller.product_update);
// delete product route
router.delete('/:id/delete', product_controller.product_delete);


module.exports = router;