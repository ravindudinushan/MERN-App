var express = require('express');
var router = express.Router();
let ProductController = require('../controller/ProductController');

/* GET users listing. */
router.get('/all', ProductController.getAllProducts);

module.exports = router;
