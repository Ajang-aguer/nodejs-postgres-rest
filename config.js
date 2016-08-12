var promise = require('bluebird');

var options = {
  promiseLib : promise
};

var pgp = require('pg-promise')(options);
var con = {
  host: 'localhost',
  port: 5432,
  database: 'test2',
  user: 'postgres',
  password: 'postgres'
};

//var connectionString = 'postgres://postgres:postgres@localhost:5432/test2';

var db = pgp(con);

module.exports = db;
