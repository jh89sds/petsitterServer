var express = require('express')
var db = require('./database')

var router = express.Router();

router.get('/users', function(req, res) {
    db.oneQuery(req, res, 'SELECT * FROM users')
})

router.put('/users', function(req, res) {
    let data = req.body
    db.none(req, res, 'INSERT INTO users(email, display_name) VALUES($1, $2)', [data.email, data.displayName])
})

module.exports = router;
