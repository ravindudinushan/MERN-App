var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.json(
    [
      {
        "id": 1,
        "name": "Spinach",
        "price": "200",
        "currency": "LKR",
        "image": "spinach.png"
      },
      {
        "id": 2,
        "name": "Beans",
        "price": "150",
        "currency": "LKR",
        "image": "beans.png"
      },
      {
        "id": 3,
        "name": "Tomato",
        "price": "250",
        "currency": "LKR",
        "image": "tomato.png"
      }
    ]
)
});

module.exports = router;
