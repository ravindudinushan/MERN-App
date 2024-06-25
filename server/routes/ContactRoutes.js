const express = require('express');
const router = express.Router();
router.post('/submit', function (req, res){
    const requestBody = req.body;
    console.log(requestBody);
    res.send("Contact details received..!");
});

module.exports = router;