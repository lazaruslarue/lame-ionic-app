// typically, you'd require your db here. for now, we're spoofing
// var database = require('database-package')
var database = function() {
	return {}
}

var dbURL = process.env.dbURL || "example"
var db = new database;

module.exports = {

  db:     db,
  dbURL:  dbURL

};
