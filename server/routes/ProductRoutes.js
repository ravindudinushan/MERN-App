var express = require('express');
var router = express.Router();
let ProductController = require('../controller/ProductController');

/* GET users listing. */
router.get('/all', ProductController.getAllProducts);
router.post('/save', ProductController.saveProduct);
router.get('/:id', ProductController.getProduct);
router.delete('/:id', ProductController.deleteProduct);
router.put('/update/:id', ProductController.updateProduct);

module.exports = router;
