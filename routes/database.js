var promise = require('bluebird')

var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);

var connectionString = 'postgres://postgres:q1w2e3r4!@localhost:5432/postgres';

let db = pgp(connectionString)
module.db = db

exports.oneQuery = function(req, res, query, value) {
    db.tx(t => {
        let task = t.query(query, value)
        return t.batch([task])
    }).then(data => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })
}

exports.none = function(req, res, query, value) {
    db.tx(t => {
        let task = t.none(query, value)
        return t.batch([task])
    }).then(data => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })
}