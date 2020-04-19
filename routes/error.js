const express = require('express');
const router = express.Router();
let rate = 0.75;

router.get('/', function(req, res, next) {

    if(Math.random() > rate){
        res.status(500)
    }else {
        res.send('ok')
    }
    res.end()
});

router.get('/rate/:rate', function(req, res, next) {
    rate = req.params.rate;
    res.end();
});

module.exports = router;
