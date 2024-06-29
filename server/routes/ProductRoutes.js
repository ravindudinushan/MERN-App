var express = require('express');
var router = express.Router();
let ProductController = require('../controller/ProductController');

/* GET users listing. */
router.get('/all', ProductController.getAllProducts);
router.post('/save', ProductController.saveProduct)

module.exports = router;
