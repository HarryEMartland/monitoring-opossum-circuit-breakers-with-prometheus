const express = require('express');
const router = express.Router();

module.exports = (errorService)=>{

    router.get('/', function (req, res) {
        errorService().then(response => {
            res.end(response);
        }).catch(e => {
            console.error(e)
            res.status(500)
            res.end(e.message);
        })
    });

    return router;
};
