// external modules
var express  = require('express');

// internal modules
var db       = require('./config/db.js'); // for the db config, this is ignored by git

var app = express();
var port =  process.env.PORT || 3000; // set port with $PORT environment variable

app.listen(port);
app.use(express.static(__dirname + '/../www'));

require('./routes/appRoutes.js')(app);
require('./routes/pathRoutes.js')(app);

module.exports = app;
console.log('now serving on port: ', port)