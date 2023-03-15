const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {

            res.json({
                message: "hello",
                message1: "world" });

});

module.exports = router;