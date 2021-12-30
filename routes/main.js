__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

module.exports = router
